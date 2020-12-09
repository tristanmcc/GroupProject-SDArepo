package se.kth.sda.skeleton.comment;

import se.kth.sda.skeleton.question.Question;

import javax.persistence.*;

@Entity
public class Comment {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    Long id;

    String body;
    private String email;

    @ManyToOne
    private Question question;


    public Comment() {
    }

    public Comment(Long id, String body, String email) {
        this.id = id;
        this.body = body;
        this.email = email;


    }

    public Question getQuestion() {
        return question;
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

    public void setQuestion(Question question) {
        this.question = question;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }


}
