package com.example.api.controller;

import com.example.api.model.Item;
import com.example.api.service.ItemService;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.web.servlet.AutoConfigureMockMvc;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.http.MediaType;
import org.springframework.test.web.servlet.MockMvc;

import static org.hamcrest.Matchers.*;
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.*;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.*;

@SpringBootTest
@AutoConfigureMockMvc
class ItemControllerTest {
    @Autowired
    private MockMvc mockMvc;

    @Autowired
    private ItemService itemService;

    @BeforeEach
    void setUp() {
        // Clear any existing items
        // itemService.deleteAll(); // if available
    }

    @Test
    void testCreateItem() throws Exception {
        String itemJson = "{\"name\": \"Test Item\", \"description\": \"This is a test\"}";
        mockMvc.perform(post("/items")
                .contentType(MediaType.APPLICATION_JSON)
                .content(itemJson))
                .andExpect(status().isCreated())
                .andExpect(jsonPath("$.name", is("Test Item")));
    }

    @Test
    void testGetAllItems() throws Exception {
        // Create a test item
        Item item = new Item(null, "Sample Item", "Sample Description");
        itemService.createItem(item);

        mockMvc.perform(get("/items"))
                .andExpect(status().isOk())
                .andExpect(jsonPath("$", hasSize(greaterThanOrEqualTo(1))));
    }

    @Test
    void testGetItemById() throws Exception {
        // Create a test item
        Item item = new Item(null, "Test Item", "Test Description");
        Item savedItem = itemService.createItem(item);

        mockMvc.perform(get("/items/" + savedItem.getId()))
                .andExpect(status().isOk())
                .andExpect(jsonPath("$.name", is("Test Item")));
    }

    @Test
    void testUpdateItem() throws Exception {
        // Create a test item
        Item item = new Item(null, "Original Name", "Original Description");
        Item savedItem = itemService.createItem(item);

        String updateJson = "{\"name\": \"Updated Name\", \"description\": \"Updated Description\"}";
        mockMvc.perform(put("/items/" + savedItem.getId())
                .contentType(MediaType.APPLICATION_JSON)
                .content(updateJson))
                .andExpect(status().isOk())
                .andExpect(jsonPath("$.name", is("Updated Name")));
    }

    @Test
    void testDeleteItem() throws Exception {
        // Create a test item
        Item item = new Item(null, "Item to Delete", "Will be deleted");
        Item savedItem = itemService.createItem(item);

        mockMvc.perform(delete("/items/" + savedItem.getId()))
                .andExpect(status().isNoContent());

        // Verify it's deleted
        mockMvc.perform(get("/items/" + savedItem.getId()))
                .andExpect(status().isNotFound());
    }
}
