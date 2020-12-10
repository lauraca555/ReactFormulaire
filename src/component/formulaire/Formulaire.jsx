import { Field, Form, Formik } from 'formik';
import React from 'react';

const initialValues = {
	firstName : "",
	lastName : "",
}

class Formulaire extends React.Component {
  
    submit = (values) => {
          console.log(values)
    }
    render(){

      return (
         <Formik
           initialValaues={initialValues}  
           onSubmit={this.submit} 
          >
           {() => (
             <Form>
               <Field type="text" name="firstName"/>
               <Field type="text" name="lastName"/>

             </Form>
           )

           }
         </Formik>
      )

    }
  
}

export default Formulaire;