package se.kth.sda.skeleton.assignments;

import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface AssignmentRepository extends JpaRepository<Assignment,Long> {
    List<Assignment> findAllByCourseId(Long courseId);
}
