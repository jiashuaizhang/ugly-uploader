package com.zhangjsh.uploadserver.controller;

import lombok.extern.slf4j.Slf4j;
import org.apache.commons.lang3.StringUtils;
import org.springframework.beans.factory.InitializingBean;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.http.codec.multipart.FilePart;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestPart;
import org.springframework.web.bind.annotation.RestController;
import reactor.core.publisher.Flux;
import reactor.core.publisher.Mono;

import java.io.File;
import java.util.HashMap;
import java.util.Map;
import java.util.regex.Pattern;

@Slf4j
@RestController
public class UploadController implements InitializingBean {

    public static final Pattern WINDOWS_DIR_PATTERN = Pattern.compile("^[c-zC-Z]:(\\\\[^\\\\/:*?\"<>|]+)*\\\\?$");
    @Value("${upload.default-dest-dir}")
    private String defaultDestDir;

    @PostMapping("/upload")
    public Mono<Map<String, Object>> upload(@RequestPart("files") Flux<FilePart> fileParts,
                                            @RequestPart("destDir") String destDir) {
        log.info("接收到上传请求, 上传路径: [{}], 默认上传路径: [{}]", destDir, defaultDestDir);
        Map<String, Object> result = new HashMap<>();
        if(StringUtils.isEmpty(destDir)) {
            destDir = defaultDestDir;
        } else if(!WINDOWS_DIR_PATTERN.matcher(destDir).matches()) {
            result.put("msg", "文件路径不规范");
            return Mono.just(result);
        }
        String finalDestDir = destDir;
        fileParts.subscribe(filePart -> {
            String distPath = null;
            String filename = null;
            System.out.println(filePart.getClass());
            try {
                filename = filePart.filename();
                distPath = finalDestDir + File.separator + filename;
                filePart.transferTo(new File(distPath));
                result.put(filename, true);
                log.info("上传成功，文件: [{}]", distPath);
            } catch (Exception e) {
                log.error("上传失败，文件: [{}]", distPath, e);
                result.put(filename, false);
            }
        });
        return Mono.just(result);
    }

    public static void main(String[] args) {
        String dir = "F:\\temp\\upload\\";
        System.out.println(WINDOWS_DIR_PATTERN.matcher(dir).matches());
        System.out.println(WINDOWS_DIR_PATTERN.pattern());
    }

    @Override
    public void afterPropertiesSet() throws Exception {
        File destDir = new File(defaultDestDir);
        if(!destDir.exists()) {
            destDir.mkdirs();
        }
    }
}
