import { useForm } from 'react-hook-form';
import * as yup from 'yup'
export const Form = () => {
    const schema = yup.object().shape(
        {
            fName: yup.string().required(),
            email: yup.string().email().required(),
            passwd: yup.string().min(7).max(14).required(),
            // age: yup.number().positive().integer().min(18).required() [template for age]
            confirmPass: yup.string().oneOf([yup.ref("passwd"), null]),

        }
    )
    const { register, handleSubmit } = useForm({
        resolver: 
    });

    const onSubmit = (data) => {
        console.log('Hello boyd');
        console.log(data)
    }

    return(
        <form onSubmit={handleSubmit(onSubmit)}>
            <input type="text" placeholder="Name" {...register("fName")} /> <br />
            <input type="text" placeholder="Email" {...register("email")}/> <br />
            <input type="password" placeholder="Pass"{...register("passwd")} /> <br />
            <input type="password" placeholder="confirmPass"{...register("rePasswd")} /> <br />
            <input type="submit"/>
        </form>
    )
}