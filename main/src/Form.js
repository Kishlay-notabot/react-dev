import { useForm } from 'react-hook-form';

export const Form = () => {
    const { register, handleSubmit } = useForm();
    const onSubmit = () => {
        console.log('Hello boyd');
    }
    return(
        <form onSubmit={handleSubmit(onSubmit)}>
            <input type="text" placeholder="Name" /> <br />
            <input type="text" placeholder="Email" /> <br />
            <input type="password" placeholder="Pass" /> <br />
            <input type="submit"/>
        </form>
    )
}