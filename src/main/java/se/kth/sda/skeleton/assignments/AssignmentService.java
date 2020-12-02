//Package
package se.kth.sda.skeleton.assignments;

//Spring
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

//Services
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


    public List<Assignment> getAllByCourseId(Long courseId) {
        return assRepo.findAllByCourseId(courseId);
    }
}
