package se.kth.sda.skeleton.question;

import se.kth.sda.skeleton.comment.Comment;

import javax.persistence.*;
import java.util.List;

@Entity
public class Question {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(columnDefinition = "TEXT")
    private String textBody;
    private String title;
    private String email;

    @OneToMany
    private List<Comment> commentList;

    public Question(Long id, String textBody, String title, String email, List commentList) {
        this.id = id;
        this.textBody = textBody;
        this.title = title;
        this.email = email;
        this.commentList = commentList;
    }

    public Question() {
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public String getTitle() {
        return title;
    }

    public void setTitle(String title) {
        this.title = title;
    }

    public String getTextBody() {
        return textBody;
    }

    public void setTextBody(String textBody) {
        this.textBody = textBody;
    }

    public List<Comment> getCommentList() {
       return commentList;
    }

   public void setCommentList(List<Comment> commentList) {
     this.commentList = commentList;
   }

}