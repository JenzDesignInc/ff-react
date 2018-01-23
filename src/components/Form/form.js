
import React, { Component } from 'react';
import $ from 'jquery';
import {brown700, brown500, orange500, orangeA700} from 'material-ui/styles/colors';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import RaisedButton from 'material-ui/RaisedButton';
import { ValidatorForm } from 'react-form-validator-core';
import { TextValidator } from 'react-material-ui-form-validator';
// import 'jquery-validation';
// http://blog.teamtreehouse.com/create-ajax-contact-form
const styles = {
    errorStyle: {
      color: orange500,
    },
    underlineStyle: {
      borderColor: orange500,
    },
    floatingLabelStyle: {
      color: brown700,
    },
    floatingLabelFocusStyle: {
      color: brown500,
    },
    backgroundColorStyle: {
        color: orangeA700,
    }
  };

class Form extends Component {
  
  constructor(props) {

    $(document).ready( function ($) {
      var form = $('#ajax-contact');


      $(form).submit(function (event) {
        // Stop the browser from submitting the form.
        event.preventDefault();

        // TODO
        // Serialize the form data.
        var formData = $(form).serialize();

        // Submit the form using AJAX.
        $.ajax({
          type: 'POST',
          url: $(form).attr('action'),
          data: formData
        })


      });
    
    
    });


    super(props);

    this.state = {
        formData: {
            email: '',
            name: '',
            message: '',
        },
        submitted: false,
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
}

handleChange(event) {
    const { formData } = this.state;
    formData[event.target.name] = event.target.value;
    this.setState({ formData });
}

handleSubmit() {
    this.setState({ submitted: true }, () => {
        setTimeout(() => this.setState({ submitted: false }), 5000);
    });
}



  render() {
    const { formData, submitted } = this.state;

    return (
      <div>
          

    
      
      <div className="form--wrapper">
      <div className="form--content">
      <MuiThemeProvider >
       
      <ValidatorForm
      ref="form"
      onSubmit={this.handleSubmit}
      id="ajax-contact" method="post" action="mailer.php"
  >
   
      <TextValidator

           floatingLabelText="Name"
           floatingLabelStyle={styles.floatingLabelStyle}
      floatingLabelFocusStyle={styles.floatingLabelFocusStyle}
      underlineStyle={styles.underlineStyle}
      underlineFocusStyle={styles.underlineStyle}
           className="input--grow"
          onChange={this.handleChange}
          name="name"
          value={formData.name}
          validators={['required']}
          errorMessages={['this field is required']}
      />
       <br />
       <TextValidator
          floatingLabelText="Email"
          floatingLabelStyle={styles.floatingLabelStyle}
          floatingLabelFocusStyle={styles.floatingLabelFocusStyle}
          underlineStyle={styles.underlineStyle}
          underlineFocusStyle={styles.underlineStyle}
          className="input--grow"
          onChange={this.handleChange}
          name="email"
          value={formData.email}
          validators={['required', 'isEmail']}
          errorMessages={['this field is required', 'email is not valid']}
      />
      <br />
      <TextValidator
          floatingLabelText="Message"
          floatingLabelStyle={styles.floatingLabelStyle}
          floatingLabelFocusStyle={styles.floatingLabelFocusStyle}
          underlineStyle={styles.underlineStyle}
          underlineFocusStyle={styles.underlineStyle}
          className="label--left input--grow"
          multiLine={true}
          onChange={this.handleChange}
          name="message"
          value={formData.message}
          
      />
      <br /><br /><br />
      
      <RaisedButton
          type="submit"
          backgroundColorStyle={styles.backgroundColorStyle}
          label={
              (submitted && 'Your form is submitted!')
              || (!submitted && 'Submit')
          }
          disabled={submitted}
      />

 
  </ValidatorForm>
 
  </MuiThemeProvider>
  
  </div>
  </div>
  
  </div>
    );
  }
}


export default Form

