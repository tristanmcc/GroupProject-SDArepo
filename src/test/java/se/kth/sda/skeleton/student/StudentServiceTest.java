package se.kth.sda.skeleton.student;

import org.junit.jupiter.api.Assertions;
import org.junit.jupiter.api.Test;
import org.mockito.Mockito;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.boot.test.mock.mockito.MockBean;
import org.springframework.boot.test.mock.mockito.MockBeans;

import java.util.ArrayList;
import java.util.List;
import java.util.Objects;
import java.util.Optional;
import java.util.stream.Collectors;
import java.util.stream.Stream;

import static org.junit.jupiter.api.Assertions.*;
import static org.mockito.Mockito.*;

@SpringBootTest
class StudentServiceTest {

   @Autowired
   StudentService service;

    @MockBean
    StudentRepository repository;

//    @MockBean
//    StudentController studentController;

    @Test
    public void should_ReturnTwoStudents_WhenGetAll() {

        when(repository.findAll()).thenReturn(Stream
                .of(new Student(1L, "tom jones", 10),
                        new Student(2L,"lisa law",12))
                .collect(Collectors.toList()));

        assertEquals(2, service.getAll().size());

    }

    @Test
    void should_ReturnOneStudent_When_GetById() {

//     //arrange
//     Student student1 = new Student(1L, "john smith", 12);
//     Student student2 = new Student(2L, "peter jones", 14);
//
//     when(repository.findById(1L))
//             .thenReturn(Optional.of(student1));
//     when(repository.findById(1L))
//             .thenReturn(Optional.of(student2));
//
//     //act
//     Optional<Student> serviceStudent1 = service.getById(1L);
//     Optional<Student> serviceStudent2 = service.getById(2L);
//
//     //assert
//     Assertions.assertEquals(student1.getName(), serviceStudent1.get);
//     Assertions.assertEquals(student2.getName(), serviceStudent2.getName());


    }

    @Test
    void testCreate() {
     Student student = new Student(1L, "sally",13);
     when(repository.save(student)).thenReturn(student);

     assertEquals(student, service.create(student));

    }

    @Test
    void testUpdate() {
    }

    @Test
    void testDelete() throws Exception {

//     Student student = new Student(1L,"Benjamin", 12);
//     when(repository.findById(1L)).thenReturn(Optional.of(student));
//     service.delete(1L);
//     verify(repository, times(1)).delete(student);

    }
}