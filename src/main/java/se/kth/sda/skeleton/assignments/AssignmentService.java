package se.kth.sda.skeleton.assignments;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class AssignmentService {

    @Autowired
    AssignmentRepository assRepo;
    public List<Assignment> viewAll() {
       return assRepo.findAll();
    }

    public Optional<Assignment> getById(Long id) {
        return assRepo.findById(id);
    }

    public Assignment create(Assignment newAssignment) {
        return assRepo.save(newAssignment);
    }

    public Assignment update(Assignment updatedAssignment) {
        return assRepo.save(updatedAssignment);
    }

    public void delete(long id) {
        assRepo.deleteById(id);
    }


}
