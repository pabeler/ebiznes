package pl.technologie_handlu_elektronicznego.ksiegarnia.controller;

import lombok.AllArgsConstructor;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import pl.technologie_handlu_elektronicznego.ksiegarnia.model.Category;
import pl.technologie_handlu_elektronicznego.ksiegarnia.repository.CategoryRepository;
import pl.technologie_handlu_elektronicznego.ksiegarnia.service.CategoryService;

import java.util.List;

@RestController
@RequestMapping("/api/v1/categories")
@AllArgsConstructor
@CrossOrigin(origins = "http://localhost:3000")
public class CategoryController {
    private final CategoryService categoryService;

    @GetMapping("/all")
    public List<Category> getCategories(){
        return categoryService.findAll();
    }

    @PostMapping
    public Category addCategory(@RequestBody Category category) {
        return categoryService.addCategory(category);
    }
}
