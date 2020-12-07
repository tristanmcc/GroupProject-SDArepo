package se.kth.sda.skeleton.comment;


import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.boot.test.mock.mockito.MockBean;

import java.util.stream.Collectors;
import java.util.stream.Stream;

import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.mockito.Mockito.when;


@SpringBootTest

public class CommentServiceTest {

    @Autowired
    CommentService commentService;

    @MockBean
    CommentRepository commentRepository;


    @Test
    public void should_ReturnTwoComments_WheViewAll() {

        when(commentRepository.findAll()).thenReturn(Stream
                .of(new Comment(1L, "body1", "email1"),
                        new Comment(2L, "body2", "email1"))
                .collect(Collectors.toList()));

        assertEquals(2, commentService.viewAll().size());

    }

    @Test
    void testCreate() {
        Comment comment = new Comment(1L, "body1", "email1");

        when(commentRepository.save(comment)).thenReturn(comment);

        assertEquals(comment, commentService.create(comment));

    }
}
