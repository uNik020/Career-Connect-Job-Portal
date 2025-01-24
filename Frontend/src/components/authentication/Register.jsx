import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { Label } from '../ui/label'
import { Input } from '../ui/input'
import { RadioGroup } from '../ui/radio-group'
import Navbar from '../components_lite/Navbar'
import axios from 'axios'
import { USER_API_ENDPOINT } from '@/utils/data'
import { toast } from 'sonner'
import { useDispatch, useSelector } from 'react-redux'
import { setLoading } from '@/redux/authSlice'

const Register = () => {

const [input, setInput]= useState({
    fullname: '',
    email: '',
    password: '',
    role: '',
    phoneNumber: '',
    file: '',
  });

const navigate = useNavigate();
const dispatch = useDispatch();
  const { loading } = useSelector((store) => store.auth);

const changeEventHandler = (e) => {
    setInput({...input, [e.target.name]: e.target.value });
};

const changeFileHandler = (e) => {
    setInput({...input, file: e.target.files?.[0] });
};

const submitHandler = async(e) => {
    e.preventDefault();
    //console.log(input);

    const formData = new FormData();
    formData.append('fullname', input.fullname);
    formData.append('email', input.email);
    formData.append('password', input.password);
    formData.append('role', input.role);
    formData.append('phoneNumber', input.phoneNumber);
    if (input.file) {
        formData.append('file', input.file);
    }

    try {
        dispatch(setLoading(true));
        const res = await axios.post(`${USER_API_ENDPOINT}/register`, formData,{
            headers: {
                'Content-Type': 'multipart/form-data'
            },
            withCredentials: true,
        });
        if(res.data.success) {
            navigate("/login");
            toast.success(res.data.message);
        }    
    } catch (error) {
        console.log(error);
        toast.error(error.response.data.message);
    }finally {
          dispatch(setLoading(false));
        }
}

  return (
    <>
    <Navbar />
    <div className='flex items-center justify-center'>
        <form onSubmit={submitHandler} className='w-1/2 border border-[#512b95] rounded-md p-4 my-10'>
            <h1 className='font-bold text-xl mb-5 text-[#512b95] text-center'>Register</h1>
            <div className='my-2'>
                <Label>Name</Label>
                <Input type="text" value={input.fullname} name="fullname" onChange={changeEventHandler} placeholder="Enter your name"></Input>
            </div> 
            <div className='my-2'>
                <Label>Email</Label>
                <Input type="email" value={input.email} name="email" onChange={changeEventHandler} placeholder="example@gmail.com"></Input>
            </div> 
            <div className='my-2'>
                <Label>Password</Label>
                <Input type="password" value={input.password} name="password" onChange={changeEventHandler} placeholder="password"></Input>
            </div> 
            <div className='my-2'>
                <Label>Phone Number</Label>
                <Input type="tel" value={input.phoneNumber} name="phoneNumber" onChange={changeEventHandler} placeholder="phone number"></Input>
            </div> 

            <div className='flex items-center justify-between'>
            <RadioGroup className='flex items-center gap-4 my-5'>
                <div className="flex items-center space-x-2">
                    <Input type="radio" name="role" value="Student" checked={input.role === 'Student'} onChange={changeEventHandler} className="cursor-pointer" />
                    <Label htmlFor="r1">Student</Label>
                </div>
                <div className="flex items-center space-x-2">
                    <Input type="radio" name="role" value="Recruiter" checked={input.role === 'Recruiter'} onChange={changeEventHandler} className="cursor-pointer" />
                    <Label htmlFor="r2">Recruiter</Label>
                </div>
                </RadioGroup>
            </div>


            <div className='flex items-center gap-2'>
                <Label>Profile Photo</Label>
                <Input type="file" accept="image/*" onChange={changeFileHandler} className="cursor-pointer" />
            </div>


            {loading ? (
            <div className="flex justify-center items-center my-10">
              <div className="spinner-border text-blue-600" role="status">
                <span className="sr-only">Loading...</span>
              </div>
            </div>
          ) : (
            <button type='submit' className='bg-[#512b95] hover:bg-[#522b958e] block my-3 w-full py-3 text-white bg-primary hover:bg-primary/90 rounded-md'>
            Register
            </button>
          )}
            

            <p className='text-gray-500 text-md my-2'>
                Already have an account? <Link to="/login" className='text-blue-700'>Login</Link>
            </p>
        </form>
    </div>
    </>
  )
}

export default Register