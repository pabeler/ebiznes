package pl.technologie_handlu_elektronicznego.ksiegarnia.service;

import lombok.AllArgsConstructor;
import org.springframework.stereotype.Service;
import pl.technologie_handlu_elektronicznego.ksiegarnia.model.Category;
import pl.technologie_handlu_elektronicznego.ksiegarnia.repository.CategoryRepository;

import java.util.List;

@Service
@AllArgsConstructor
public class CategoryService {
    private final CategoryRepository categoryRepository;

    public List<Category> findAll() {
        return categoryRepository.findAll();
    }

    public Category addCategory(Category category) {
        return categoryRepository.save(category);
    }
}
