package se.kth.sda.skeleton.course;
import se.kth.sda.skeleton.video.Video;
import se.kth.sda.skeleton.assignments.Assignment;
import se.kth.sda.skeleton.answeredAssignments.AnsweredAssignment;

import javax.persistence.*;
import java.time.LocalDate;
import java.time.LocalDateTime;
import java.util.Date;
import java.util.List;

@Entity
@Table(name="courses")
public class Course {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id")
    private Long id;

    @OneToMany(mappedBy = "course", cascade = CascadeType.ALL)
    private List<Assignment> assignments;

    @OneToMany(mappedBy = "course", cascade = CascadeType.ALL)
    private List<AnsweredAssignment> assignmentsAnswered;

    private String title;

    @Column(length=1000)
    private String description;

    private LocalDateTime createDate;
    private LocalDateTime updateDate;

    @OneToMany(mappedBy = "course", cascade = CascadeType.ALL)
    private List<Video> videos;

    public Course() {

    }

    public Course(Long id, String title, String description, LocalDateTime createDate, LocalDateTime updateDate) {
        this.id = id;
        this.title = title;
        this.description = description;
        this.createDate = createDate;
        this.updateDate = updateDate;
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getTitle() {
        return title;
    }

    public void setTitle(String title) {
        this.title = title;
    }

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }

    public LocalDateTime getCreateDate() {
        return createDate;
    }

    public void setCreateDate(LocalDateTime createDate) {
        this.createDate = createDate;
    }

    public LocalDateTime getUpdateDate() {
        return updateDate;
    }

    public void setUpdateDate(LocalDateTime updateDate) {
        this.updateDate = updateDate;
    }

    @PrePersist
    void preInsert() {
        this.createDate = LocalDateTime.now();
    }

    @PreUpdate
    void PreUpdate() {
        this.updateDate = LocalDateTime.now();
    }
}
