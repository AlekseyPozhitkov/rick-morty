import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';

export default function BasicTextFields() {
    return (
        <Box
            component="form"
            sx={{ '& > :not(style)': { width: 220 } }}
            noValidate
            autoComplete="off"
        >
            <TextField id="outlined-basic" label="Filter by name..." variant="outlined" />
        </Box>
    );
}