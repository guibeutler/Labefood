import React from "react";
import { InputsContainer } from "./styled";
import { TextField, Button, CircularProgress } from "@mui/material";
import { useForm } from "../../hooks/UseForm";
import { useNavigate } from "react-router-dom";
import { goToDefault } from "../../routes/Coordinator";
import { BASE_URL, token } from "../../constants/BASE_URL";
import axios from "axios";


export default function AddressForm() {
  const navigate = useNavigate();
  const address = localStorage.getItem("hasAddress") ? JSON.parse(localStorage.getItem("address")) : "";
  const { form, onChange, clean } = useForm({
    street:address ? address.street : "",
    number: address ? address.number : "",
    neighbourhood: address ? address.neighbourhood : "",
    city: address ? address.city : "",
    state: address ? address.state : "",
    complement: address ? address.complement : "",
  });

  const addAddress = (body, navigate) => {
    axios
      .put(`${BASE_URL}/address`, body, token)
      .then((res) => {
        console.log(res);
        localStorage.setItem("token", res.data.token);
        goToDefault(navigate);
        localStorage.setItem("hasAddress", true);
      })
      .catch((err) => {
        alert(err.response.data.message);
      });
  };

  const onSubmitForm = (event) => {
    event.preventDefault();
    addAddress(form, navigate);
    clean();
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
        style={{ marginTop: "16px" }}
        onClick={onSubmitForm}
        type={"submit"}
        fullWidth
        variant={"contained"}
        color={"secondary"}
        margin={"normal"}
        
        >
        <>Salvar</>
      </Button>
    </InputsContainer>
  );
}
