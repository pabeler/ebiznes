import React from "react";
import "./Contact.css";
import axios from "axios";

export default function Contact() {
  const handleSubmit = async (e) => {
    e.preventDefault();

    const name = e.target.name.value;
    const email = e.target.email.value;
    const phone = e.target.phone.value;
    const message = e.target.text.value;

    try {
      await axios.post("http://localhost:8080/api/v1/email/send-email", {
        name,
        email,
        phone,
        message,
      });

      console.log("Wiadomość wysłana");
    } catch (error) {
      console.error("Błąd podczas wysyłania wiadomości:", error);
    }
  };

  return (
    <div className="block container text-start">
      <h1>SKONTAKTUJ SIĘ Z NAMI</h1>
      <p>KSIĘGARNIA SPÓŁKA Z OGRANICZONĄ ODPOWIEDZIALNOŚCIĄ </p>
      <p>ul. Lorem 96</p>
      <p>96-042 Lorem ipsum</p>
      <p>Numer telefonu: 666 543 321</p>
      <p className="font-custom">
        KSIĘGARNIA SPÓŁKA Z OGRANICZONĄ ODPOWIEDZIALNOŚCIĄ, z siedzibą w Lorem
        ipsum przy ul. Lorem 96 informuje, że w przypadku skontaktowania się z
        nami i pozostawienia swoich danych, przetwarzać je będzie jako
        administrator danych, w celach kontaktowych. Podanie danych jest
        dobrowolne. Każdej osobie przysługuje prawo do dostępu do treści swoich
        danych i ich poprawiania.
      </p>

      <p>
        Wyślij nam wiadomość, a my skontaktujemy się z Tobą tak szybko jak to
        możliwe.
      </p>
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <input
            type="text"
            className="form-control"
            id="name"
            placeholder="Wpisz nazwę"
            name="name"
          />
        </div>
        <div className="mb-4">
          <input
            type="email"
            className="form-control"
            id="email"
            placeholder="Wpisz email"
            name="email"
          />
        </div>
        <div className="mb-4">
          <input
            type="tel"
            className="form-control"
            id="phone"
            placeholder="Wpisz numer telefonu"
            name="phone"
          />
        </div>
        <div className="mb-4">
          <textarea
            className="form-control"
            rows="5"
            id="comment"
            name="text"
            placeholder="Wpisz wiadomość"
          ></textarea>
        </div>
        <button type="submit" className="btn btn-primary">
          Wyślij wiadomość
        </button>
      </form>
    </div>
  );
}
