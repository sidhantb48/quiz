import * as React from 'react';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';




export default function BasicSelect({
  
  quiztype,
  handleChange,
  
}) {
  


  return (
    <Box sx={{ minWidth: 220 }} style={{marginTop:20}}>
      <FormControl fullWidth>
        <InputLabel 
        style={{ color: 'white' }}
        id="demo-simple-select-label" 
        >
        Quiz Category
          
        </InputLabel>
        

        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={quiztype}
          label="Quiz Category"
          onChange={handleChange}
          
        >
          <MenuItem value={9} >General Knowledge</MenuItem>
          <MenuItem value={10}>Entertainment:Books</MenuItem>
          <MenuItem value={11}>Entertainment:Films</MenuItem>
          <MenuItem value={12}>Entertainment:Music</MenuItem>
          <MenuItem value={13}>Entertainment:Musical and Theatres</MenuItem>
          <MenuItem value={14}>Entertainment:Television</MenuItem>
          <MenuItem value={16}>Entertainment:Board Games</MenuItem>
        </Select>
      </FormControl>
    </Box>
  );
}