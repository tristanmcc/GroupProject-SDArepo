package se.kth.sda.skeleton.answeredAssignments;

import org.springframework.data.jpa.repository.JpaRepository;



public interface AnsweredAssignmentRepository extends JpaRepository<AnsweredAssignment,Long> {
    
    AnsweredAssignment findByAssignmentId(Long Id);

}
