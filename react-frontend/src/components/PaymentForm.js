export default function PaymentForm() {
  const [cardNumber, setCardNumber] = useState("");
  const [cardHolderName, setCardHolderName] = useState("");
  const [expiryDate, setExpiryDate] = useState("");
  const [cvv, setCvv] = useState("");

  const handlePayment = async (e) => {
    e.preventDefault();

    const paymentDetails = {
      cardNumber,
      cardHolderName,
      expiryDate,
      cvv,
    };

    // tutaj możesz wysłać szczegóły płatności na backend
    // ...
  };

  return (
    <form onSubmit={handlePayment}>
      <input
        type="text"
        value={cardNumber}
        onChange={(e) => setCardNumber(e.target.value)}
        placeholder="Numer karty"
      />
      <input
        type="text"
        value={cardHolderName}
        onChange={(e) => setCardHolderName(e.target.value)}
        placeholder="Imię i nazwisko posiadacza karty"
      />
      <input
        type="text"
        value={expiryDate}
        onChange={(e) => setExpiryDate(e.target.value)}
        placeholder="Data ważności karty (MM/RR)"
      />
      <input
        type="text"
        value={cvv}
        onChange={(e) => setCvv(e.target.value)}
        placeholder="CVV"
      />
      <button type="submit">Zapłać</button>
    </form>
  );
}
