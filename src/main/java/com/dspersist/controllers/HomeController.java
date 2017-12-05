package com.dspersist.controllers;

import com.dspersist.repositories.PostRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.servlet.ModelAndView;

@Controller
public class HomeController
{
    @RequestMapping("/")
    public ModelAndView index() {
        return new ModelAndView("/uni-files-app/public/index");

    }
}
