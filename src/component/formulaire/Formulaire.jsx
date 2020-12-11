import React from 'react';
import { Field, Form, Formik } from 'formik';

const initialValues = {
  status : "",
  firstName : "",
  lastName : "",
  birthday : "",
  number: "",
  road: "",
  city: "",
  zipCode: "",
  phone: "",
  email: "",
  

}

class Formulaire extends React.Component {
  
    submit = (values) => {
          console.log(values);
    }
    render(){

      

      return (
         <Formik
           initialValues={initialValues}  
           onSubmit={this.submit} 
          >
           {() => (
            <div className="container border p-3 m-3">
                
                  <Form>
                    <div className="d-flex flex-column">
                      <div className="text-center mb-3" id="title"><h2 >Informations</h2></div>
                      <div className="row">
                        <div className="col-6">
                        <div className="mb-3 d-flex flex-column">
                          {/* Radio boutons*/}
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
                          </div>{/* End Radio boutons*/}
                          
                          {/* FirstName Field*/}
                          <label htmlFor="firstName" className="form-label">Firstname</label>
                          <Field 
                            type="text" 
                            name="firstName" 
                            className="form-control"
                            placeholder = "Firstname"  
                          /> 

                          {/* Lastname Field*/}
                          <label htmlFor="lastName" className="form-label">Lastname</label>
                          <Field 
                            type="text" 
                            name="lastName" 
                            className="form-control"
                            placeholder = "Lastname"  
                          />
                          {/* Birthday Field*/}
                          <label htmlFor="birthday" className="form-label">birthday</label>
                          <Field 
                            type="date" 
                            name="birthday" 
                            className="form-control"
                            placeholder = "birthday"
                          />  
                        </div>


                        </div>
                        
                        <div className="col-6">
                            {/* Addresse groupe of field*/}
                            <div id="groupField">
                              <label className="form-label">Addresse</label>
                              <Field 
                                  type="text" 
                                  name="number" 
                                  className="form-control"
                                  placeholder = "number"
                                />
                              <Field 
                                  type="text" 
                                  name="road" 
                                  className="form-control"
                                  placeholder = "road"
                                />
                              <Field 
                                  type="text" 
                                  name="city" 
                                  className="form-control"
                                  placeholder = "city"
                                />
                              <Field 
                                  type="text" 
                                  name="zipCode" 
                                  className="form-control"
                                  placeholder = "zipCode"
                                />
                            </div>                      
                          </div>  
                      </div>
                      
                      <div className="row" id="contact">
                          <label className="form-label">Contact</label>
                          <div className="d-flex flex-row">
                            <div>
                            <Field 
                                    type="text" 
                                    name="phone" 
                                    className="form-control"
                                    placeholder = "Phone"
                                  />
                            </div>
                            <div>
                            <Field 
                                    type="text" 
                                    name="email" 
                                    className="form-control"
                                    placeholder = "Email"
                                  />
                            </div>
                          </div> 
                      </div>
                    </div>
                    
                    <button type="submit" className= "btn btn-success mt-3">Submit</button>
                  </Form>
              </div>
              
           )}
           
         </Formik>
      )

    }
  
}

export default Formulaire;