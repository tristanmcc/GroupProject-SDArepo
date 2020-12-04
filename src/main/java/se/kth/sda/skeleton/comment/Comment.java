package se.kth.sda.skeleton.comment;
import se.kth.sda.skeleton.post.Post;
import javax.persistence.*;

@Entity
public class Comment {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    Long id;

    String body;
    private String email;


    private Long postId;


    public Comment() {
    }

    public Comment(Long id, String body, Long postId, String email) {
        this.id = id;
        this.body = body;
        this.postId = postId;
        this.email = email;
    }

    public Long getPostId() {
        return postId;
    }


    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getBody() {
        return body;
    }

    public void setBody(String body) {
        this.body = body;
    }

    public void setPostId(Long postId) {
        this.postId = postId;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }
}
