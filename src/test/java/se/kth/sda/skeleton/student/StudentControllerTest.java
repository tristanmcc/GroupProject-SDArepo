package se.kth.sda.skeleton.student;

import org.junit.jupiter.api.Assertions;
import org.junit.jupiter.api.Test;

import org.springframework.beans.factory.annotation.Autowired;

import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.boot.test.mock.mockito.MockBean;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;


import static org.mockito.Mockito.*;

@SpringBootTest
class StudentControllerTest  {

    @Autowired
    StudentController studentController;

    @MockBean
    StudentService studentService;

    @Test
    public void should_ReturnTwoStudents_WhenGetAll() {
        // arrange
        Student student1 = new Student(1L, "tommy", 12);
        Student student2 = new Student(2L, "lisa", 15);

        List<Student> twoStudents = new ArrayList<>();
        twoStudents.add(student1);
        twoStudents.add(student2);
        when(studentService.getAll())
                .thenReturn(twoStudents);

        //act
        List<Student> actualStudents = studentController.getAll();

        //assert
        Assertions.assertEquals(twoStudents.size(),actualStudents.size());
        Assertions.assertEquals(twoStudents.get(0).getName(),twoStudents.get(0).getName());
        Assertions.assertEquals(twoStudents.get(1).getName(),twoStudents.get(1).getName());

    }

    @Test
    void should_ReturnOneStudent_WhenGetById() {
        //arrange
        Student student1 = new Student(1L, "john smith", 12);
        Student student2 = new Student(2L, "peter jones", 14);

        when(studentService.getById(1L))
                .thenReturn(Optional.of(student1));
        when(studentService.getById(2L))
                .thenReturn(Optional.of(student2));

        //act
        Student controllerStudent1 = studentController.getById(1L);
        Student controllerStudent2 = studentController.getById(2L);

        //assert
        Assertions.assertEquals(student1.getName(), controllerStudent1.getName());
        Assertions.assertEquals(student2.getName(), controllerStudent2.getName());

    }

    @Test
    void testCreate() {
    }

    @Test
    void testUpdate() {
    }

    @Test
    void testDelete() {
    }
}