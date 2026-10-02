import mongoose from 'mongoose'

const patientSchema=new mongoose.Schema(
  {
    name:{
      type: String,
      requird: true,
    },
    diagnosedWith:{
      type: String,
      required: true,
    },
    address:{
      type: String,
      required: true,
    },
    age:{
      type: Number,
      reqiured: true,
    },
    bloodGroup:{
      type: String,
      required:true,
    },
    gender:{
      type: String,
      enum: ["M","F","O"],
      reqiued:true,
    },
    admittedIn:{
      type:mongoose.Schema.Types.ObjectId,
      ref:"Hospital"
    },

  },{timestamps:true})

export const Patient= mongoose.model("Patient",patientSchema)