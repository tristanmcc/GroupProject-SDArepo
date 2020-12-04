package se.kth.sda.skeleton.video;

import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.boot.test.mock.mockito.MockBean;
import se.kth.sda.skeleton.student.Student;
import se.kth.sda.skeleton.student.StudentRepository;
import se.kth.sda.skeleton.student.StudentService;

import java.util.stream.Collectors;
import java.util.stream.Stream;

import static org.junit.jupiter.api.Assertions.*;
import static org.mockito.Mockito.when;

@SpringBootTest
class VideoServiceTest {

    @Autowired
    VideoService videoService;

    @MockBean
    VideoRepository repository;

//    @MockBean
//    StudentController studentController;

    @Test
    void should_ReturnTwoVideos_WhenGetAll() {
       /* when(repository.findAll()).thenReturn(Stream
                .of(new Video(1L, "maths lesson", "http:localhost/8080"),
                        new Video(2L,"physics lesson","http:localhost/8081"))
                .collect(Collectors.toList()));

        assertEquals(2, videoService.getAll().size());*/

    }

    @Test
    void getById() {
    }

    @Test
    void should_CreateNewVideo() {
       /* Video video = new Video(1L, "God Father","http:localhost/8082");
        when(repository.save(video)).thenReturn(video);

        assertEquals(video, videoService.create(video));*/
    }

    @Test
    void update() {
    }

    @Test
    void delete() {
    }
}