
import userModel from "../models/userModel.js";
import { comparePassword, hashPassword } from "../helpers/authHelper.js";
import JWT from "jsonwebtoken";


export const registerController=async(req,res)=>{
try {
    const {name,email,password,phone,DOB,answer,address}=req.body
    //validations
    if(!name){
        return res.send({message:'Name is Required field'})
    }
    if(!email){
        return res.send({message:'E-mail is Required field'})
    }
    if(!password){
        return res.send({message:'Password is Required field'})
    }
    if(!DOB){
        return res.send({message:'DOB  is Required field'})
    }
    if(!answer){
      return res.send({message:'answer  is Required field'})
  }
 
   
    if(!address){
      return res.send({message:'address  is Required field'})
  }
 
   
   
    const existingUser=await userModel.findOne({email})
     //Check for existing user
     if(existingUser){
        return res.status(200).send({
            success:false,
            message:'Already existing E-mail or already register please login!!',
        })
     }
     //register user
     const hashedPassword=await hashPassword(password)
     //save 
     const user=await new userModel({name,email,phone,DOB,answer,address,password:hashedPassword}).save()
     
    
    
     res.status(201).send({
        success:true,
        messsage:'User Register Sucessfully',
        user,
     })

} catch (error) {
    console.log(error)
    res.status(500).send({
        success:false,
        message:'Error in Registration'
        ,error,
    });
}

};
//POST LOGIN
export const loginController = async (req, res) => {
    try {
      const { email, password } = req.body;
      //validation
      if (!email || !password) {
        return res.status(404).send({
          success: false,
          message: "Invalid email or password",
        });
      }
      //check user
      const user = await userModel.findOne({ email });
      if (!user) {
        return res.status(404).send({
          success: false,
          message: "Email is not register",
        });
      }
      const match = await comparePassword(password, user.password);
      if (!match) {
        return res.status(200).send({
          success: false,
          message: "Invalid Password",
        });
      }
      //token
      const token = await JWT.sign({ _id: user._id }, process.env.JWT_SECRET, {
        expiresIn: "7d",
      });
      res.status(200).send({
        success: true,
        message: "login successfully",
        user: {
          _id: user._id,
          name: user.name,
          email: user.email,
          phone: user.phone,
          DOB:user.DOB,
          answer:user.answer,
          address: user.address,
          
          role: user.role,
        }, 
        token,
      });
    } catch (error) {
      console.log(error);
      res.status(500).send({
        success: false,
        message: "Error in login",
        error,
      });
    }
  };
  //forgotPasswordController
  export const forgotPasswordController=async ()=>{
    try {
      const{email,answer,newPassword}=req.body
      if(!email){
        res.staus(400).send({message:'Email is required field'})
      }
      if(!answer){
        res.staus(400).send({message:'answer is required field'})
      }
      if(!newPassword){
        res.staus(400).send({message:'newPassword is required field'})
      }
      //check
      const user=await userModel.findOne({email,answer})
      //validation
      if(!user){
        return res.status(404).send({
          success:false,
          message:'Wrong email or answer',
        })
      }
      const hashed=await hashPassword(newPassword)
      await userModel.findByIdAndUpdate(user._id,{password:hashed})
      res.status(200).send({
        success:true,
        message:'Password Reset Successfully',
      });
    } catch (error) {
      console.log(error);
      res.status(500).send({
        success:false,
        message:'Something went wrong',
        error
      });
      
    }
  };

  //test Controller
  export const testController =(req,res)=>{
    try {
      res.send("Protected Routes")
    } catch (error) {
      console.log(error);
      res.send({error});
    }
    
  };