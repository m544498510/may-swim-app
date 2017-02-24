package com.may.swim.controller;

import com.may.swim.model.Stroke;
import com.may.swim.service.ISwimService;
import com.may.util.http.ResponseUtil;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;

import javax.annotation.Resource;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.util.ArrayList;

/**
 * @author :    Mei XinLin
 * @version :   1.0
 */

@Controller
@RequestMapping("/stroke")
public class strokeController {
    @Resource(name = "swimService")
    private ISwimService iSwimService;
    
    @RequestMapping(method = RequestMethod.GET)
    public ArrayList<Stroke> getStroke(HttpServletRequest request,HttpServletResponse response){
        ArrayList<Stroke> strokes = iSwimService.getAllStroke();
        
        if(strokes.size()>0){
            ResponseUtil.success(request,response);
            return strokes;
        }else{
            ResponseUtil.notFoundError(response);
            return null;
        }
    }
}
