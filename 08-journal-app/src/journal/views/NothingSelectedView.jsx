import { Grid, Typography } from '@mui/material';
import { StarOutline } from '@mui/icons-material';


export const NothingSelectedView = () => {
    return (
        <Grid
            container
            sx={{ minHeight: 'calc(100vh - 110px)', backgroundColor: 'primary.main', borderRadius: 3 }}
            spacing={0}
            alignItems="center"
            justifyContent="center"
            direction="column"
        >

            <Grid item xs={12}>
                <StarOutline sx={{ fontSize: 100, color: 'white' }} />
            </Grid>


            <Grid item xs={12}>
                <Typography color="white" variant='h5'>Selecciona o crea una entrada</Typography>
            </Grid>

        </Grid>
    )
}