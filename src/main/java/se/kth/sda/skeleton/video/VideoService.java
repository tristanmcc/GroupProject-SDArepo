package se.kth.sda.skeleton.video;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;


import java.util.List;
import java.util.Optional;

/**
 * Class is used in MVC design for performing CRUD functions with the repository
 *
 * Class {@code VideoService} is used by class {@code VideoController} to allow REST API
 * operations. This class implements {@code VideoRepository}.
 *
 * @author leefowler
 */


@Service
public class VideoService {

    @Autowired
    private VideoRepository videoRepo;

    public List<Video> getAll() {
        return videoRepo.findAll();
    }

    public Optional<Video> getById(Long id) {
        return videoRepo.findById(id);
    }

    public Video create(Video video) {
        return videoRepo.save(video);
    }

    public Video update(Video video) {
        return videoRepo.save(video);
    }

    public void delete(Long id) {
        videoRepo.deleteById(id);
    }

    //this is an extra method for relationship mapping video and courses
    public List<Video> getAllByCourseId(Long courseId) {
        return videoRepo.findAllByCourseId(courseId);
    }
}
