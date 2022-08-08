import React, { useState } from "react";
import { InputsContainer } from "./styled";
import { TextField, Button, CircularProgress, FormHelperText } from "@mui/material";
import { useForm } from "../../hooks/UseForm";
import { useNavigate } from "react-router-dom";
import { goToDefault } from "../../routes/Coordinator";
import { BASE_URL, token } from "../../constants/BASE_URL";
import { EmailChecker } from "../../utils/EmailChecker";
import GenericToast from "../../components/GenericToast/GenericToast";
import axios from "axios";

export default function UpdateForm() {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [inputError, setInputError] = useState(false);
  const user = localStorage.getItem("user")
    ? JSON.parse(localStorage.getItem("user"))
    : "";
  const { form, onChange, clean } = useForm({
    name: user ? user.name : "",
    email: user ? user.email : "",
    cpf: user ? user.cpf : "",
  });

  const updateProfile = (body, navigate) => {
    axios
      .put(`${BASE_URL}/profile`, body, token)
      .then((res) => {
        goToDefault(navigate);
        localStorage.setItem("user", JSON.stringify(res.data.user));
        setLoading(false);
      })
      .catch((err) => {
        alert(err.response.data.message);
        setLoading(false);
      });
  };

  const onSubmitForm = (event) => {
    event.preventDefault();
    if (!EmailChecker(form.email) && 
    /^([a-zA-ZÀ-ú]+[ ][a-zA-ZÀ-ú]+)*$/.test(form.name)) {
      updateProfile(form, navigate);
    } else {
      setInputError(true);
    }
    
  };
  return (
    <InputsContainer>
      <form onSubmit={onSubmitForm}>
        <GenericToast open={inputError} close={setInputError} severity={"error"} message="Preencha os campos corretamente" />
        <TextField
          name={"name"}
          value={form.name}
          mask={"[A-ZÀ-ú].* [A-ZÀ-ú].*"}
          inputProps={{ pattern: "[a-zA-ZÀ-ú].* [a-zA-ZÀ-ú].*", title: "Digite seu NOME e SOBRENOME" }}
          placeholder={"Nome e Sobrenome"}
          onChange={onChange}
          type="text"
          label="Nome"
          variant="outlined"
          fullWidth
          margin={"normal"}
          required
        />
        {form.name === "" 
        ? null
        : !/^([a-zA-ZÀ-ú]+[ ][a-zA-ZÀ-ú]+)*$/.test(form.name) && (
          <FormHelperText error>
            Nome e Sobrenome inválidos
          </FormHelperText>
        )}

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

        {form.email === ""
          ? null
          : EmailChecker(form.email) && (
              <FormHelperText error>Digite um E-mail Valido.</FormHelperText>
        )}

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
          disabled
        />
        <Button style={{ marginTop: "16px" }}
          type={"submit"}
          fullWidth
          variant={"contained"}
          color={"primary"}
          margin={"normal"}
        >
          <>{loading ? <CircularProgress size={24} /> : "Salvar"}</>
        </Button>
      </form>
    </InputsContainer>
  );
}
