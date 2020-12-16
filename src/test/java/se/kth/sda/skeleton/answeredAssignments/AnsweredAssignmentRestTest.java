package se.kth.sda.skeleton.answeredAssignments;


import org.junit.jupiter.api.Assertions;
import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.extension.ExtendWith;
import org.mockito.Mock;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.boot.test.mock.mockito.MockBean;
import org.springframework.boot.test.web.client.TestRestTemplate;
import org.springframework.http.HttpEntity;
import org.springframework.http.HttpMethod;
import org.springframework.test.context.junit.jupiter.SpringExtension;

import static org.junit.jupiter.api.Assertions.assertEquals;


@ExtendWith(SpringExtension.class)
@SpringBootTest(webEnvironment = SpringBootTest.WebEnvironment.RANDOM_PORT)
public class AnsweredAssignmentRestTest {

    @Autowired
    AnsweredAssignmentService assAssignService;

    @Autowired
    TestRestTemplate testRestTemplate;

    @Test
    public void should_createAnsweredAssignment_when_RequestOnEndpoint(){

        //arrange
        AnsweredAssignment requestAssignment = new AnsweredAssignment(null, "ansAss1", "A1", "A2", "A3","A4","A5","A6","A7","A8","A9","A10",1L, 1L);

        //act
        AnsweredAssignment responseAssignment = testRestTemplate.postForObject("/assignments/answered", requestAssignment, AnsweredAssignment.class);
        System.out.println("response" + responseAssignment.getAnsweredAssignmentTitle());
        System.out.println("request" +requestAssignment.getAnsweredAssignmentTitle());

//        HttpEntity<AnsweredAssignment> response = testRestTemplate.postForEntity("/assignments/answered", requestAssignment, AnsweredAssignment.class);
//        AnsweredAssignment responseAssignment = response.getBody();


        //assert
        assert responseAssignment != null;
        assertEquals(requestAssignment.getAnsweredAssignmentTitle(), responseAssignment.getAnsweredAssignmentTitle());
//        Assertions.assertEquals(requestAssignment.getAnswer1(), responseAssignment.getAnswer1());


    }

    @Test
    public void should_GetAll_and_ReturnEmptyArray() {
        // Act
        AnsweredAssignment[] responseProducts = testRestTemplate.getForObject("/assignments/answered", AnsweredAssignment[].class);

        // Assert
        assertEquals(0, responseProducts);
    }

}
