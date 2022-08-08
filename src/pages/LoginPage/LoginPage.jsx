import { TextField, Button, FormHelperText, CircularProgress } from "@mui/material";
import React, { useState } from "react";
import Logo from "../../assets/img/logo-login.svg";
import { useForm } from "../../hooks/UseForm";
import { useNavigate } from "react-router-dom";
import { Container, Form, ButtonSignup } from "./styled";
import axios from "axios";
import { BASE_URL } from "../../constants/BASE_URL";
import { goToFeed, goToSignUp } from "../../routes/Coordinator";

import IconButton from "@mui/material/IconButton";
import OutlinedInput from "@mui/material/OutlinedInput";
import InputLabel from "@mui/material/InputLabel";
import InputAdornment from "@mui/material/InputAdornment";
import FormControl from "@mui/material/FormControl";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import { EmailChecker } from "../../utils/EmailChecker";
import GenericToast from "../../components/GenericToast/GenericToast";
import { PasswordChecker } from "../../utils/PasswordChecker";
import { useUnProtectedPage } from "../../hooks/UseUnProtectPage";

export default function LoginPage() {

  useUnProtectedPage();

  const { form, onChange } = useForm({ email: "", password: "" });
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();

  const [error, setError] = useState(false);
  const [errorEmail, setErrorEmail] = useState(false);
  const [errorPassword, setErrorPassword] = useState(false);
  const [loading, setLoading] = useState(false);

  async function onSubmitForm (event) {
    event.preventDefault();
    setError(false);
    setErrorEmail(false);
    setErrorPassword(false);
    setLoading(true);

    if (EmailChecker(form.email)) {
      setLoading(false);
      return setErrorEmail(true);
    }
    if (PasswordChecker(form.password)) {
      setLoading(false);
      return setErrorPassword(true);
    }

    await axios.post(`${BASE_URL}/login`, form).then((res) => {
      localStorage.setItem("token", res.data.token);
      goToFeed(navigate);
    }).catch((err) => {
      setError(true);
      setErrorPassword(false);
      setErrorEmail(false);
    })
    setLoading(false);
  };

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  return (
    <div>
      <Container>
        <img src={Logo} alt="Logo Future Eats" />
        <Form onSubmit={onSubmitForm}>
        <GenericToast open={error} close={setError} severity="error" message="E-mail ou Senha inválidos." />
        <GenericToast open={errorEmail} close={setErrorEmail} severity="error" message="Digite um e-mail válido" />
        <GenericToast open={errorPassword} close={setErrorPassword} severity="error" message="Digite uma senha válida" />

          <TextField style={{margin: "16px 0 8px 0"}}
            error={form.email === "" ? false : EmailChecker(form.email)}
            placeholder="email@email.com"
            label="Email"
            type={"text"}
            name={"email"}
            value={form.email}
            onChange={onChange}
            required
          />
          {form.email === "" ? false : EmailChecker(form.email) && (
            <FormHelperText error>Digite um e-mail válido</FormHelperText>
          )}

          <FormControl style={{margin: "16px 0 8px 0"}} required variant="outlined">
            <InputLabel htmlFor="outlined-adornment-password">Senha</InputLabel>
            <OutlinedInput
              error={form.password === "" ? false : PasswordChecker(form.password)}
              placeholder="Mínimo 6 caracteres"
              margin="dense"
              id="outlined-adornment-password"
              type={showPassword ? "text" : "password"}
              name={"password"}
              value={form.password}
              onChange={onChange}
              endAdornment={
                <InputAdornment position="end">
                  <IconButton
                    aria-label="toggle password visibility"
                    onClick={() => setShowPassword(!showPassword)}
                    onMouseDown={handleMouseDownPassword}
                    edge="end"
                  >
                    {showPassword ? <VisibilityOff /> : <Visibility />}
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
          <Button style={{marginTop: "16px"}} type="submit" color="primary" variant="contained">
            {loading ? <CircularProgress color={"inherit"} size={"24px"} /> : "Entrar"}
          </Button>
        </Form>
        <ButtonSignup onClick={() => goToSignUp(navigate)}>
          Não possui cadastro? Clique aqui.
        </ButtonSignup>
      </Container>
    </div>
  );
}
