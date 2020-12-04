package se.kth.sda.skeleton.comment;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import se.kth.sda.skeleton.auth.*;

import java.util.List;

@RestController
public class CommentController {
    @Autowired
    private CommentService commentService;

    @Autowired
    AuthService authService;

    @GetMapping("/comments/{postId}")
    public List<Comment> viewAll( @PathVariable Long postId) {
            return commentService.getAllByPostId(postId);
        }

        @PostMapping("/comments")
        public Comment create (@RequestBody Comment newComment)
        {
            newComment.setEmail(authService.getLoggedInUserEmail());
            return commentService.create(newComment);
        }

        @DeleteMapping("/comments/{id}")
        public void delete (@PathVariable Long id){
            commentService.delete(id);
        }
    }


