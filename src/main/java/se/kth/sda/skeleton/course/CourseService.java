package se.kth.sda.skeleton.course;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class CourseService {
    @Autowired
    CourseRepository courseRepo;
    /* Lists all the Courses from the course repository */
    public List<Course> getAll() {
        return courseRepo.findAll();
    }

    /* List specific Course from teh course Repository */
    public Optional<Course> getByID(Long id) {
        return courseRepo.findById(id);
    }

    /* Create new course */
    public Course create (Course newCourse) {
        return courseRepo.save(newCourse);
    }

    /* Update new course */
    public Course update (Course updatedCourse) {
         return courseRepo.save(updatedCourse);
    }

    /* Delete a specific course*/
    public void delete (Long id) {
        courseRepo.deleteById(id);
    }

}
