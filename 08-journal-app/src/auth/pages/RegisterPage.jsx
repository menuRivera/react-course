import { Google } from "@mui/icons-material"
import { Link as RouterLink } from 'react-router-dom'
import { Button, Grid, Link, TextField, Typography } from "@mui/material"
import { AuthLayout } from "../layout/AuthLayout"

export const RegisterPage = () => {
    return (

        <AuthLayout title="Register">

            <form>
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
                        />
                    </Grid>

                    <Grid item xs={12} sx={{ mt: 2 }}>
                        <TextField
                            label="Contraseña"
                            type="password"
                            placeholder="Contraseña"
                            fullWidth
                        />
                    </Grid>


                    <Grid container spacing={2} sx={{ mb: 2, mt: 1 }}>
                        <Grid item xs={12} sm={6}>
                            <Button variant='contained' fullWidth>
                                Login
                            </Button>
                        </Grid>

                        {/* <Grid item xs={12} sm={6}>
                            <Button variant='contained' fullWidth>
                                <Google />
                                <Typography sx={{ ml: 1 }}>Google</Typography>
                            </Button>
                        </Grid> */}
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
