package se.kth.sda.skeleton.answeredAssignments;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;


import java.util.List;
import java.util.Optional;

/**
 * Class is used in MVC design for performing CRUD functions with the {@code AssignmentService} class
 *
 * Class {@code AssignmentController} allow REST API
 * operations. This class implements {@code AssignmentService}.
 *
 * @author Tristan McCarthy
 */

@Service
public class AnsweredAssignmentService {

    @Autowired
    AnsweredAssignmentRepository answeredAssRepo;


    public List<AnsweredAssignment> viewAll() {
        return answeredAssRepo.findAll();
    }

    public Optional<AnsweredAssignment> getById(Long id) {
        return answeredAssRepo.findById(id);
    }

    public AnsweredAssignment create(AnsweredAssignment newAnsweredAssignment) {
        return answeredAssRepo.save(newAnsweredAssignment);
    }

    public AnsweredAssignment update(AnsweredAssignment updatedAnsweredAssignment) {
        return answeredAssRepo.save(updatedAnsweredAssignment);
    }

    public void delete(long id) {
        answeredAssRepo.deleteById(id);
    }


}

