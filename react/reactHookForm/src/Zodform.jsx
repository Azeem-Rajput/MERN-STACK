import { useForm } from "react-hook-form"
import { zodResolver } from '@hookform/resolvers/zod'
import {email,z} from 'zod'

const formSchema=z.object(
    {
        name:z.string().min(4,"Minimum length of name should be 4").max(18,"Maximum length of name should be 18"),
        age:z.coerce.number().min(8,"Minimum age should be 8").max(80,"Maximum age should be 80"),
        password:z.string().min(5,"Minimum password length should be 5").max(12,"Maximum password length should be 12"),
        email:z.email("email is invalid"),
        confirm:z.string()
    }
).refine((data)=>data.password==data.confirm,{
    message:"password don;t match",
    path:["confirm"],  // path of error
})

function Zodform(){
    const {register,handleSubmit,formState: { errors }}=useForm({
        resolver: zodResolver(formSchema)
    });

    console.log("render")

    function submitForm(data){
        console.log(data)
    }
    return(
        <>
        <form onSubmit={handleSubmit(submitForm)}>
        <div>
           <label htmlFor="first">name: </label>
           <input id="first" {...register('name')} />
           {errors.name && <span>{errors.name.message}</span>}
        </div>
         <div>
           <label htmlFor="fourth">email: </label>
           <input type="email" id="fourth" {...register('email')} />
           {errors.email && <span>{errors.email.message}</span>}
        </div>
        <div>
           <label htmlFor="secand">age: </label>
           <input id="secand" {...register('age')} />
           {errors.age && <span>{errors.age.message}</span>}
        </div>
        <div>
           <label htmlFor="third">password: </label>
           <input id="third" {...register('password')} />
           {errors.password && <span>{errors.password.message}</span>}
        </div>
        <div>
           <label htmlFor="fifth">confirm password: </label>
           <input type="password" id="fifth" {...register('confirm')} />
           {errors.confirm&& <span>{errors.confirm.message}</span>}
        </div>

        <button>submit</button>
        </form>
        </>
    )
}

export default Zodform;