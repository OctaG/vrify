import React, {useState} from 'react';

import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import PersonAddIcon from '@mui/icons-material/PersonAdd';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';

import {Link, useHistory} from "react-router-dom";

import firebase from "../utils/firebase.js";

const axios = require('axios');

export default function SignUpForm(){

  const history = useHistory();

  const [firstNameFieldError, setFirstNameFieldError] = useState(false);
  const [lastNameFieldError, setLastNameFieldError] = useState(false);
  const [emailFieldError, setEmailFieldError] = useState(false);
  const [passwordFieldError, setPasswordFieldError] = useState(false);
  const [firebaseErrorMessage, setFirebaseErrorMessage] = useState("");

  const checkFirstNameFieldForError = (value) =>{
    const input = value;
    if(!input.match(/^[a-zA-Z\s]*$/)){
      setFirstNameFieldError(true);
    }else{
      setFirstNameFieldError(false);
    }
  }

  const checkLastNameFieldForError = (value) =>{
    const input = value;
    if(!input.match(/^[a-zA-Z\s]*$/)){
      setLastNameFieldError(true);
    }else{
      setLastNameFieldError(false);
    }
  }

  const checkEmailFieldForError = (value) =>{
    const input = value;
    const emailRegex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;
    if(!input.match(emailRegex)){
      setEmailFieldError(true);
    }else{
      setEmailFieldError(false);
    }
  }

  const checkPasswordFieldForError = (value) =>{
    const input = value;
    if(!input.match(/^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/)){
      setPasswordFieldError(true);
    }else{
      setPasswordFieldError(false);
    }
  }

  const createUserWithEmailAndPassword = (email ,password, firstName, lastName) => {
    firebase.auth().createUserWithEmailAndPassword(email, password)
    .then((userCredential) => {
      console.log("User created");
      history.push("./search")
      axios.post('http://127.0.0.1:5000/pushUserToDB', {
        firstName: firstName,
        lastName: lastName,
        email: email,
        uid: userCredential.user.uid,
      })
      .then(function (response) {
        console.log(response);
      })
      .catch(function (error) {
        console.log(error);
      });
    })
    .catch((error) => {
      const errorCode = error.code;
      if(errorCode === "auth/email-already-in-use"){
        setFirebaseErrorMessage(
          "Ya existe una cuenta con esta dirección de correo"
        );
      }else{
        setFirebaseErrorMessage(
          "Ocurrio algo inesperado. Intentelo nuevamente"
        );
      }
    });
  }

  const handleSubmit = (e) => {
    const data = new FormData(e.currentTarget);
    e.preventDefault();
    if(
        !firstNameFieldError
        && !lastNameFieldError
        && !emailFieldError
        && !passwordFieldError
      ){
      createUserWithEmailAndPassword(
        data.get('email'),
        data.get('password'),
        data.get('firstName'),
        data.get('lastName')
      );
    }
  };

  return(
    <Container component="main" maxWidth="md" >
      <Box
        sx={{
          marginTop: 8,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
        }}
      >
        <Avatar sx={{width:80, height:80, m:3, bgcolor: 'primary.main'}}>
          <PersonAddIcon fontSize="large" />
        </Avatar>
        <Typography component="h1" variant="h2">
          Crear una cuenta
        </Typography>
        <Typography
          component="h2"
          variant="h6"
          sx={{marginTop:2, justifyContent:'center'}}
        >
          {firebaseErrorMessage}
        </Typography>
        <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 3 }}>
          <Grid container spacing={2}>
            <Grid item xs={12} sm={6}>
              <TextField
                autoComplete="given-name"
                name="firstName"
                required
                fullWidth
                id="firstName"
                label="Nombre"
                autoFocus
                variant="standard"
                onChange = {(e) => checkFirstNameFieldForError(e.target.value)}
                error={firstNameFieldError}
                helperText={firstNameFieldError ?
                  "Nombre solo puede contener letras y no debe estar vacio"
                  :
                  ""
                }
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                required
                fullWidth
                id="lastName"
                label="Apellido"
                name="lastName"
                autoComplete="family-name"
                variant="standard"
                onChange = {(e) => checkLastNameFieldForError(e.target.value)}
                error={lastNameFieldError}
                helperText={lastNameFieldError ?
                  "Apellido solo puede contener letras y no debe estar vacio"
                  :
                  ""
                }
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                required
                fullWidth
                id="email"
                label="Correo electrónico"
                name="email"
                autoComplete="email"
                variant="standard"
                onChange = {(e) => checkEmailFieldForError(e.target.value)}
                error={emailFieldError}
                helperText={emailFieldError ?
                  "Debe ingresar una dirección de correo válida"
                  :
                  ""
                }
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                required
                fullWidth
                name="password"
                label="Contraseña"
                type="password"
                id="password"
                autoComplete="new-password"
                variant="standard"
                onChange = {(e) => checkPasswordFieldForError(e.target.value)}
                error={passwordFieldError}
                helperText={
                  "La contraseña debe contener minimo 8 caracteres, "
                  + "al menos una letra y un número"
                }
              />
            </Grid>
          </Grid>
          <Button
            type="submit"
            fullWidth
            variant="contained"
            sx={
              {
                mt: 3, mb: 2,
                backgroundColor: "button.secondary",
                '&:hover':{backgroundColor: "button.secondary"}
              }
            }
          >
            Crear cuenta
          </Button>
          <Grid container justifyContent="center" sx={{marginTop:2}}>
            <Grid item>
              <Link to="/login"> ¿Ya tiene una cuenta? Inicie sesión </Link>
            </Grid>
          </Grid>
        </Box>
      </Box>
    </Container>
  );
}
