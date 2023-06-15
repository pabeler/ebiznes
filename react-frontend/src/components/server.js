const express = require("express");
const cors = require("cors");
const sgMail = require("@sendgrid/mail");

sgMail.setApiKey(
  "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"
);

const app = express();
app.use(express.json());
app.use(cors());

app.post("/send-email", async (req, res) => {
  const { name, email, phone, message } = req.body;

  const msg = {
    to: "wonverin@gmail.com",
    from: email,
    subject: `Wiadomość od ${name}`,
    text: `Nazwa: ${name}\nE-mail: ${email}\nTelefon: ${phone}\nWiadomość: ${message}`,
  };

  try {
    await sgMail.send(msg);
    console.log("Wiadomość wysłana");
    res.sendStatus(200);
  } catch (error) {
    console.error("Błąd podczas wysyłania wiadomości:", error);
    res.sendStatus(500);
  }
});

app.listen(5000, () => {
  console.log("Serwer nasłuchuje na porcie 5000");
});
