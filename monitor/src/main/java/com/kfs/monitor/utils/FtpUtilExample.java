package com.kfs.monitor.utils;

public class FtpUtilExample {
    public static void main(String[] args) {
        // 创建FtpUtil实例
        FtpUtil ftpUtil = new FtpUtil("ftp.example.com", 21, "username", "password");

        // 连接到FTP服务器
        if (ftpUtil.connect()) {
            System.out.println("Connected to the FTP server.");

            // 上传文件
            String localFilePath = "D:\\local\\file.txt";
            String remoteFilePath = "/remote/file.txt";
            if (ftpUtil.uploadFile(localFilePath, remoteFilePath)) {
                System.out.println("File uploaded successfully.");
            } else {
                System.out.println("Failed to upload file.");
            }

            // 下载文件
            String remoteDownloadPath = "/remote/file.txt";
            String localDownloadPath = "D:\\local\\downloaded_file.txt";
            if (ftpUtil.downloadFile(remoteDownloadPath, localDownloadPath)) {
                System.out.println("File downloaded successfully.");
            } else {
                System.out.println("Failed to download file.");
            }

            // 断开连接
            ftpUtil.disconnect();
            System.out.println("Disconnected from the FTP server.");
        } else {
            System.out.println("Failed to connect to the FTP server.");
        }
    }
}