package pl.technologie_handlu_elektronicznego.ksiegarnia.model;

public enum Rating {
    NIEPOROZUMIENIE(1),
    BARDZO_ZLA(2),
    SLABA(3),
    UJDZIE(4),
    SREDNIA(5),
    NIEZLA(6),
    DOBRA(7),
    BARDZO_DOBRA(8),
    REWELACYJNA(9),
    ARCYDZIELO(10);

    private final int value;

    Rating(int value) {
        this.value = value;
    }

    public int getValue() {
        return value;
    }

}
