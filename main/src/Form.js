import { useForm } from 'react-hook-form';
import * as yup from 'yup'
export const Form = () => {
    const { register, handleSubmit } = useForm();
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