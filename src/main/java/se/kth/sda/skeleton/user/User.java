package se.kth.sda.skeleton.user;

import com.fasterxml.jackson.annotation.JsonIgnore;
import com.fasterxml.jackson.annotation.JsonProperty;
import org.hibernate.validator.constraints.Length;
import se.kth.sda.skeleton.answeredAssignments.AnsweredAssignment;

import javax.persistence.*;
import javax.validation.constraints.Email;
import javax.validation.constraints.NotEmpty;
import java.util.List;

@Entity
@Table(name="account")
public class User {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id")
    private Long id;

    @Email(message = "Invalid email address! Please provide a valid email address")
    @NotEmpty(message = "Please provide an email address")
    @Column(name = "email", unique = true)
    private String email;


    @Length(min = 5, max=100, message = "Password length most be between 5-100 characters")
    @Column(name = "password")
    private String password;

    @Length(min = 3, max=100, message = "Name must be between 3-100 characters")
    @Column(name = "name")
    private String name;

    private String userRole;

    // Hibernate needs a default constructor to function
    public User() {}

    public User(@Email(message = "Invalid email address! Please provide a valid email address") @NotEmpty(message = "Please provide an email address") String email, @Length(min = 5, max = 100, message = "Password length most be between 5-100 characters") String password, @Length(min = 3, max = 100, message = "Name must be between 3-100 characters") String name, String userRole) {
        this.email = email;
        this.password = password;
        this.name = name;
        this.userRole = userRole;
    }

    @OneToMany (cascade = CascadeType.ALL)
    List<AnsweredAssignment> answeredAssignments;

    public String getUserRole() { return userRole; }

    public void setUserRole(String userRole) {this.userRole = userRole;}

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

    @JsonIgnore
    public String getPassword() {
        return password;
    }

    @JsonProperty
    public void setPassword(String password) {
        this.password = password;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }
}
