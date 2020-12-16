package se.kth.sda.skeleton.course;

import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.boot.test.mock.mockito.MockBean;

@SpringBootTest
class CourseControllerTest {

    @Autowired
    CourseController courseController;

    @MockBean
    CourseService courseService;

    @BeforeEach
    void setUp() {
//        Course course1 = new Course(1L,"math","calculus for high school");

    }

    @Test
    void getAll() {
    }

    @Test
    void getById() {
    }

    @Test
    void create() {
    }

    @Test
    void update() {
    }

    @Test
    void delete() {
    }
}