package se.kth.sda.skeleton.comment;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class CommentService {

    @Autowired
    CommentRepository repo;

    public List<Comment> viewAll()
    {
        return repo.findAll();
    }

    public Comment create(Comment newPost) { return repo.save(newPost); }

    public void delete(Long id) {
        repo.deleteById(id);
    }

    public List<Comment> getAllByPostId(Long postId) { return repo.findAllByPostId(postId);
    }
}

