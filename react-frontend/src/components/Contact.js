import "./Contact.css";
export default function Contact() {
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
      <div className="mb-4">
        <input
          type="name"
          className="form-control"
          id="name"
          placeholder="Wpisz nazwe"
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
          type="phone"
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
          placeholder="Wpisz wiadomosc"
        ></textarea>
      </div>
    </div>
  );
}
