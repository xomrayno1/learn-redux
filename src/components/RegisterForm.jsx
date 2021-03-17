import React from 'react';
import  {Formik,Form,Field,ErrorMessage} from 'formik'
import  * as Yup from 'yup'

function RegisterForm(props) {

    const validate = values =>{
        const errors = {};
        if(!values.firstName){
            errors.firstName = "Your input required"
        }
        if(!values.lastName){
            errors.lastName = "Your input required"
        }else if (values.lastName.length > 20) {
            errors.lastName = 'Must be 20 characters or less';
        }
        if(!values  .email){
            errors.email = "Your input required"
        }
        return errors
    }
 
   
    return (
        <div>
            <Formik 
                initialValues= { {
                    firstName : '',
                    lastName : '',
                    email : '',
                    gender : 'female',
                    favourites : [],
                    active: 'noActive'
                }}
                validationSchema = {Yup.object({
                    firstName: Yup.string()
                        .max(15, 'Must be 15 characters or less')
                        .required('Required'),
                     lastName: Yup.string()
                        .max(20, 'Must be 20 characters or less')
                        .required('Required'),
                    email: Yup.string().email('Invalid email address')
                        .max(20,'Must be 20 characters or less')
                        .required('Required'),
                })}
                onSubmit = { values => {
                    console.log(values)
                }}
            >
                <Form>
                    <div>
                        <label htmlFor="firstName">FirstName : </label>
                        <Field name="firstName" type="text"  placeholder="Input FirstName..."/>
                        <ErrorMessage   name="firstName"    />
                    </div>
                    <div>
                        <label htmlFor="lastName">LastName : </label>
                        <Field name="lastName" type="text" placeholder="Input LastName..."/>
                        <ErrorMessage   name="lastName"    />
                    </div>
                    <div>
                        <label htmlFor="email">Email : </label>
                        <Field name="email" type="text" placeholder="Input Email..."/>
                        <ErrorMessage   name="email"    />
                    </div>
                    

                    <div>
                        <label htmlFor="gender">Gender</label>
                        <Field  type="radio" name="gender" value="male"/> Male
                        <Field  type="radio" name="gender" value="female"/> Female
                    </div>
                    <div>
                            <label htmlFor="favourites">Favourites</label>
                            <Field  type="checkbox" name="favourites" value="game"/> Game
                            <Field  type="checkbox" name="favourites" value="playcard"/>  PlayCard
                            <Field  type="checkbox" name="favourites" value="eat"/> Eat
                    </div>
                    <div>
                        <label>active :</label>
                        <Field  as="select" name="active">
                            <option value="active">Active</option>
                            <option value="noActive">No active</option>
                        </Field>
                        
                    </div>

                    <div>
                        <button type="submit">SignUp</button>
                    </div>
                </Form>
                    
            </Formik>
           
        </div>
    );
}

export default RegisterForm;