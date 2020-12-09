//Package
package se.kth.sda.skeleton.assignments;

//Junit
import org.junit.jupiter.api.Test;

//Spring
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.boot.test.mock.mockito.MockBean;

//Util
import java.time.LocalDate;
import java.time.LocalDateTime;
import java.util.stream.Collectors;
import java.util.stream.Stream;

import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.mockito.Mockito.when;


@SpringBootTest
public class AssignmentServiceTest {

    @Autowired
    AssignmentService assignmentService;

    @MockBean
    AssignmentRepository assignmentRepository;


    @Test
    public void should_ReturnTwoAssignments_WheViewAll() {
        LocalDate d1= LocalDate.now();
        when(assignmentRepository.findAll()).thenReturn(Stream
                .of(new Assignment(1L, "ass1", "assDes1", d1,"Q1", "Q2", "Q3","Q4","Q5","Q6","Q7","Q8","Q9","Q10"),
                        new Assignment(2L, "ass2", "assDes2",d1, "Q2.1", "Q2.2", "Q2.3","Q2.4","Q2.5","Q2.6","Q2.7","Q2.8","Q2.9","Q2.10"))
                .collect(Collectors.toList()));

        assertEquals(2, assignmentService.viewAll().size());

    }

    @Test
    void testCreate() {
        LocalDate d1= LocalDate.now();
        Assignment assignment = new Assignment(1L, "ass1", "assDes1",d1, "Q1", "Q2", "Q3","Q4","Q5","Q6","Q7","Q8","Q9","Q10");

                when(assignmentRepository.save(assignment)).thenReturn(assignment);

        assertEquals(assignment, assignmentService.create(assignment));

    }

    @Test
    void testUpdate() {
    }

}
