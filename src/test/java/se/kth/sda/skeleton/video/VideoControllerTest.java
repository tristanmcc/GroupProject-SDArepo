package se.kth.sda.skeleton.video;

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
public class VideoControllerTest {

        @Autowired
        VideoController videoController;

        @MockBean
        VideoService videoService;

        @Test
        public void should_ReturnTwoVideos_WhenGetAll() {
            // arrange
            Video video1 = new Video(1L, "God Father 1", "localhost:8080");
            Video video2 = new Video(2L, "God Father 2", "localhost:8081");

            List<Video> twoVideos = new ArrayList<>();
            twoVideos.add(video1);
            twoVideos.add(video2);
            when(videoService.getAll())
                    .thenReturn(twoVideos);

            //act
            List<Video> actualVideos = videoController.getAll(null);

            //assert
            Assertions.assertEquals(twoVideos.size(),actualVideos.size());
            Assertions.assertEquals(twoVideos.get(0).getVideoName(),actualVideos.get(0).getVideoName());
            Assertions.assertEquals(twoVideos.get(1).getVideoUrl(),actualVideos.get(1).getVideoUrl());

        }

        @Test
        void should_ReturnOneStudent_WhenGetById() {
            //arrange
            Video video1 = new Video(1L, "God Father 1", "localhost:8080");
            Video video2 = new Video(2L, "God Father 2", "localhost:8081");

            when(videoService.getById(1L))
                    .thenReturn(Optional.of(video1));
            when(videoService.getById(2L))
                    .thenReturn(Optional.of(video2));

            //act
            Video controllerVideo1 = videoController.getById(1L);
            Video controllerVideo2 = videoController.getById(2L);

            //assert
            Assertions.assertEquals(video1.getVideoName(), controllerVideo1.getVideoName());
            Assertions.assertEquals(video2.getVideoUrl(), controllerVideo2.getVideoUrl());

        }


}
