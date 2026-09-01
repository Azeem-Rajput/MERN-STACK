import { useForm } from "react-hook-form"


function Form(){
    const {register,handleSubmit,formState: { errors }}=useForm();

    console.log("render")

    function submitForm(data){
        console.log(data)
    }
    return(
        <>
        <form onSubmit={handleSubmit(submitForm)}>
        <div>
           <label htmlFor="first">Name: </label>
           <input id="first" {...register('name',
            {
                required: "Name can't be empty"
            }
           )} />
           {errors.name && <span>{errors.name.message}</span>}
        </div>
        <div>
           <label htmlFor="secand">age: </label>
           <input id="secand" {...register('age',
            {
                required: "Age can't be empty",

                 min:{
                    value:10,
                    message:"minimum age should be 10"
                },
                max:{
                    value:80,
                    message:"maximum age should be 80"
                }
               
            }
           )} />
           {errors.age && <span>{errors.age.message}</span>}
        </div>
        <div>
           <label htmlFor="third">password: </label>
           <input id="third" {...register('password',
             {
                required: "Age can't be empty",

                 minLength:{
                    value:5,
                    message:"minimum password length should be 5"
                },
                maxLength:{
                    value:10,
                    message:"maximum password length should be 10"
                }
            }
           )} />
           {errors.password && <span>{errors.password.message}</span>}
        </div>
        <button>submit</button>
        </form>
        </>
    )
}

export default Form;