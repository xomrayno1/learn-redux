import React from 'react';
import  {useFormik} from 'formik'
import  * as Yup from 'yup'

function SignupForm(props) {

    // const initialValues = {
    //     firstName : '',
    //     lastName : '',
    //     email :''
    // }
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
    // const onSubmit = values => {
    //     console.log(values);
    // }

    const  formik = useFormik({
        initialValues : {
            firstName : '',
            lastName : '',
            email : '',
            gender : 'female',
            favourites : [],
            active: 'noActive'
        },
        validationSchema  : Yup.object({
            firstName: Yup.string()
                .max(15, 'Must be 15 characters or less')
                .required('Required'),
             lastName: Yup.string()
                .max(20, 'Must be 20 characters or less')
                .required('Required'),
            email: Yup.string().email('Invalid email address')
                .max(20,'Must be 20 characters or less')
                .required('Required'),
        }),
        onSubmit : (values) => {
            console.log(values)
        }
    })
    return (
        <div>
            <form onSubmit={formik.handleSubmit}>
                <div>
                    <label htmlFor="firstName">FirstName : </label>
                    <input  name="firstName"   
                        // value={formik.values.firstName}
                        // onChange={formik.handleChange}
                        // onBlur={formik.handleBlur}
                        {...formik.getFieldProps('firstName')}
                        />
                </div>
 
                {formik.touched.firstName &&  formik.errors.firstName ? <div>{formik.errors.firstName}</div> : null}
                <div>
                    <label htmlFor="lastName">LastName : </label>
                    <input  name="lastName"   
                        // value={formik.values.lastName}
                        // onChange={formik.handleChange}
                        // onBlur={formik.handleBlur}
                        {...formik.getFieldProps('lastName')}
                        />
                </div>
                { formik.touched.lastName && formik.errors.lastName ? <div>{formik.errors.lastName}</div> : null}
               <div>
                    <label htmlFor="email">Email : </label>
                    <input  name="email"   
                        // value={formik.values.email}
                        // onChange={formik.handleChange}
                        // onBlur={formik.handleBlur}
                        {...formik.getFieldProps('email')}
                        />
               </div>
               {formik.touched.email && formik.errors.email ? <div>{formik.errors.email}</div> : null}
               <div>
                    <label htmlFor="gender">Gender</label>
                    <input type="radio" name="gender" 
                            value="female"
                            onChange={formik.handleChange}
                            checked={formik.values.gender === 'female'} 
                            /> Male
                    <input type="radio" name="gender"  
                            value="male"
                            onChange={formik.handleChange}
                            checked={formik.values.gender === 'male'} 
                            /> Female
               </div>
               <div>
                    <label htmlFor="favourites">Favourites</label>
                    <input  type="checkbox" name="favourites" value="game"
                            onChange={formik.handleChange}/> Game
                    <input  type="checkbox" name="favourites" value="playcard"
                            onChange={formik.handleChange}/> PlayCard
                    <input  type="checkbox" name="favourites" value="eat"
                            onChange={formik.handleChange}/> Eat
               </div>
               <div>
                   <label>active :</label>
                   <select name="active" onChange={formik.handleChange} value={formik.values.active}>
                       <option value="active">Active</option>
                       <option value="noActive">No active</option>
                   </select>
               </div>
               <div>
                   <button type="submit">SignUp</button>
               </div>
            </form>
        </div>
    );
}

export default SignupForm;