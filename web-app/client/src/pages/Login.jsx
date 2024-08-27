import React, { useEffect } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import Textbox from "../components/Textbox";
import Button from "../components/Button";
import { useSelector } from "react-redux";
const Login = () => {
  const {user}=useSelector((state)=>state.auth);
  const {register,handleSubmit,formState:{errors}}=useForm();

  const submitHandler = async (data) => {
    console.log("submit");
  };
  const navigate = useNavigate();
  useEffect(()=>{
    user && navigate("/dashboard")
  },[user]);
  return (
    <div className='w-full min-h-screen flex items-center justify-center flex-col lg:flex-row bg-[#efbba3]'>
      <div className='w-full mf:w-auto flex gap-0 md:gap-30 flex-col md:flex-row items-center justify-center'>
        {/* leftside */}
        <div className='h-full lg:w-1/2 flex flex-col items-center justify-center'>
          <div className='w-full md:max-w-lg 2xl:max-w-3xl flex flex-col items-center justify-center gap-5 md:gap-y-10 2xl:-mt-20'>
            <span className='flex gap-1 py-1 px-3 border border-[#7e3c24] rounded-full text-sm md:text-base bordergray-300 text-[#7e3c24]'>
              <span className="font-bold">Manage</span> all your task and <span className="font-bold">Assign</span> tasks in one place!
            </span>
            <p className='flex flex-col gap-0 md:gap-4 text-4xl md:text-6xl 2xl:text-7xl font-black text-center text-[#4a1d17]'>
              <span>TaskFlow</span>
              <span className="text-3xl font-semibold">Cloud Based Task Manager</span>
            </p>

            <div className='cell'>
              <div className='circle rotate-in-up-left'></div>
            </div>
          </div>
        </div>
        {/* rightside */}
        <div className='w-full md:w-1/3 p-4 md:p-1 flex flex-col justify-center items-center'>
          <form
            onSubmit={handleSubmit(submitHandler)}
            className='form-container w-full md:w-[400px] flex flex-col gap-y-8 bg-[#f4d6c8] px-10 pt-14 pb-14'
          >
            <div className=''>
              <p className='text-[#4a1d17] text-3xl font-bold text-center'>
                Welcome back!
              </p>
              <p className='text-center text-base text-[#52241d] '>
                Keep all your credential safe.
              </p>
            </div>

            <div className='flex flex-col gap-y-5'>
              <Textbox
                placeholder='email@example.com'
                type='email'
                name='email'
                label='Email Address'
                className='w-full rounded-full text-[#52241d]'
                register={register("email", {
                  required: "Email Address is required!",
                })}
                error={errors.email ? errors.email.message : ""}
              />
              <Textbox
                placeholder='your password'
                type='password'
                name='password'
                label='Password'
                className='w-full rounded-full text-[#52241d]'
                register={register("password", {
                  required: "Password is required!",
                })}
                error={errors.password ? errors.password.message : ""}
              />

              <span className='text-sm text-[#52241d] hover:text-[#844e46] hover:underline cursor-pointer'>
                Forget Password?
              </span>

              <Button
                type='submit'
                label='Submit'
                className='w-full h-10 bg-[#4a1d17] text-white rounded-full'
              />
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}

export default Login
