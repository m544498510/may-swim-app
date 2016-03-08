package com.may.frame.controller;

import javax.servlet.http.HttpServletRequest;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.servlet.ModelAndView;


@Controller
@RequestMapping("/frame")

public class FrameController {

	@RequestMapping("/test")
	public ModelAndView test(HttpServletRequest request,ModelAndView model){
		model.addObject("test", "mxl!");
		model.setViewName("/index.jsp");
		return model;
	}
	
	@RequestMapping("/test1")
	public ModelAndView test1(HttpServletRequest request,ModelAndView model){
		model.addObject("test", "mxl!");
		model.setViewName("../public/index.html");
		return model;
	}

}
