package pl.technologie_handlu_elektronicznego.ksiegarnia.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import pl.technologie_handlu_elektronicznego.ksiegarnia.model.Author;
import pl.technologie_handlu_elektronicznego.ksiegarnia.model.Category;

import java.util.List;

public interface CategoryRepository extends JpaRepository   <Category,Integer> {

    List<Category> findAll();
}
