package se.kth.sda.skeleton.answeredAssignments;

//JUnit
import org.junit.jupiter.api.Test;
import static org.junit.jupiter.api.Assertions.assertEquals;

//Spring
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.boot.test.mock.mockito.MockBean;

//Mockito
import static org.mockito.Mockito.when;

//Util
import java.util.stream.Collectors;
import java.util.stream.Stream;


@SpringBootTest
public class AnsweredAssignmentServiceTest {

        @Autowired
        AnsweredAssignmentService AnsweredAssService;

        @MockBean
        AnsweredAssignmentRepository answeredAssignmentRepository;


        @Test
        public void should_ReturnTwoAssignments_WheViewAll() {

            when(answeredAssignmentRepository.findAll()).thenReturn(Stream
                    .of(new AnsweredAssignment(1L, "ansAss1", "A1", "A2", "A3","A4","A5","A6","A7","A8","A9","A10",1L),
                            new AnsweredAssignment(2L, "ansAss2", "A2.1", "A2.2", "A2.3","A2.4","A2.5","A2.6","A2.7","A2.8","A2.9","A2.10", 2L))
                    .collect(Collectors.toList()));

            assertEquals(2, AnsweredAssService.viewAll().size());

        }

        @Test
        void testCreate() {
            AnsweredAssignment ansAss = new AnsweredAssignment(1L, "ansAss1", "A1", "A2", "A3","A4","A5","A6","A7","A8","A9","A10",1L);

            when(answeredAssignmentRepository.save(ansAss)).thenReturn(ansAss);

            assertEquals(ansAss, AnsweredAssService.create(ansAss));

        }

        @Test
        void testUpdate() {
        }
}
