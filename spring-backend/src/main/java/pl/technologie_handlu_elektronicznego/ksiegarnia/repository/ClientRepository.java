package pl.technologie_handlu_elektronicznego.ksiegarnia.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import pl.technologie_handlu_elektronicznego.ksiegarnia.model.Category;
import pl.technologie_handlu_elektronicznego.ksiegarnia.model.Client;

import java.util.List;

public interface ClientRepository extends JpaRepository<Client, Integer> {
    List<Client> findAll();


}
