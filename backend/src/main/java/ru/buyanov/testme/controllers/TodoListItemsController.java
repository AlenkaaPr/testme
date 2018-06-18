package ru.buyanov.testme.controllers;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.Arrays;
import java.util.List;

@RestController
@RequestMapping("api/items")
public class TodoListItemsController {

    @RequestMapping("")
    public ResponseEntity<List<String>> getItems() {
        return ResponseEntity.ok(Arrays.asList("One", "Two", "Three"));
    }
}
