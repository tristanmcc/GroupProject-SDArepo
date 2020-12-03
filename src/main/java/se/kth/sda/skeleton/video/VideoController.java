package se.kth.sda.skeleton.video;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.server.ResponseStatusException;

import java.util.List;



/**
 * Class is used in MVC design for performing CRUD functions with the {@code VideoService} class
 *
 * Class {@code VideoController} allow REST API
 * operations. This class implements {@code VideoService}.
 *
 * @author leefowler
 */
@RestController
@RequestMapping("/videos")
public class VideoController {

    private VideoService videoService;

    public VideoController(@Autowired VideoService videoService) {
        this.videoService = videoService;
    }

    //get method for all videos by relationship mapped course id
    @GetMapping("")
    public List<Video> getAll(@RequestParam(required = false) Long courseId){
        if (courseId == null) {
            return videoService.getAll();
        }
        else {
            return videoService.getAllByCourseId(courseId);
        }
    }

    // Return video by ID.
    @GetMapping("/{id}")
    public Video getById(@PathVariable Long id) {
        return videoService.getById(id)
                .orElseThrow(() -> new ResponseStatusException(HttpStatus.NOT_FOUND));
    }

    // Create a new video.
    @PostMapping("")
    public Video create(@RequestBody Video video) {
        return videoService.create(video);
    }

    // Update a video.
    @PutMapping("")
    public Video update(@RequestBody Video video) {
        return videoService.update(video);
    }

    // Delete a video.
    @DeleteMapping("/{id}")
    public void delete(@PathVariable Long id) {
        videoService.delete(id);
    }

}
