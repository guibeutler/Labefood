import { TextField, Button } from '@mui/material';
import React from 'react';
import Logo from '../../assets/img/logo-login.svg';
import { useForm } from '../../hooks/UseForm';
import { useNavigate } from 'react-router-dom';
import { Container, Form } from './styled';
import axios from 'axios';
import { BASE_URL } from '../../constants/BASE_URL';
import { goToFeed } from '../../routes/Coordinator';

export default function LoginPage() {
  const { form, onChange, clean } = useForm({ email: '', password: '' });
  const navigate = useNavigate();

  const onSubmitForm = (event) => {
    event.preventDefault();
    axios.post(`${BASE_URL}login`, form)
    .then((res) => {
        localStorage.setItem('token', res.data.token);
        goToFeed(navigate);
        console.log(form);
    })
  };

  //   const Login = (form, clean, navigate) => {
  //     axios
  //       .post(`${BASE_URL}/login`, form)
  //       .then((res) => {
  //         localStorage.setItem('token', res.data.token);
  //         clean();
  //         goToFeed(navigate);
  //       })
  //       .catch((err) => {
  //         console.log(err);
  //       });
  //   };

  return (
    <div>
      <Container>
        <img src={Logo} alt="Logo Future Eats" />
        <Form onSubmit={onSubmitForm}>
          <TextField
            placeholder="Email"
            type={'text'}
            name={'email'}
            value={form.email}
            onChange={onChange}
            required
          />
          <TextField
            placeholder="Senha"
            margin="dense"
            type={'password'}
            name={'password'}
            value={form.password}
            onChange={onChange}
            required
          />
          <Button type="submit" color="primary" variant="contained">
            Entrar
          </Button>
        </Form>
      </Container>
    </div>
  );
}
