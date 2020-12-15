package se.kth.sda.skeleton.answeredAssignments;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface AnsweredAssignmentRepository extends JpaRepository<AnsweredAssignment,Long> {
    List<AnsweredAssignment> findAllByUserId(Long userId);
    List<AnsweredAssignment> findByAssignmentId(Long Id);
    List<AnsweredAssignment> findAllByCourseId(Long courseId);
    

}
