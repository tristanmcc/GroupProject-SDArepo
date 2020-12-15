package se.kth.sda.skeleton.answeredAssignments;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.Optional;

@Repository
public interface AnsweredAssignmentRepository extends JpaRepository<AnsweredAssignment,Long> {
    List<AnsweredAssignment> findAllByUserId(Long userId);
    List<AnsweredAssignment> findByAssignmentId(Long Id);

    Optional<AnsweredAssignment> findByAssignmentIdAndUserId(Long assignmentId, Long userId);
}
