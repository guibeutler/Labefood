import React from "react";
import { InputsContainer } from "./styled";
import {
  TextField,
  Button,
  CircularProgress,
  FormHelperText,
} from "@mui/material";
import { useForm } from "../../hooks/UseForm";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { goToAddress } from "../../routes/Coordinator";
import { BASE_URL } from "../../constants/BASE_URL";
import { EmailChecker } from "../../utils/EmailChecker";
import { PasswordChecker } from "../../utils/PasswordChecker";
import { CpfChecker } from "../../utils/CpfChecker";
import GenericToast from "../../components/GenericToast/GenericToast";
import axios from "axios";

import IconButton from "@mui/material/IconButton";
import OutlinedInput from "@mui/material/OutlinedInput";
import InputLabel from "@mui/material/InputLabel";
import InputAdornment from "@mui/material/InputAdornment";
import FormControl from "@mui/material/FormControl";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";

export default function SignUpForm() {
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState({ show: false, message: "" });
  const [showPassword, setShowPassword] = useState({
    password: false,
    confirmPassword: false,
  });
  const [inputError, setInputError] = useState(false);
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(false);
  const { form, onChange, clean } = useForm({
    name: "",
    email: "",
    cpf: "",
    password: "",
  });

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  const signUp = (body, navigate, setIsLoading) => {
    setIsLoading(true);
    axios
      .post(`${BASE_URL}/signup`, body)
      .then((res) => {
        localStorage.setItem("token", res.data.token);
        setIsLoading(false);
        goToAddress(navigate);
        clean();
        setConfirmPassword("");
        setInputError(false);
        setError({ show: false, message: "" });
      })
      .catch((err) => {
        setIsLoading(false);
        setError({ show: true, message: err.response.data.message });
        setInputError(false);
      });
  };

  const onSubmitForm = (event) => {
    event.preventDefault();
    if (
      confirmPassword === form.password &&
      !EmailChecker(form.email) &&
      !PasswordChecker(form.password) &&
      !CpfChecker(form.cpf) &&
      /^([a-zA-ZÀ-ú]+[ ][a-zA-ZÀ-ú]+)*$/.test(form.name)
    ) {
      signUp(form, navigate, setIsLoading);
    } else {
      setInputError(true);
      setError({ show: false, message: "" });
    }
  };
  return (
    <InputsContainer>
      <form onSubmit={onSubmitForm}>
        <GenericToast
          open={error.show}
          severity="error"
          message={error.message}
          close={() => setError({ show: false, message: "" })}
        />
        <GenericToast
          open={inputError}
          severity="error"
          message="Preencha os campos corretamente"
          close={() => setInputError(false)}
        />

        <TextField
          required
          name={"name"}
          value={form.name}
          mask={"[a-zA-ZÀ-ú].* [a-zA-ZÀ-ú].*"}
          inputProps={{
            pattern: "[a-zA-ZÀ-ú].* [a-zA-ZÀ-ú].*",
            title: "Digite seu NOME e SOBRENOME",
          }}
          onChange={onChange}
          placeholder={"Nome e Sobrenome"}
          type="name"
          label="Nome"
          variant="outlined"
          fullWidth
          margin={"normal"}
        />
        {form.name === ""
          ? null
          : !/^([a-zA-ZÀ-ú]+[ ][a-zA-ZÀ-ú]+)*$/.test(form.name) && (
              <FormHelperText error>Nome e Sobrenome inválidos</FormHelperText>
            )}
        <TextField
          required
          error={form.email === "" ? false : EmailChecker(form.email)}
          inputProps={{ title: "Digite seu email" }}
          name={"email"}
          placeholder={"email@email.com"}
          value={form.email}
          onChange={onChange}
          type="email"
          label="Email"
          variant="outlined"
          fullWidth
          margin={"normal"}
        />

        {form.email === ""
          ? null
          : EmailChecker(form.email) && (
              <FormHelperText error>Digite um E-mail Valido.</FormHelperText>
            )}

        <TextField
          required
          error={form.cpf === "" ? false : CpfChecker(form.cpf)}
          name={"cpf"}
          value={form.cpf}
          onChange={onChange}
          placeholder="12345678900"
          type="text"
          label="CPF"
          mask={"[0-9]{3}[0-9]{3}[0-9]{3}[0-9]{2}"}
          inputProps={{
            pattern: "[0-9]{3}[0-9]{3}[0-9]{3}[0-9]{2}",
            title: "Digite um CPF válido sem pontos ou traços",
          }}
          variant="outlined"
          fullWidth
          margin={"normal"}
        />
        {form.cpf === ""
          ? null
          : CpfChecker(form.cpf) && (
              <FormHelperText error>
                {form.cpf.includes(".") || form.cpf.includes("-")
                  ? "Remova o . e -"
                  : "Digite um CPF Valido."}
              </FormHelperText>
            )}

        <FormControl
          fullWidth
          style={{ margin: "16px 0 8px 0" }}
          required
          variant="outlined"
        >
          <InputLabel htmlFor="outlined-adornment-password">Senha</InputLabel>
          <OutlinedInput
            error={
              form.password === "" ? false : PasswordChecker(form.password)
            }
            placeholder="Mínimo 6 caracteres"
            margin="dense"
            id="outlined-adornment-password"
            type={showPassword.password ? "text" : "password"}
            name={"password"}
            value={form.password}
            onChange={onChange}
            endAdornment={
              <InputAdornment position="end">
                <IconButton
                  aria-label="toggle password visibility"
                  onClick={() =>
                    setShowPassword({
                      password: !showPassword.password,
                      confirmPassword: showPassword.confirmPassword,
                    })
                  }
                  onMouseDown={handleMouseDownPassword}
                  edge="end"
                >
                  {showPassword.password ? <VisibilityOff /> : <Visibility />}
                </IconButton>
              </InputAdornment>
            }
            label="Password"
          />
        </FormControl>

        {form.password === ""
          ? null
          : PasswordChecker(form.password) && (
              <FormHelperText error>Digite uma senha valida.</FormHelperText>
            )}

        <FormControl
          fullWidth
          style={{ margin: "16px 0 8px 0" }}
          required
          variant="outlined"
        >
          <InputLabel htmlFor="outlined-adornment-password">
            Confirmar
          </InputLabel>
          <OutlinedInput
            error={
              confirmPassword === "" ? false : confirmPassword !== form.password
            }
            placeholder="Confirme sua senha"
            margin="dense"
            id="outlined-adornment-password"
            type={showPassword.confirmPassword ? "text" : "password"}
            name={"confirmPassword"}
            value={confirmPassword}
            onChange={(event) => setConfirmPassword(event.target.value)}
            endAdornment={
              <InputAdornment position="end">
                <IconButton
                  aria-label="toggle password visibility"
                  onClick={() =>
                    setShowPassword({
                      password: showPassword.password,
                      confirmPassword: !showPassword.confirmPassword,
                    })
                  }
                  onMouseDown={handleMouseDownPassword}
                  edge="end"
                >
                  {showPassword.confirmPassword ? (
                    <VisibilityOff />
                  ) : (
                    <Visibility />
                  )}
                </IconButton>
              </InputAdornment>
            }
            label="Password"
          />
        </FormControl>

        {confirmPassword === ""
          ? null
          : confirmPassword !== form.password && (
              <FormHelperText fullWidth error>
                As senhas não conferem.
              </FormHelperText>
            )}

        <Button
          style={{ marginTop: "16px" }}
          type="submit"
          fullWidth
          variant="contained"
          color="primary"
          margin="normal"
        >
          {isLoading ? (
            <CircularProgress color={"inherit"} size={"24px"} />
          ) : (
            <>Cadastrar</>
          )}
        </Button>
      </form>
    </InputsContainer>
  );
}
