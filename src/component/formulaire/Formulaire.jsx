import { Field, Form, Formik } from 'formik';
import React from 'react';

const initialValues = {
  status : "",
  firstName : "",
  lastName : "",
  birthday : "",
  email: ""
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
              <div className="container border p-3 m-3">
                
                  <Form>
                    <div className="">
                      <div className="mb-3 d-flex flex-column">
                        <div className="flex-row">
                          <label className="me-2">
                          <Field  
                              className="me-2"                        
                              type = "radio"
                              name = "status"
                              value = "mr"
                          /> 
                              Mr  
                          </label>
                          <label className="me-2">
                          <Field  
                              className="me-2"                        
                              type = "radio"
                              name = "status"
                              value = "ms"
                          /> 
                              Ms  
                          </label>
                          <label className="me-2">
                          <Field  
                              className="me-2"                        
                              type = "radio"
                              name = "status"
                              value = "ms"
                          /> 
                              N/A  
                          </label>
                        </div>
                        
                      
                        <label htmlFor="firstName" className="form-label">Firstname</label>
                        <Field 
                          type="text" 
                          name="firstName" 
                          className="form-control"
                          placeholder = "Firstname"  
                        /> 
                        <label htmlFor="firstName" className="form-label">Firstname</label>
                        <Field 
                          type="text" 
                          name="firstName" 
                          className="form-control"
                          placeholder = "Firstname"  
                        />  
                      </div>
                
                      <div className="mb-3 d-flex flex-column">
                        <label htmlFor="birthday" className="form-label">birthday</label>
                        <Field 
                          type="date" 
                          name="birthday" 
                          className="form-control"
                          placeholder = "birthday"
                        />
                      </div>
                    </div>
                    <div className="">
                      
                    </div>
                    
              

                    <button type="submit" className= "btn btn-success mt-3">Submit</button>
                  </Form>
              </div>
              
           )

           }
         </Formik>
      )

    }
  
}

export default Formulaire;