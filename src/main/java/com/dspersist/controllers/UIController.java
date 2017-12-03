package com.dspersist.controllers;

import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;

import javax.servlet.http.HttpSession;
import java.security.Principal;
import java.util.Collections;
import java.util.Map;

@RestController
@CrossOrigin(origins = "*")
public class UIController {

    @RequestMapping("/user") @ResponseBody
    public Principal user(Principal user) { return user; }

    @RequestMapping("/token") @ResponseBody
    public Map<String, String> token(HttpSession session) {
        return Collections.singletonMap("token", session.getId());
    }

    @RequestMapping("/home") @ResponseBody
    public String home () {
        return "Hello Session Redis";
    }
}
