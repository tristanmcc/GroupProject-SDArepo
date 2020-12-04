package se.kth.sda.skeleton.question;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.server.ResponseStatusException;
import se.kth.sda.skeleton.auth.AuthService;
import se.kth.sda.skeleton.user.User;
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


    @GetMapping("/posts")
    public List<Question> viewAll() {
        return questionService.viewAll();
    }

    //get specific task by ID
    @GetMapping("posts/{id}")
    public Question getById(@PathVariable Long id) {
        return questionService.getById(id)
                .orElseThrow(() -> new ResponseStatusException(HttpStatus.NOT_FOUND));
    }

    @PostMapping("/posts")
    public Question create(@RequestBody Question newQuestion) {
        System.out.println(newQuestion);
        newQuestion.setEmail(authService.getLoggedInUserEmail());
        return questionService.create(newQuestion);
    }

    @GetMapping("/currentUser")
    public User getCurrentUser() {
        String email = authService.getLoggedInUserEmail();
        return userService.findUserByEmail(email);

    }

    @DeleteMapping("/posts/{id}")
    public void delete(@PathVariable long id) {
        questionService.delete(id);
    }
}