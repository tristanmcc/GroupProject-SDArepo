package se.kth.sda.skeleton.question;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.server.ResponseStatusException;
import se.kth.sda.skeleton.auth.AuthService;

import se.kth.sda.skeleton.user.UserService;

import java.util.List;

@RestController
public class QuestionController {

    @Autowired
    private QuestionService questionService;

    @Autowired
    AuthService authService;

    @Autowired
    UserService userService;


    @GetMapping("/questions")
    public List<Question> viewAll() {
        return questionService.viewAll();
    }

    //get specific task by ID
    @GetMapping("questions/{id}")
    public Question getById(@PathVariable Long id) {
        return questionService.getById(id)
                .orElseThrow(() -> new ResponseStatusException(HttpStatus.NOT_FOUND));
    }

    @PostMapping("/questions")
    public Question create(@RequestBody Question newQuestion) {
        System.out.println(newQuestion);
        newQuestion.setEmail(authService.getLoggedInUserEmail());
        return questionService.create(newQuestion);
    }

    @DeleteMapping("/questions/{id}")
    public void delete(@PathVariable long id) {
        questionService.delete(id);
    }
}