import React from "react";
import { withStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import "./search.css";

const styles = theme => ({
  container: {
    display: "flex",
    flexWrap: "wrap"
  },
  textField: {
    marginLeft: theme.spacing(2),
    marginRight: theme.spacing(2)
  },
  dense: {
    marginTop: 16
  },
  menu: {
    width: 200
  }
});

const SearchForm = props => {
  return (
    <div className="formContainer">
      <form className={props.container} noValidate autoComplete="off">
        <TextField
          name="searchTerm"
          value={props.search}
          onChange={props.handleSearchInput}
          label="Search for a title..."
          type="search"
          className={props.textField}
          margin="normal"
          variant="outlined"
        />
        <div className="btnContainer">
          <Button id="formBtn" variant="outlined"
            onClick={props.handleFormSubmit}
            className={props.button}
          >
            Submit
          </Button>
        </div>
      </form>
    </div>
  );
};
export default withStyles(styles)(SearchForm);
