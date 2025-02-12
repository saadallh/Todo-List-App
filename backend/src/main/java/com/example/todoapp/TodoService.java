package com.example.todoapp;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class TodoService {
    @Autowired
    private TodoRepository todoRepository;

    public List<Todo> getAllTodos() {
        return todoRepository.findAll();
    }

    public Todo createTodo(Todo todo) {
        return todoRepository.save(todo);
    }

    public Void updateTodo(Long id){
        Todo todo = todoRepository.getReferenceById(id);
        todo.setCompleted(true);
        todoRepository.save(todo);
        return null;
    }

    public Void deleteTodo(Long id){
        todoRepository.deleteById(id);
        return null;
    }

}