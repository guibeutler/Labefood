import React, { useState } from "react";
import { InputsContainer } from "./styled";
import { TextField, Button, CircularProgress, FormHelperText } from "@mui/material";
import { useForm } from "../../hooks/UseForm";
import { useNavigate } from "react-router-dom";
import { goToDefault } from "../../routes/Coordinator";
import { BASE_URL } from "../../constants/BASE_URL";
import { EstadoChecker } from "../../utils/EstadoChecker";
import GenericToast from "../../components/GenericToast/GenericToast";
import axios from "axios";

export default function AddressForm() {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const address = localStorage.getItem("hasAddress")
    ? JSON.parse(localStorage.getItem("address"))
    : "";
  const [invalidState, setInvalidState] = useState(false);
  const { form, onChange, clean } = useForm({
    street: address ? address.street : "",
    number: address ? address.number : "",
    neighbourhood: address ? address.neighbourhood : "",
    city: address ? address.city : "",
    state: address ? address.state : "",
    complement: address ? address.complement : "",
  });

  const addAddress = (body, navigate) => {
    setLoading(true);
    axios
      .put(`${BASE_URL}/address`, body, {
        headers: {
          auth: localStorage.getItem("token"),
        }
      })
      .then((res) => {
        console.log(res);
        localStorage.setItem("token", res.data.token);
        goToDefault(navigate);
        localStorage.removeItem("hasAddress");
        clean();
        setLoading(false);
      })
      .catch((err) => {
        alert(err.response.data.message);
        setLoading(false);
      });
  };

  const onSubmitForm = (event) => {
    event.preventDefault();
    if (!EstadoChecker(form.state)) {
      addAddress(form, navigate);
      setInvalidState(false);
    } else {
      setInvalidState(true);
    }
  };

  return (
    <InputsContainer>
      <form onSubmit={onSubmitForm}>
        <GenericToast open={invalidState}  close={setInvalidState} severity={"error"} message="Estado inválido" />
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
          placeholder="SP"
          onChange={onChange}
          type="text"
          label="Estado"
          variant="outlined"
          fullWidth
          margin={"normal"}
          required
          inputProps={{maxLength: 2, minLength: 2, pattern:"[A-Za-z]{2}", title: "Somente letras"}}
        />
        {form.state === "" ? null : EstadoChecker(form.state) && (
          <FormHelperText error>
            Estado inválido
          </FormHelperText>
        )} 
        <Button
          style={{ marginTop: "16px" }}
          type={"submit"}
          fullWidth
          variant={"contained"}
          color={"secondary"}
          margin={"normal"}
        >
          <>{loading ? <CircularProgress size={24} /> : "Salvar"}</>
        </Button>
      </form>
    </InputsContainer>
  );
}
