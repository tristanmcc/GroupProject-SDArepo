package se.kth.sda.skeleton.comment;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import se.kth.sda.skeleton.assignments.Assignment;

import java.util.List;
import java.util.Optional;

@Service
public class CommentService {

    @Autowired
    CommentRepository repo;

    public List<Comment> viewAll()
    {
        return repo.findAll();
    }

    public Optional<Comment> getById(Long id) {
        return repo.findById(id);
    }

    public Comment create(Comment newPost) { return repo.save(newPost); }

    public void delete(Long id) {
        repo.deleteById(id);
    }

    public List<Comment> getAllByQuestionId(Long questionId) { return repo.findAllByQuestionId(questionId);
    }

}

