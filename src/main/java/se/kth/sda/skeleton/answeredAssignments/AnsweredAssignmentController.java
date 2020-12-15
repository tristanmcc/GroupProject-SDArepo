//Util
package se.kth.sda.skeleton.answeredAssignments;

//Spring
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.server.ResponseStatusException;

//Services
import se.kth.sda.skeleton.auth.AuthService;
import se.kth.sda.skeleton.user.User;
import se.kth.sda.skeleton.user.UserService;

//Util
import java.util.List;


/**
 * Class is used in MVC design for performing CRUD functions with the {@code AnsweredAssignmentService} class
 *
 * Class {@code AnsweredAssignmentController} allow REST API
 * operations. This class implements {@code AnsweredAssignmentService}.
 *
 * @author Tristan McCarthy
 */

@RestController
public class AnsweredAssignmentController {

    @Autowired
    private AnsweredAssignmentService answeredAssService;

    @Autowired
    AuthService authService;

    @Autowired
    UserService userService;

    @GetMapping("/assignments/answered")
    public List<AnsweredAssignment> viewAll(@RequestParam(required = false) Long userId) {
        if (userId == null) {
            return answeredAssService.viewAll();
        } else {
            return answeredAssService.getAllByUserId(userId);
        }
    }

    //get specific task by ID
    @GetMapping("/assignments/answered/{id}")
    public AnsweredAssignment getById(@PathVariable Long id){
        return answeredAssService.getById(id)
                .orElseThrow(()->new ResponseStatusException(HttpStatus.NOT_FOUND));
    }

    @GetMapping("/assignments/answeredByCourseId/{courseId}")
    public List<AnsweredAssignment> getAllByCourseId(@PathVariable Long courseId) {
            return answeredAssService.getAllByCourseId(courseId);

    }

    @GetMapping("/assignments/answeredByAssignmentId/{id}")
    public List<AnsweredAssignment> getByAssignmentId(@PathVariable Long id){
        return answeredAssService.getByAssignmentId(id);
                
    }

  /*  @GetMapping("/currentUser")
    public User getCurrentUser() {
        String email = authService.getLoggedInUserEmail();
        return userService.findUserByEmail(email);
    }*/

    @PostMapping("/assignments/answered")
    public AnsweredAssignment create(@RequestBody AnsweredAssignment newAnsweredAssignment) {
        newAnsweredAssignment.setEmail(authService.getLoggedInUserEmail());
        return answeredAssService.create(newAnsweredAssignment);
    }

    @PutMapping("/assignments/answered")
    public AnsweredAssignment update(@RequestBody AnsweredAssignment updatedAssignment){
        return answeredAssService.update(updatedAssignment);
    }


    @DeleteMapping("/assignments/answered/{id}")
    public void delete(@PathVariable long id) {
        answeredAssService.delete(id);
    }

}


