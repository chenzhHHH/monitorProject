package com.kfs.monitor.utils;

import org.apache.commons.net.ftp.FTP;
import org.apache.commons.net.ftp.FTPClient;
import org.apache.commons.net.ftp.FTPReply;

import java.io.FileInputStream;
import java.io.FileOutputStream;
import java.io.IOException;
import java.io.InputStream;
import java.io.OutputStream;

public class FtpUtil {
    private FTPClient ftpClient;
    private String server;
    private int port;
    private String user;
    private String pass;

    public FtpUtil(String server, int port, String user, String pwd) {
        this.server = server;
        this.port = port;
        this.user = user;
        this.pass = pwd;
        this.ftpClient = new FTPClient();
    }

    public boolean connect() {
        try {
            ftpClient.connect(server, port);
            int replyCode = ftpClient.getReplyCode();
            if (!FTPReply.isPositiveCompletion(replyCode)) { // 使用FTPReply检查回复码
                return false;
            }
            ftpClient.login(user, pass);
            ftpClient.enterLocalPassiveMode();
            ftpClient.setFileType(FTP.BINARY_FILE_TYPE);
            return true;
        } catch (IOException e) {
            e.printStackTrace();
            return false;
        }
    }

    public boolean uploadFile(String localFilePath, String remoteFilePath) {
        try (InputStream inputStream = new FileInputStream(localFilePath)) {
            return ftpClient.storeFile(remoteFilePath, inputStream);
        } catch (IOException e) {
            e.printStackTrace();
            return false;
        }
    }

    public boolean downloadFile(String remoteFilePath, String localFilePath) {
        try (OutputStream outputStream = new FileOutputStream(localFilePath)) {
            return ftpClient.retrieveFile(remoteFilePath, outputStream);
        } catch (IOException e) {
            e.printStackTrace();
            return false;
        }
    }

    public void disconnect() {
        try {
            if (ftpClient.isConnected()) {
                ftpClient.logout();
                ftpClient.disconnect();
            }
        } catch (IOException e) {
            e.printStackTrace();
        }
    }
}