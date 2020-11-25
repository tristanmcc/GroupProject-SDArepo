package se.kth.sda.skeleton.student;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class StudentService {

    @Autowired
    private StudentRepository studentRepo;

    public List<Student> getAll() {
        return studentRepo.findAll();
    }

    public Optional<Student> getById(Long id) {
        return studentRepo.findById(id);
    }

    public Student create(Student student) {
        return studentRepo.save(student);
    }

    public Student update(Student student) {
        return studentRepo.save(student);
    }

    public void delete(Long id) {
        studentRepo.deleteById(id);
    }
}
