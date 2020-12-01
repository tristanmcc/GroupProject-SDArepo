//package
package se.kth.sda.skeleton.assignments;

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
 * Class is used in MVC design for performing CRUD functions with the {@code AssignmentService} class
 *
 * Class {@code AssignmentController} allow REST API
 * operations. This class implements {@code AssignmentService}.
 *
 * @author Tristan McCarthy
 */

@RestController
public class AssignmentController {

    @Autowired
    private AssignmentService assService;

    @Autowired
    AuthService authService;

    @Autowired
    UserService userService;


    @GetMapping("/assignments")
    public List<Assignment> viewAll() {
        return assService.viewAll();
    }

    //get specific task by ID
    @GetMapping("/assignments/{id}")
    public Assignment getById(@PathVariable Long id){
        return assService.getById(id)
                .orElseThrow(()->new ResponseStatusException(HttpStatus.NOT_FOUND));
    }

    @GetMapping("/currentUser")
    public User getCurrentUser() {
        String email = authService.getLoggedInUserEmail();
        return userService.findUserByEmail(email);
    }

    @GetMapping("/currentUserRole")
    public User getUserRole(){
        String userRole = authService.getLoggedInUserRole();
        return userService.findUserByUserRole(userRole);
    }

    @PostMapping("/assignments")
    public Assignment create(@RequestBody Assignment newAssignment) {
        newAssignment.setEmail(authService.getLoggedInUserEmail());
        return assService.create(newAssignment);
    }

    @PutMapping("/assignments")
    public Assignment update(@RequestBody Assignment updatedAssignment){
        return assService.update(updatedAssignment);
    }


    @DeleteMapping("/assignments/{id}")
    public void delete(@PathVariable long id) {
        assService.delete(id);
    }

}