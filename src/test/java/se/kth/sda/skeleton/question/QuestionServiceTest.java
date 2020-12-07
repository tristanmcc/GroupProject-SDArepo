package se.kth.sda.skeleton.question;


import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.boot.test.mock.mockito.MockBean;

import java.util.stream.Collectors;
import java.util.stream.Stream;

import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.mockito.Mockito.when;

@SpringBootTest
public class QuestionServiceTest {

    @Autowired
    QuestionService questionService;

    @MockBean
    QuestionRepository questionRepository;


    @Test
    public void should_ReturnTwoAssignments_WheViewAll() {

        when(questionRepository.findAll()).thenReturn(Stream
                .of(new Question(1L, "body1", "email"),
                        new Question(2L, "body2", "email2"))
                .collect(Collectors.toList()));

        assertEquals(2, questionService.viewAll().size());

    }

    @Test
    void testCreate() {
        Question question = new Question(1L, "body1", "email");

        when(questionRepository.save(question)).thenReturn(question);

        assertEquals(question, questionService.create(question));

    }


}
