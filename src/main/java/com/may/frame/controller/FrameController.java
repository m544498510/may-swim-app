package com.may.frame.controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;


@Controller
@RequestMapping("")

public class FrameController {

    @RequestMapping(value = "/userApp")
    public String userApp() {
        return "../dist/html/userApp.html";
    }

    @RequestMapping("/mainApp")
    public String test() {
        return "../dist/html/mainApp.html";
    }
}
