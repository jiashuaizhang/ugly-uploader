package com.zhangjsh.uploadserver;

import lombok.extern.slf4j.Slf4j;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

@Slf4j
@SpringBootApplication
public class UploadServerApplication {

    public static void main(String[] args) {
        SpringApplication.run(UploadServerApplication.class, args);
        log.info("started at " + System.getProperty("os.name"));
    }

}
