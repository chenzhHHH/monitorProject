package com.kfs.monitor.utils;

import com.alibaba.fastjson.JSON;
import com.alibaba.fastjson.TypeReference;

import java.util.Map;

public class FastJsonUtil {

    /**
     * Java对象转JSON字符串
     */
    public static String toJSONString(Object obj) {
        return JSON.toJSONString(obj);
    }

    /**
     * JSON字符串转Java对象
     */
    public static <T> T toJavaObject(String jsonString, Class<T> clazz) {
        return JSON.parseObject(jsonString, clazz);
    }

    /**
     * JSON字符串转Map
     */
    public static Map<String, Object> toMap(String jsonString) {
        return JSON.parseObject(jsonString, new TypeReference<Map<String, Object>>() {});
    }

    /**
     * Java对象转Map
     */
    public static Map<String, Object> toMap(Object obj) {
        return JSON.parseObject(toJSONString(obj), new TypeReference<Map<String, Object>>() {});
    }
}
