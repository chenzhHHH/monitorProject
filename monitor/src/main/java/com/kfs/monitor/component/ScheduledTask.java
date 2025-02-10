package com.kfs.monitor.component;

import org.springframework.scheduling.annotation.Scheduled;
import org.springframework.stereotype.Component;

@Component
public class ScheduledTask {
    @Scheduled(cron = "0/1 * * * * ?")
    public void task() {
        System.out.println("task");
    }
}
