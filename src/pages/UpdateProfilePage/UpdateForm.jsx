
import React from "react";
import { InputsContainer } from "./styled";
import { TextField, Button, CircularProgress } from "@mui/material";
import { useForm } from "../../hooks/UseForm";
import { useNavigate } from "react-router-dom";
import { goToDefault } from "../../routes/Coordinator";
import { BASE_URL, token } from "../../constants/BASE_URL";
import axios from "axios";

export default function UpdateForm() {
  const navigate = useNavigate();
  const user = localStorage.getItem("user") ? JSON.parse(localStorage.getItem("user")) : "";
  const { form, onChange, clean } = useForm({
    name: user ? user.name : "",
    email: user ? user.email : "",
    cpf: user ? user.cpf : "",
  });

  const updateProfile = (body, navigate) => {
    axios
      .put(`${BASE_URL}/profile`, body, token)
      .then((res) => {
        console.log(res);
        goToDefault(navigate);
      })
      .catch((err) => {
        alert(err.response.data.message);
      });
  };

  const onSubmitForm = (event) => {
    event.preventDefault();
    updateProfile(form, navigate);
    clean();
  };
  return (
    <InputsContainer>
      <form onSubmit={onSubmitForm}>
        <TextField
          name={"name"}
          value={form.name}
          onChange={onChange}
          type="text"
          label="Nome"
          variant="outlined"
          fullWidth
          margin={"normal"}
          required
        />
        <TextField
          name={"email"}
          value={form.email}
          onChange={onChange}
          type="email"
          label="E-mail"
          variant="outlined"
          fullWidth
          margin={"normal"}
          required
        />
        <TextField
          name={"cpf"}
          value={form.cpf}
          onChange={onChange}
          type="text"
          label="CPF"
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
        <>Salvar</>
      </Button>
    </InputsContainer>
  );
}
