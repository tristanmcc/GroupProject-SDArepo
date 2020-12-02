package se.kth.sda.skeleton.video;


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


    @Column(name = "url")
    private String url;


    public Video() {
    }


    public Video(Long id, String videoName, String url) {
        this.id = id;
        this.videoName = videoName;
        this.url = url;
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

    public String getUrl() {
        return url;
    }

    public void setUrl(String url) {
        this.url = url;
    }

    @Override
    public String toString() {
        return "Video{" +
                "id=" + id +
                ", videoName='" + videoName + '\'' +
                ", url='" + url + '\'' +
                '}';
    }
}
