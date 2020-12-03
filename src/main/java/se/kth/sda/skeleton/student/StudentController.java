package se.kth.sda.skeleton.student;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.server.ResponseStatusException;

import java.util.List;

/**
 * Class is used in MVC design for performing CRUD functions with the {@code StudentService} class
 *
 * Class {@code StudentController} allow REST API
 * operations. This class implements {@code StudentService}.
 *
 * @author leefowler
 */
@RestController
public class StudentController {

    @Autowired
    private StudentService studentService;

    public StudentController(@Autowired StudentService studentService) {
        this.studentService = studentService;
    }

    // Return all students.
    @GetMapping("/students")
    public List<Student> getAll() {
        return studentService.getAll();
    }

    // Return student by ID.
    @GetMapping("/students/{id}")
    public Student getById(@PathVariable Long id) {
        return studentService.getById(id)
                .orElseThrow(() -> new ResponseStatusException(HttpStatus.NOT_FOUND));
    }

    // Create a new post.
    @PostMapping("/students")
    public Student create(@RequestBody Student student) {
        return studentService.create(student);
    }

    // Update a post.
    @PutMapping("/students")
    public Student update(@RequestBody Student student) {
        return studentService.update(student);
    }

    // Delete a post.
    @DeleteMapping("/students/{id}")
    public void delete(@PathVariable Long id) {
        System.out.println("I am in controller against student id "+id);
        studentService.delete(id);
    }

}
