package se.kth.sda.skeleton.comment;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.server.ResponseStatusException;
import se.kth.sda.skeleton.assignments.Assignment;
import se.kth.sda.skeleton.auth.AuthService;

import java.util.List;

@RestController
public class CommentController {

    @Autowired
    private CommentService commentService;

    @Autowired
    AuthService authService;

    @GetMapping("/comments")
    public List<Comment> getAll(@RequestParam(required = false) Long questionId) {
        if (questionId == null) {
            return commentService.viewAll();
        } else {
            return commentService.getAllByQuestionId(questionId);
        }
    }

    @GetMapping("/comments/{id}")
    public Comment getById(@PathVariable Long id){
        return commentService.getById(id)
                .orElseThrow(()->new ResponseStatusException(HttpStatus.NOT_FOUND));
    }

    @PostMapping("/comments")
    public Comment create (@RequestBody Comment newComment) {
            newComment.setEmail(authService.getLoggedInUserEmail());
            return commentService.create(newComment);
        }

    @DeleteMapping("/comments/{id}")
    public void delete (@PathVariable Long id){
            commentService.delete(id);
        }
    }


