package se.kth.sda.skeleton.video;

import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.boot.test.mock.mockito.MockBean;
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

    @Test
    void should_ReturnTwoVideos_WhenGetAll() {
       when(repository.findAll()).thenReturn(Stream
                .of(new Video(1L, "maths lesson", "http:localhost/8080"),
                        new Video(2L,"physics lesson","http:localhost/8081"))
                .collect(Collectors.toList()));

        assertEquals(2, videoService.getAll().size());

    }

    @Test
    void should_CreateNewVideo() {
        Video video = new Video(1L, "God Father","http:localhost/8082");
        when(repository.save(video)).thenReturn(video);

        assertEquals(video, videoService.create(video));
    }

    @Test
    void should_UpdateVideo_When_PutForVideo() {

        Video video2 = new Video(2L, "Not the God Father","http:localhost/8082");
        when(repository.save(video2)).thenReturn(video2);

        assertEquals(video2, videoService.update(video2));
    }

}