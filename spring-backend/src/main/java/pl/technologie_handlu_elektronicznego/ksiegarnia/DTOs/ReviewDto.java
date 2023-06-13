package pl.technologie_handlu_elektronicznego.ksiegarnia.DTOs;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@Builder
@AllArgsConstructor
@NoArgsConstructor
public class ReviewDto {
    private Integer userId;
    private Integer bookId;
    private String description;
    private String rating;
}
