import React from "react";
import { InputsContainer } from "./styled";
import { TextField, Button, CircularProgress } from "@mui/material";
import { useForm } from "../../hooks/UseForm";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { goToDefault } from "../../routes/Coordinator";
import { BASE_URL } from "../../constants/BASE_URL";
import axios from "axios";

export default function AddressForm() {
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(false);
  const { form, onChange, clean } = useForm({
    street: " ",
    number: " ",
    neighbourhood: " ",
    city: " ",
    state: " ",
    complement: " ",
  });

  const addAddress = (body, navigate, setIsLoading) => {
    setIsLoading(true);
    axios
      .put(`${BASE_URL}/address`, body, {
        headers: {
          Authorization: localStorage.getItem("token"),
        },
      })
      .then((res) => {
       console.log(res)
        // localStorage.setItem("token", res.data.token);
        // setIsLoading(false);
        // goToDefault(navigate);
      })
      .catch((err) => {
        setIsLoading(false);
        alert(err.response.data.message);
      });
  };

  const onSubmitForm = (event) => {
    event.preventDefault();
    addAddress(form, navigate, setIsLoading);
    // clean();
  };
  return (
    <InputsContainer>
      <form onSubmit={onSubmitForm}>
        <TextField
          name={"street"}
          value={form.street}
          onChange={onChange}
          type="text"
          label="Logradouro"
          variant="outlined"
          fullWidth
          margin={"normal"}
          required
        />
        <TextField
          name={"number"}
          value={form.number}
          onChange={onChange}
          type="text"
          label="Número"
          variant="outlined"
          fullWidth
          margin={"normal"}
          required
        />
        <TextField
          name={"neighbourhood"}
          value={form.neighbourhood}
          onChange={onChange}
          type="text"
          label="Bairro"
          variant="outlined"
          fullWidth
          margin={"normal"}
          required
        />
        <TextField
          name={"complement"}
          value={form.complement}
          onChange={onChange}
          type="text"
          label="Complemento"
          variant="outlined"
          fullWidth
          margin={"normal"}
          required
        />
        <TextField
          name={"city"}
          value={form.city}
          onChange={onChange}
          type="Text"
          label="Cidade"
          variant="outlined"
          fullWidth
          margin={"normal"}
          required
        />
        <TextField
          name={"state"}
          value={form.state}
          onChange={onChange}
          type="text"
          label="Estado"
          variant="outlined"
          fullWidth
          margin={"normal"}
          required
        />
      </form>
      <Button
        onClick={onSubmitForm}
        type={"submit"}
        fullWidth
        variant={"contained"}
        color={"primary"}
        margin={"normal"}
      >
        {isLoading ? (
          <CircularProgress color={"inherit"} size={"24px"} />
        ) : (
          <>Cadastrar</>
        )}
      </Button>
    </InputsContainer>
  );
}
