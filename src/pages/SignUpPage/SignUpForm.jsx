import React from "react";
import { InputsContainer } from "./styled";
import { TextField, Button, CircularProgress } from "@mui/material";
import { useForm } from "../../hooks/UseForm";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { goToAddress } from "../../routes/Coordinator";
import { BASE_URL } from "../../constants/BASE_URL";
import axios from "axios";

export default function SignUpForm() {
  const [confirmPassword, setConfirmPassword] = useState("");
  const [erroPassword, setErroPassword] = useState(false);
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(false);
  const { form, onChange, clean } = useForm({
    name: "",
    email: "",
    cpf: "",
    password: "",
  });

  const signUp = (body, navigate, setIsLoading) => {
    setIsLoading(true);
    axios
      .post(`${BASE_URL}/signup`, body)
      .then((res) => {
          localStorage.setItem('token', res.data.token)
          setIsLoading(false)
          goToAddress(navigate)
      })
      .catch((err) => {
        setIsLoading(false);
        alert(err.response.data.message);
      });
  };

  const onSubmitForm = (event) => {
    event.preventDefault();
    if (confirmPassword === form.password) {
        signUp(form, navigate, setIsLoading);
       
    }
    else {
        setErroPassword(true)
        
    }
    clean();
  };
  return (
    <InputsContainer>
      <form onSubmit={onSubmitForm}>
        <TextField
          name={"name"}
          value={form.name}
          onChange={onChange}
          type="name"
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
          label="Email"
          variant="outlined"
          fullWidth
          margin={"normal"}
          required
        />
        <TextField
          name={"cpf"}
          value={form.cpf}
          onChange={onChange}
          type="number"
          label="CPF"
          variant="outlined"
          fullWidth
          margin={"normal"}
          required
        />
        <TextField
          name={"password"}
          value={form.password}
          onChange={onChange}
          type="password"
          label="Senha"
          variant="outlined"
          fullWidth
          margin={"normal"}
          required
        />{
            erroPassword && (alert('Erro'))
        }
        <TextField
          name={"confirmPassword"}
          value={confirmPassword}
          onChange={(event)=>{setConfirmPassword(event.target.value)}}
          type="password"
          label="Confirme a senha"
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
