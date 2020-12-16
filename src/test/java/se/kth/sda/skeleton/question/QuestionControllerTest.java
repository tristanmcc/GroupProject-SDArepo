package se.kth.sda.skeleton.question;


import org.junit.jupiter.api.Assertions;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.boot.test.mock.mockito.MockBean;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

import static org.mockito.Mockito.when;

@SpringBootTest
public class QuestionControllerTest {

    @Autowired
    QuestionController quesController;

    @MockBean
    QuestionService questionService;


    @Test
    public void should_ReturnTwoQuestions_WhenViewAll() {

        Question question1 = new Question(1L, "body", "email");
        Question question2 = new Question(2L, "body2", "email2");
        Question question3 = new Question(3L, "body3", "email3");


        List<Question> threeQuestion = new ArrayList<>();
        threeQuestion.add(question1);
        threeQuestion.add(question2);
        threeQuestion.add(question3);
        when(questionService.viewAll())
                .thenReturn(threeQuestion);

        //act
        List<Question> actualQuestion = quesController.viewAll();

        //assert
        Assertions.assertEquals(threeQuestion.size(),actualQuestion.size());
        Assertions.assertEquals(threeQuestion.get(0).getTextBody(),threeQuestion.get(0).getTextBody());
        Assertions.assertEquals(threeQuestion.get(1).getTextBody(),threeQuestion.get(1).getTextBody());

    }
    @Test
    void should_ReturnOneQuestion_WhenGetById() {


        //arrange
        Question question1 = new Question(1L, "body1", "email1");
        Question question2 = new Question(2L, "body2", "email2");
        Question question3 = new Question(3L, "body3", "email3");


        when(questionService.getById(1L))
                .thenReturn(Optional.of(question1));
        when(questionService.getById(2L))
                .thenReturn(Optional.of(question2));
        when(questionService.getById(3L))
                .thenReturn(Optional.of(question3));

        //act
        Question controllerQuestion1 = quesController.getById(1L);
        Question controllerQuestion2 = quesController.getById(2L);

        //assert
        Assertions.assertEquals(question1.getTextBody(), controllerQuestion1.getTextBody());
        Assertions.assertEquals(question2.getTextBody(), controllerQuestion2.getTextBody());

    }


}

