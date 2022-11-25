import { Google } from "@mui/icons-material"
import { Link as RouterLink } from 'react-router-dom'
import { Alert, Button, Grid, Link, TextField, Typography } from "@mui/material"
import { AuthLayout } from "../layout/AuthLayout"
import { useForm } from "../../hooks/useForm"
import { useDispatch, useSelector } from "react-redux"
import { startGoogleSignIn, startLoginWithEmail } from "../../store/auth/thunks"
import { useMemo } from "react"

const formData = {
    email: '',
    password: ''
}

export const LoginPage = () => {
    const { status, errorMessage } = useSelector(state => state.auth)

    const dispatch = useDispatch()
    const { email, password, onInputChange } = useForm(formData)

    const isAuthenticating = useMemo(() => status === 'checking', [status])

    const onSubmit = (event) => {
        event.preventDefault();

        // console.log({ email, password });
        // dispatch(checkingAuthentication(email, password))
        dispatch(startLoginWithEmail({ email, password }))
    }

    const onGoogleSignIn = (event) => {
        event.preventDefault()

        dispatch(startGoogleSignIn())

    }
    return (

        <AuthLayout title="Login">

            <form onSubmit={onSubmit} aria-label='submit-form'
                className="animate__animated animate__fadeIn animate__faster"
            >
                <Grid container>
                    <Grid
                        item
                        xs={12}
                        sx={{ mt: 2 }}>
                        <TextField
                            label="Correo"
                            type="email"
                            placeholder="correo@google.com"
                            fullWidth
                            name="email"
                            value={email}
                            onChange={onInputChange}
                            inputProps={{
                                'data-testid': 'password'
                            }}
                        />
                    </Grid>

                    <Grid item xs={12} sx={{ mt: 2 }}>
                        <TextField
                            label="Contraseña"
                            type="password"
                            placeholder="Contraseña"
                            fullWidth
                            name="password"
                            value={password}
                            onChange={onInputChange}
                        />
                    </Grid>

                    <Grid
                        sx={{ display: (!!errorMessage ? '' : 'none'), mt: 1 }}
                        container>
                        <Grid
                            item
                            xs={12}
                        >
                            <Alert severity='error'>{errorMessage}</Alert>
                        </Grid>
                    </Grid>

                    <Grid container spacing={2} sx={{ mb: 2, mt: 1 }}>
                        <Grid item xs={12} sm={6}>
                            <Button type="submit" variant='contained' fullWidth disabled={isAuthenticating}>
                                Login
                            </Button>
                        </Grid>

                        <Grid item xs={12} sm={6}>
                            <Button onClick={onGoogleSignIn} variant='contained' fullWidth disabled={isAuthenticating} aria-label='google-btn'>
                                <Google />
                                <Typography sx={{ ml: 1 }}>Google</Typography>
                            </Button>
                        </Grid>
                    </Grid>

                    <Grid container
                        direction="row"
                        justifyContent='end'
                    >
                        <Link
                            color="inherit"
                            to="/auth/register"
                            component={RouterLink}
                        >
                            Crear una cuenta
                        </Link>
                    </Grid>
                </Grid>
            </form>

        </AuthLayout>

    )
}