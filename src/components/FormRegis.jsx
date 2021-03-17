//using useField , Formik, Form
//custom input
import React from 'react';
import * as Yub from 'yup'

import {Form,Formik,useField} from 'formik'
 

const MyTextInput = ({label, ...props}) => {
    const [field,meta] = useField(props);
    return (
      <div>
           <label htmlFor={props.id || props.name}>{label} </label>
            <input className="text-input" {...props} {...field}  />
            {
                meta.touched && meta.error ? <div className="error">{meta.error}</div> : null
            }
      </div>
    )
}
const MyCheckbox = ({children,...props}) => {
    const [field,  meta] =  useField({...props,type : 'checkbox'});   
    return (
        <>
            <label className="checkbox-input">
                <input  type="checkbox" {...props} {...field}/> {children}
            </label>
            {
                meta.touched && meta.error ? <div className="error">{meta.error} </div> : null
            }
        </>
    )
}
const MySelect  = ( {label,...props}) => {
    const [field, meta ] = useField(props);
    return (
        <div>
            <label htmlFor={props.id  || props.name}>{label}</label>
            <select  {...props} {...field} />
            {
                meta.touched && meta.error ? <div> {meta.error}</div> : null
            } 
        </div>
    )
}
const MyRadio = ({children,...props}) => {
    const [field, meta] =  useField(props);
    return (
       <label htmlFor={props.id || props.name}>
            <input type="radio" {...props} {...field}     /> {children}
       </label>
    )
}

 
function FormRegis(props) {
    return (
        <div>
            <h1>My Form</h1>
            <Formik
                initialValues = { {
                    email: '',
                    firstName : '',
                    lastName : '',
                    favourites : [],
                    active :'notActive',
                    gender : 'female'
                }}
                onSubmit = { (values) => {
                    console.log(values)
                }}
                validationSchema = {
                    Yub.object({
                        firstName : Yub.string().required("Your input is required"),
                        lastName : Yub.string().required("Your input is required"),
                        email : Yub.string().email("Invalid email address").required("Your input is required"),   
                    })
                }
            >
                <Form>
                    <MyTextInput  label="firstName" name="firstName" type="text"  />
                    <MyTextInput  label="lastName" name="lastName" type="text"  />
                    <MyTextInput  label="email" name="email" type="email"  />

                    <MyCheckbox name="favourites" value="game">
                        Game
                    </MyCheckbox>
                    <MyCheckbox name="favourites" value="eat">
                        Eat
                    </MyCheckbox>
                    <MyCheckbox name="favourites" value="workout">
                        Workout
                    </MyCheckbox>
                   
                    <MySelect label="Active :" name="active">
                        <option value="active" >Active</option>
                        <option value="notActive">NotActive</option>
                    </MySelect>
                   <MyRadio   value="female"  name="gender"   > 
                        Female
                   </MyRadio>
                   <MyRadio    value="male"   name="gender" >
                        Male
                   </MyRadio>
                   <div>
                        <button>Submit</button>
                   </div>
                </Form>
            </Formik>
        </div>
    );
}

export default FormRegis;