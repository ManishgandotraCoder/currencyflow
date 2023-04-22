import * as React from 'react';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { SignupInterface } from './Signup.type';
import { CircularProgress, Link } from '@mui/material';
import "./Signup.scss"
import AppIcon from "../../../images/main_icon.svg"
import { useNavigate } from 'react-router-dom';

const theme = createTheme();

export default function SignupContainerComponent(props: SignupInterface) {

    const navigate = useNavigate()
    console.log(props.message);
    
    return (
        <ThemeProvider theme={theme}>
            <Grid container component="main" sx={{ height: '100vh' }}>
                <CssBaseline />
                <Grid
                    item
                    xs={false}
                    md={7}

                    sx={{
                        backgroundImage: 'url(https://www.tradesmarter.com/images/tradesmarter-trading-software.png)',
                        backgroundRepeat: 'no-repeat',
                        // backgroundSize: 'cover',
                        backgroundPosition: 'center',
                    }}
                />
                <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
                    <Box
                        sx={{
                            my: 8,
                            mx: 4,
                            display: 'flex',
                            flexDirection: 'column',
                            alignItems: 'center',
                        }}
                    >
                        <img className="main_icon" src={AppIcon} />
                        <Typography component="h1" variant="h5">
                            Sign Up
                        </Typography>
                        <Box component="form" noValidate onSubmit={(e) => props.handleSubmit(e)} sx={{ mt: 1 }}>
                            <TextField
                                margin="normal"
                                required
                                size='small'
                                fullWidth
                                id="name"
                                label="Full Name"
                                name="name"
                                autoComplete="name"
                                autoFocus
                            />
                            <TextField
                                margin="normal"
                                required
                                size='small'
                                fullWidth
                                id="email"
                                label="Email Address"
                                name="email"
                                autoComplete="email"
                            />
                            <TextField
                                margin="normal"
                                required
                                fullWidth
                                size='small'
                                name="password"
                                label="Password"
                                type="password"
                                id="password"
                                autoComplete="current-password"
                            />

                            <Button
                                type="submit"
                                fullWidth
                                variant="contained"
                                sx={{ mt: 3, mb: 2 }}
                            >
                                Sign Up
                            </Button>

                            <Grid container>
                                <Grid item xs>

                                </Grid>
                                <Grid item>
                                    <Link href="#/login" variant="body2">
                                        {"Already have an account? Login"}
                                    </Link>
                                </Grid>
                            </Grid>
                            {props.loader && <CircularProgress className='progress' color="inherit" /> || ""}

                            <Grid container>

                                <Grid item>
                                    <span className='error'>{props.message}</span>
                                </Grid>
                            </Grid>

                        </Box>
                    </Box>

                </Grid>

            </Grid>
        </ThemeProvider>
    );
}