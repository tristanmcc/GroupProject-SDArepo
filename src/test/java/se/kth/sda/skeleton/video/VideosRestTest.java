package se.kth.sda.skeleton.video;

import org.junit.jupiter.api.Assertions;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.mock.mockito.MockBean;
import org.springframework.boot.test.web.client.TestRestTemplate;
import org.springframework.http.HttpEntity;
import org.springframework.http.HttpMethod;

public class VideosRestTest {


    @MockBean
    VideoService videoService;

    @Autowired
    TestRestTemplate testRestTemplate;


    @Test
    public void testUpdate() {
        // Arrange
        Video originalVideo = videoService.create(new Video(1L, "maths lesson", "http:localhost/8080"));
        Video updatedVideo = new Video(originalVideo.getId(), "Test updated title", "Test updated description");

        // Act
        Video responseVideo = putForVideo(updatedVideo);


        // Assert
        Assertions.assertEquals(updatedVideo.getVideoName(), responseVideo.getVideoName());
        Assertions.assertEquals(updatedVideo.getVideoUrl(), responseVideo.getVideoUrl());

        Video getByIdVideoResponse = testRestTemplate.getForObject("/videos" + updatedVideo.getId().toString(), Video.class);
        Assertions.assertEquals(updatedVideo.getVideoName(), getByIdVideoResponse.getVideoName());
        Assertions.assertEquals(updatedVideo.getVideoUrl(), getByIdVideoResponse.getVideoUrl());
    }

    private Video putForVideo(Video requestBody) {
        HttpEntity<Video> requestEntity = new HttpEntity<>(requestBody);
        HttpEntity<Video> response = testRestTemplate.exchange("/products", HttpMethod.PUT, requestEntity, Video.class);
        return response.getBody();
    }

}
