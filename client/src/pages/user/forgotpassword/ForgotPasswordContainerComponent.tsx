import * as React from 'react';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { ForgotPasswordInterface } from './ForgotPassword.type';
import { CircularProgress, Link } from '@mui/material';
import "./ForgotPassword.scss"
import AppIcon from "../../../images/main_icon.svg"
import { useNavigate } from 'react-router-dom';

const theme = createTheme();

export default function ForgotPasswordContainerComponent(props: ForgotPasswordInterface) {

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
                            Forgot Password
                        </Typography>
                        <Box component="form" noValidate onSubmit={(e) => props.handleSubmit(e, props.sucessMessage)} sx={{ mt: 1 }}>
                            <>Please enter your email address.</>
                            <TextField
                                margin="normal"
                                required
                                size='small'
                                fullWidth
                                id="email"
                                label="Email Address"
                                name="email"
                                autoComplete="email"
                                autoFocus
                            />
                            {props.sucessMessage === "OTP sent successfully, Please check your email" && <TextField
                                margin="normal"
                                required
                                size='small'
                                fullWidth
                                id="otp"
                                label="OTP"
                                name="otp"
                                autoComplete="otp"
                                autoFocus
                            /> || ''}

                            {props.sucessMessage === "OTP sent successfully, Please check your email" &&
                                <Button
                                    type="submit"
                                    fullWidth
                                    variant="contained"
                                    sx={{ mt: 3, mb: 2 }}
                                >
                                    Verify OTP
                                </Button> || <Button
                                    type="submit"
                                    fullWidth
                                    variant="contained"
                                    sx={{ mt: 3, mb: 2 }}
                                >
                                    Continue
                                </Button>}


                            <Grid container>
                                <Grid item xs>
                                    <Link href="#/login" variant="body2">
                                        Back to Login
                                    </Link>
                                </Grid>

                            </Grid>
                            {props.sucessMessage}
                            {props.loader && <CircularProgress className='progress' color="inherit" /> || ""}
                        </Box>
                    </Box>

                </Grid>

            </Grid>
        </ThemeProvider>
    );
}