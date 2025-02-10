package com.kfs.monitor.controller;

import com.kfs.monitor.utils.WebSocket;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.io.IOException;
import java.net.URI;
import java.net.URISyntaxException;

@RestController
@RequestMapping("/test")
public class TestController {
    @PostMapping("/test")
    @CrossOrigin
    public String test() throws URISyntaxException {
        WebSocket webSocket = new WebSocket();

        webSocket.sendAllMessage("123123123");

        return "test";
    }
}
