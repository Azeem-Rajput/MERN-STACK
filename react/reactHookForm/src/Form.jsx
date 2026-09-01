import { useForm } from "react-hook-form"

function Form(){
    const {register,handleSubmit}=useForm();

    console.log("render")

    function submitForm(data){
        console.log(data)
    }
    return(
        <>
        <form onSubmit={handleSubmit(submitForm)}>
        <div>
           <label htmlFor="first">Name: </label>
           <input id="first" {...register('name')} />
        </div>
        <div>
           <label htmlFor="secand">age: </label>
           <input id="secand" {...register('age')} />
        </div>
        <div>
           <label htmlFor="third">password: </label>
           <input id="third" {...register('password')} />
        </div>
        <button>submit</button>
        </form>
        </>
    )
}

export default Form;