package se.kth.sda.skeleton.video;
import se.kth.sda.skeleton.course.Course;

import javax.persistence.*;

@Entity
@Table(name="videos")
public class Video {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id")
    private Long id;

    @Column(name = "videoName")
    private String videoName;


    @Column(name = "videoUrl")
    private String videoUrl;

    @ManyToOne
    private Course course;

    public Course getCourse() {
        return course;
    }

    public void setCourse(Course course) {
        this.course = course;
    }

    public Video() {
    }

    public Video(Long id, String videoName, String videoUrl) {
        this.id = id;
        this.videoName = videoName;
        this.videoUrl = videoUrl;

    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getVideoName() {
        return videoName;
    }

    public void setVideoName(String videoName) {
        this.videoName = videoName;
    }

    public String getVideoUrl() {
        return videoUrl;
    }

    public void setVideoUrl(String videoUrl) {
        this.videoUrl = videoUrl;
    }

    @Override
    public String toString() {
        return "Video{" +
                "id=" + id +
                ", videoName='" + videoName + '\'' +
                ", videoUrl='" + videoUrl + '\'' +
               // ", course='" + course + + '\'' +
                '}';
    }
}
