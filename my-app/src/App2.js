import React, { useState } from 'react';
import {
  Container,
  Typography,
  TextField,
  Button,
  Grid,
  Paper,
  makeStyles,
} from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  root: {
    marginTop: theme.spacing(4),
    marginBottom: theme.spacing(4),
  },
  paper: {
    padding: theme.spacing(3),
  },
  form: {
    display: 'flex',
    flexDirection: 'column',
    gap: theme.spacing(2),
  },
}));

const FormBuilder = () => {
  const classes = useStyles();
  const [formFields, setFormFields] = useState([]);

  const addFormField = () => {
    setFormFields([...formFields, '']);
  };

  const handleFormFieldChange = (index, event) => {
    const newFormFields = [...formFields];
    newFormFields[index] = event.target.value;
    setFormFields(newFormFields);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(formFields);
    // Perform form submission logic here
  };

  return (
    <Container maxWidth="md" className={classes.root}>
      <Paper className={classes.paper}>
        <Typography variant="h5" component="h1" align="center">
          Website Form Builder
        </Typography>
        <form className={classes.form} onSubmit={handleSubmit}>
          <Grid container spacing={2}>
            {formFields.map((field, index) => (
              <Grid item xs={12} key={index}>
                <TextField
                  label={`Field ${index + 1}`}
                  value={field}
                  onChange={(event) => handleFormFieldChange(index, event)}
                  fullWidth
                />
              </Grid>
            ))}
            <Grid item xs={12}>
              <Button variant="outlined" color="primary" onClick={addFormField}>
                Add Field
              </Button>
            </Grid>
            <Grid item xs={12}>
              <Button type="submit" variant="contained" color="primary" fullWidth>
                Submit
              </Button>
            </Grid>
          </Grid>
        </form>
      </Paper>
    </Container>
  );
};

export default FormBuilder;
