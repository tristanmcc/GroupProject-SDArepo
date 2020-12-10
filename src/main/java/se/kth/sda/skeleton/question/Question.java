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

   @OneToMany(mappedBy = "question", cascade = CascadeType.ALL)
   private List<Comment> commentList;

    public Question(Long id, String textBody, String email) {
        this.id = id;
        this.textBody = textBody;
        this.email = email;

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

    public String getTextBody() {
        return textBody;
    }

    public void setTextBody(String textBody) {
        this.textBody = textBody;
    }

    /**public List<Comment> getCommentList() { return commentList;
    }

    public void setCommentList(List<Comment> commentList) { this.commentList = commentList;
   }**/

}