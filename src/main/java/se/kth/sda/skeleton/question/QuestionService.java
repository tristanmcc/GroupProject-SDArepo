package se.kth.sda.skeleton.question;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class QuestionService {

    @Autowired
    QuestionRepository repo;

    public List<Question> viewAll() { return repo.findAll(); }

    public Question create(Question newPost)
    {
        return repo.save(newPost);
    }

    public void delete(long id) {
        repo.deleteById(id);
    }

    public Optional<Question> getById(Long id) {
        return repo.findById(id);
    }
}