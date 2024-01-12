import { useForm } from 'react-hook-form';
import * as yup from 'yup'
import {yupResolver} from '@hookform/resolvers/yup'
export const Form = () => {
    const schema = yup.object().shape(
        {
            fName: yup.string().required("Enter Full Name first!"),
            email: yup.string().email().required("enter correct email add!"),
            passwd: yup.string().min(7).max(14).required("enter passwd between 7-14 char!"),
            // age: yup.number().positive().integer().min(18).required() [template for age]
            rePasswd: yup.string().oneOf([yup.ref("passwd"), null]).required("passwd should match!"),

        }
    )
    const { register, handleSubmit, formState: {errors} } = useForm({
        resolver: yupResolver(schema),
    });

    const onSubmit = (data) => {
        console.log('Hello boyd');
        console.log(data)
    }

    return(
        <form onSubmit={handleSubmit(onSubmit)}>
            <input type="text" placeholder="Name" {...register("fName")} /> <br />
            <p>{errors.fName?.message}<br /></p>
            <input type="text" placeholder="Email" {...register("email")}/>
            <p>{errors.email?.message} <br /></p> 
            
            <input type="password" placeholder="Pass"{...register("passwd")} /> 
            <p>{errors.passwd?.message}<br /></p>
            <input type="password" placeholder="confirmPass"{...register("rePasswd")} /> 
           <p>{errors.rePasswd?.message}<br /></p> 
            <input type="submit"/>
        </form>
    )
}