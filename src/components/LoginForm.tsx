import React, { useState } from 'react';
import {
  Box,
  Button,
  FormControlLabel,
  Paper,
  TextField,
  Typography,
} from '@mui/material';
import SecurityIcon from '@mui/icons-material/Security';
import CustomSizeCheckbox from './CustomSizeCheckbox';

const LoginForm:React.FC = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [rememberIsChecked, setRememberIsChecked] = useState(true);
  const handleSubmit = (e:React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // console.log('Submitted');
    // console.log({
    //   email,
    //   password,
    //   rememberIsChecked,
    // });
  };
  return (
    <Box sx={{
      height: '100vh',
      display: 'grid',
      placeItems: 'center',
      backgroundImage: 'url(https://unsplash.it/1920/1080)',
      backgroundSize: 'cover',
    }}
    >
      <Paper
        component="form"
        sx={{
          display: 'flex',
          flexDirection: 'column',
          gap: 4,
          width: 400,
          p: 4,
        }}
        elevation={10}
        onSubmit={handleSubmit}
      >
        <SecurityIcon sx={{ fontSize: 50, alignSelf: 'center' }} color="primary" />
        <Typography component="h1" variant="h3" align="center">Login</Typography>
        <TextField
          variant="filled"
          label="Email"
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <TextField
          variant="filled"
          label="Password"
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <FormControlLabel
          control={(
            <CustomSizeCheckbox
              checked={rememberIsChecked}
              onChange={() => setRememberIsChecked(!rememberIsChecked)}
            />
      )}
          label="remember login data"
        />
        <Button variant="contained" sx={{ height: 60 }}>Login</Button>
      </Paper>
    </Box>
  );
};
export default LoginForm;
