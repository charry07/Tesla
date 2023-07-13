import { Button, Grid, Typography } from '@mui/material';

type BannerType = {
  Img: any;
  id: string;
  Title: string;
};

export const Banner = ({ Img, id, Title }: BannerType) => {
  console.log(id);
  return (
    <div
      id={id}
      style={{
        backgroundImage: `url(${Img})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        width: '100%',
        height: '100vh',
      }}>
      <Grid container justifyContent='center'>
        <Typography color='primary' variant='h3' sx={{ mt: '20vh' }}>
          {Title}
        </Typography>
        <Grid container justifyContent='center' sx={{ mt: '50vh' }} spacing={4}>
          <Grid item>
            <Button variant='contained' color='primary' sx={{ width: '250px' }}>
              Explore Inventory
            </Button>
          </Grid>
          <Grid item>
            <Button
              color='secondary'
              variant='contained'
              sx={{
                width: '250px',
                backgroundColor: 'rgba(0,0,0,0.5)', // Color negro con 50% de transparencia
                ':hover': {
                  backgroundColor: 'rgba(0,0,0,0.7)', // Color negro con 70% de transparencia al pasar el mouse por encima
                },
              }}>
              Custom Order
            </Button>
          </Grid>
        </Grid>
      </Grid>
    </div>
  );
};
