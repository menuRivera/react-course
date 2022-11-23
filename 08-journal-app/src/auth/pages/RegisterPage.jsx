import { Link as RouterLink } from 'react-router-dom'
import { Alert, Button, Grid, Link, TextField, Typography } from "@mui/material"
import { AuthLayout } from "../layout/AuthLayout"
import { useForm } from '../../hooks/useForm'
import { useMemo, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { startCreatingUserWithEmailPassword } from '../../store/auth/thunks'


const formValidations = {
    email: [(value) => value.includes('@'), 'El correo debe tener un @'],
    password: [(value) => value.length >= 6, 'La contraseña debe tener más de 6 letras'],
    displayName: [(value) => value.length >= 1, 'El nombre es obligatorio'],
}

export const RegisterPage = () => {
    const [formSubmitted, setFormSubmitted] = useState(false)
    const dispatch = useDispatch()

    const { status, errorMessage } = useSelector(state => state.auth)
    const isCheckingAuthentication = useMemo(() => status === 'checking', [status])

    const {
        displayName, email, password, onInputChange, displayNameValid, emailValid, passwordValid, isFormValid, formState
    } = useForm({
        email: '',
        displayName: '',
        password: ''
    }, formValidations)

    const onSubmit = (e) => {
        e.preventDefault()

        setFormSubmitted(true)

        if (!isFormValid) return

        dispatch(startCreatingUserWithEmailPassword(formState))
    }

    return (

        <AuthLayout title="Register">

            <form onSubmit={onSubmit}>
                <Grid container>
                    <Grid
                        item
                        xs={12}
                        sx={{ mt: 2 }}>
                        <TextField
                            label="Nombre"
                            type="text"
                            placeholder="John Snow"
                            fullWidth
                            name='displayName'
                            value={displayName}
                            onChange={onInputChange}
                            error={!!displayNameValid && formSubmitted}
                            helperText={displayNameValid}
                        />
                    </Grid>

                    <Grid
                        item
                        xs={12}
                        sx={{ mt: 2 }}>
                        <TextField
                            label="Correo"
                            type="email"
                            placeholder="correo@google.com"
                            fullWidth
                            name='email'
                            value={email}
                            onChange={onInputChange}
                            error={!!emailValid && formSubmitted}
                            helperText={emailValid}
                        />
                    </Grid>

                    <Grid item xs={12} sx={{ mt: 2 }}>
                        <TextField
                            label="Contraseña"
                            type="password"
                            placeholder="Contraseña"
                            fullWidth
                            name='password'
                            value={password}
                            onChange={onInputChange}
                            error={!!passwordValid && formSubmitted}
                            helperText={passwordValid}
                        />



                    </Grid>


                    <Grid container spacing={2} sx={{ mb: 2, mt: 1 }}>

                        <Grid item xs={12}>
                            <Alert
                                severity="error"
                                sx={{ display: (!!errorMessage ? '' : 'none') }}
                            >
                                {errorMessage}
                            </Alert>
                        </Grid>

                        <Grid item xs={12} sm={6}>
                            <Button
                                type='submit'
                                variant='contained'
                                disabled={isCheckingAuthentication}
                                fullWidth>
                                Register
                            </Button>
                        </Grid>

                    </Grid>

                    <Grid container
                        direction="row"
                        justifyContent='end'
                    >
                        <Link
                            color="inherit"
                            to="/auth/login"
                            component={RouterLink}
                        >
                            ¿Ya tienes cuenta?
                        </Link>
                    </Grid>

                </Grid>
            </form>

        </AuthLayout>

    )
}
