package com.dspersist.controllers;

import com.dspersist.models.Role;
import com.dspersist.models.User;
import com.dspersist.repositories.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.authority.AuthorityUtils;
import org.springframework.validation.BindingResult;
import org.springframework.web.bind.annotation.*;

import javax.servlet.http.HttpSession;
import javax.validation.Valid;
import java.security.Principal;
import java.util.Collections;
import java.util.Map;

@RestController
@CrossOrigin(origins = "*", maxAge = 3600)
public class UIController {

    @Autowired
    UserRepository userRepository;

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

    @RequestMapping("/sign-up")
    public ResponseEntity<?> singUp(@Valid @ModelAttribute("user") User user,
                                    BindingResult result)
    {
        try {
            if (result.hasErrors())
                return new ResponseEntity<>(HttpStatus.BAD_REQUEST);
            user.getRoles().add(new Role("USER"));
            userRepository.save(user);
            return new ResponseEntity<>(HttpStatus.CREATED);
        } catch (Exception e) {
            return new ResponseEntity<>(HttpStatus.CONFLICT);
        }
    }
}
