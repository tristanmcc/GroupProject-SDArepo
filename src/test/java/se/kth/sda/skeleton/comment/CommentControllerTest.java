package se.kth.sda.skeleton.comment;


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
public class CommentControllerTest {

    @Autowired
    CommentController commentController;

    @MockBean
    CommentService commentService;

    @Test
    public void should_ReturnThreeComments_WhenViewAll() {

        // arrange
        Comment comment1 = new Comment(1L, "body1", "email");
        Comment comment2 = new Comment(2L, "body2", "email2");
        Comment comment3 = new Comment(3L, "body3", "email3");


        List<Comment> threeComments = new ArrayList<>();
        threeComments.add(comment1);
        threeComments.add(comment2);
        threeComments.add(comment3);
        when(commentService.viewAll())
                .thenReturn(threeComments);


        //act
        List<Comment> actualAssignments = commentController.getAll(null);

        //assert
        Assertions.assertEquals(threeComments.size(),actualAssignments.size());
        Assertions.assertEquals(threeComments.get(0).getBody(),threeComments.get(0).getBody());
        Assertions.assertEquals(threeComments.get(1).getBody(),threeComments.get(1).getBody());
    }


    @Test
    void should_ReturnOneComment_WhenGetById() {


        //arrange
        Comment comment1 = new Comment(1L, "body1", "email1");
        Comment comment2 = new Comment(2L, "body3", "email2");
        Comment comment3 = new Comment(3L, "body3", "email3");

        when(commentService.getById(1L))
                .thenReturn(Optional.of(comment1));
        when(commentService.getById(2L))
                .thenReturn(Optional.of(comment2));
        when(commentService.getById(3L))
                .thenReturn(Optional.of(comment3));

        //act
        Comment controllerComment1 = commentController.getById(1L);
        Comment controllerComment2 = commentController.getById(2L);

        //assert
        Assertions.assertEquals(comment1.getBody(), controllerComment1.getBody());
        Assertions.assertEquals(comment2.getBody(), controllerComment2.getBody());

    }

}
