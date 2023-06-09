package pl.technologie_handlu_elektronicznego.ksiegarnia.controller;

import lombok.AllArgsConstructor;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import pl.technologie_handlu_elektronicznego.ksiegarnia.model.Category;
import pl.technologie_handlu_elektronicznego.ksiegarnia.repository.CategoryRepository;
import pl.technologie_handlu_elektronicznego.ksiegarnia.service.CategoryService;

import java.util.List;

@RestController
@RequestMapping("/api/v1/category")
@AllArgsConstructor
@CrossOrigin(origins = "http://localhost:3000")
public class CategoryController {
    private final CategoryService categoryService;

    @GetMapping("/get-all-categories")
    public List<Category> getCategories(){
        return categoryService.findAll();
    }
}
