import React, { useState, useEffect } from "react";
import { Button, Card, Col, Container, Form, Row } from "react-bootstrap";
import Box from "@mui/material/Box";
import axios from "axios";
import { Autocomplete, createFilterOptions } from "@mui/material";
import TextField from "@mui/material/TextField";
import "react-toastify/dist/ReactToastify.css";
import { toast } from "react-toastify";
export default function AddBook() {
  const filter = createFilterOptions();

  const [book, setBook] = useState({
    title: "",
    authors: [],
    description: "",
    categories: [],
    image_url: "",
    price: "",
    quantity: "",
    publisher: "",
  });

  const [authors, setAuthors] = useState([]);
  const [categories, setCategories] = useState([]);
  const [publishers, setPublishers] = useState([]);
  const [inputValueAuthor, setInputValueAuthor] = useState("");
  const [inputValueCategory, setInputValueCategory] = useState("");

  useEffect(() => {
    const fetchAuthors = async () => {
      const response = await axios.get(
        "http://localhost:8080/api/v1/authors/all"
      );
      setAuthors(response.data);
    };

    const fetchCategories = async () => {
      const response = await axios.get(
        "http://localhost:8080/api/v1/categories/all"
      );
      setCategories(response.data);
    };

    const fetchPublishers = async () => {
      const response = await axios.get(
        "http://localhost:8080/api/v1/publishers/all"
      );
      setPublishers(response.data);
    };

    fetchAuthors();
    fetchCategories();
    fetchPublishers();
  }, []);

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      console.log("Adding book: ", book);
      await axios.post("http://localhost:8080/api/v1/books/add-book", book);
      toast.success("Książka została dodana", book.title);
      setBook({
        title: "",
        authors: [],
        description: "",
        categories: [],
        image_url: "",
        price: "",
        quantity: "",
        publisher: "",
      });
    } catch (error) {
      console.error("Error adding book: ", error);
      toast.error("Błąd podczas dodawania książki", book.title);
    }
  };

  const handleGoogleApi = async () => {
    const googleBooksApiUrl = `https://www.googleapis.com/books/v1/volumes?q=intitle:${encodeURIComponent(
      book.title
    )}&maxResults=1`;

    try {
      const response = await axios.get(googleBooksApiUrl);

      if (response.data.items && response.data.items.length > 0) {
        const data = response.data.items[0].volumeInfo;

        setBook({
          ...book,
          authors: data.authors
            ? data.authors.map((author) => ({ name: author }))
            : [],
          description: data.description || "",
          categories: data.categories
            ? data.categories.map((category) => ({ name: category }))
            : [],
          image_url: data.imageLinks
            ? data.imageLinks.thumbnail
            : "/images/blank.png",
          publisher: data.publisher ? { name: data.publisher } : "",
        });

        console.log("Book: ", book);
      }
    } catch (error) {
      console.error("Error getting data from Google API: ", error);
    }
  };

  return (
    <Container>
      <Row>
        <Col>
          <Card>
            <Card.Body>
              <h2>Dodaj książkę</h2>
              <Form onSubmit={handleSubmit}>
                <Form.Group controlId="formTitle">
                  <Form.Label>Tytuł</Form.Label>
                  <Form.Control
                    required
                    type="text"
                    placeholder="Tytuł"
                    value={book.title}
                    onChange={(e) =>
                      setBook({ ...book, title: e.target.value })
                    }
                  />
                </Form.Group>
                <Form.Group controlId="formAuthor">
                  <Form.Label>Autorzy</Form.Label>
                  <Autocomplete
                    required
                    multiple
                    freeSolo
                    value={book.authors}
                    options={authors}
                    getOptionLabel={(option) => {
                      // jeżeli opcja jest ciągiem znaków (wprowadzona ręcznie), zwróć ją bezpośrednio
                      if (typeof option === "string") {
                        return option;
                      }
                      // jeżeli opcja jest obiektem (wybrana z listy), zwróć jej właściwość 'name'
                      if (option && option.name) {
                        return option.name;
                      }
                      // jeżeli opcja jest pusta lub nieznana, zwróć pusty ciąg
                      return "";
                    }}
                    filterOptions={(options, params) => {
                      const filtered = filter(options, params);

                      // if there's a match, don't push inputValue to options
                      if (
                        params.inputValue !== "" &&
                        !filtered.some(
                          (option) => option.name === params.inputValue
                        )
                      ) {
                        filtered.push({
                          name: params.inputValue,
                        });
                      }

                      return filtered;
                    }}
                    onInputChange={(event, newInputValue) => {
                      setInputValueAuthor(newInputValue);
                    }}
                    onChange={(event, newValues) => {
                      setBook({
                        ...book,
                        authors: newValues.map((value) =>
                          // if the value is a string (entered manually), create a new object with 'name' property
                          typeof value === "string" ? { name: value } : value
                        ),
                      });
                    }}
                    renderOption={(props, option) => (
                      <Box component="li" {...props}>
                        {typeof option === "string" ? option : option.name}
                      </Box>
                    )}
                    renderInput={(params) => (
                      <TextField
                        {...params}
                        label="Autorzy"
                        variant="outlined"
                      />
                    )}
                  />
                </Form.Group>
                <Form.Group controlId="formPublisher">
                  <Form.Label>Wydawca</Form.Label>
                  <Autocomplete
                    required
                    freeSolo
                    value={book.publisher}
                    options={publishers}
                    getOptionLabel={(option) => {
                      // jeżeli opcja jest ciągiem znaków (wprowadzona ręcznie), zwróć ją bezpośrednio
                      if (typeof option === "string") {
                        return option;
                      }
                      // jeżeli opcja jest obiektem (wybrana z listy), zwróć jej właściwość 'name'
                      if (option && option.name) {
                        return option.name;
                      }
                      // jeżeli opcja jest pusta lub nieznana, zwróć pusty ciąg
                      return "";
                    }}
                    filterOptions={(options, params) => {
                      const filtered = filter(options, params);

                      // if there's a match, don't push inputValue to options
                      if (
                        params.inputValue !== "" &&
                        !filtered.some(
                          (option) => option.name === params.inputValue
                        )
                      ) {
                        filtered.push({
                          name: params.inputValue,
                        });
                      }

                      return filtered;
                    }}
                    onInputChange={(event, newValue) => {
                      setBook({
                        ...book,
                        publisher:
                          typeof newValue === "string"
                            ? { name: newValue }
                            : newValue,
                      });
                    }}
                    renderInput={(params) => (
                      <TextField
                        {...params}
                        label="Wydawca"
                        variant="outlined"
                      />
                    )}
                  />
                </Form.Group>
                <Form.Group controlId="formDescription">
                  <Form.Label>Opis</Form.Label>
                  <Form.Control
                    as="textarea"
                    rows={3}
                    placeholder="Opis"
                    value={book.description}
                    onChange={(e) =>
                      setBook({ ...book, description: e.target.value })
                    }
                  />
                </Form.Group>
                <Form.Group controlId="formCategory">
                  <Form.Label>Kategorie</Form.Label>
                  <Autocomplete
                    required
                    multiple
                    value={book.categories}
                    freeSolo
                    options={categories}
                    getOptionLabel={(option) => {
                      // jeżeli opcja jest ciągiem znaków (wprowadzona ręcznie), zwróć ją bezpośrednio
                      if (typeof option === "string") {
                        return option;
                      }
                      // jeżeli opcja jest obiektem (wybrana z listy), zwróć jej właściwość 'name'
                      if (option && option.name) {
                        return option.name;
                      }
                      // jeżeli opcja jest pusta lub nieznana, zwróć pusty ciąg
                      return "";
                    }}
                    filterOptions={(options, params) => {
                      const filtered = filter(options, params);

                      // if there's a match, don't push inputValue to options
                      if (
                        params.inputValue !== "" &&
                        !filtered.some(
                          (option) => option.name === params.inputValue
                        )
                      ) {
                        filtered.push({
                          name: params.inputValue,
                        });
                      }

                      return filtered;
                    }}
                    onInputChange={(event, newInputValue) => {
                      setInputValueCategory(newInputValue);
                    }}
                    onChange={(event, newValues) => {
                      setBook({
                        ...book,
                        categories: newValues.map((value) =>
                          // if the value is a string (entered manually), create a new object with 'name' property
                          typeof value === "string" ? { name: value } : value
                        ),
                      });
                    }}
                    renderOption={(props, option) => (
                      <Box component="li" {...props}>
                        {typeof option === "string" ? option : option.name}
                      </Box>
                    )}
                    renderInput={(params) => (
                      <TextField
                        {...params}
                        label="Kategorie"
                        variant="outlined"
                      />
                    )}
                  />
                </Form.Group>
                <Form.Group controlId="formImage">
                  <Form.Label>Obrazek URL</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Obrazek URL"
                    value={book.image_url}
                    onChange={(e) =>
                      setBook({ ...book, image_url: e.target.value })
                    }
                  />
                  <img
                    src={book.image_url || "/images/blank.png"}
                    alt="Preview"
                    style={{ width: "127px", height: "193px" }}
                  />
                </Form.Group>

                <Form.Group controlId="formPrice">
                  <Form.Label>Cena</Form.Label>
                  <Form.Control
                    required
                    type="text"
                    placeholder="Cena"
                    value={book.price}
                    onChange={(e) =>
                      setBook({ ...book, price: e.target.value })
                    }
                  />
                </Form.Group>
                <Form.Group controlId="formQuantity">
                  <Form.Label>Ilość</Form.Label>
                  <Form.Control
                    required
                    type="text"
                    placeholder="Ilość"
                    value={book.quantity}
                    onChange={(e) =>
                      setBook({ ...book, quantity: e.target.value })
                    }
                  />
                </Form.Group>
                <Button variant="primary" type="submit">
                  Dodaj
                </Button>
                <Button
                  variant="secondary"
                  type="button"
                  onClick={handleGoogleApi}
                >
                  Dodaj z Google API
                </Button>
              </Form>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
}
