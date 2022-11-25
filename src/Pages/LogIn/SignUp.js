import React, { useContext, useState } from 'react';
import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../contexts/AuthProvider';

const SignUp = () => {
    const { register, formState: { errors }, handleSubmit } = useForm();
    const { createUser, updateUser } = useContext(AuthContext);
    const [signUpError, setSignUpError] = useState('');
    const [createdUserEmail, setCreateUserEmail] = useState('')



    const handleSignUp = (data) => {
        // console.log(data)
        createUser(data.email, data.password)
            .then(result => {
                const user = result.user;
                console.log(user)
               
                const userInfo = {
                    displayName: data.name
                }
                updateUser(userInfo)
                    .then(() => {
                     
                        
                    })
                    .catch(error => console.error(error))
            })
            .catch(error => console.error(error))
    }

  


    return (
        <div className='h-[800px] flex justify-center items-center'>
            <div className='w-96'>
                <h2 className='text-xl text-center'>Sign up</h2>
                <form onSubmit={handleSubmit(handleSignUp)}>
                    <div className="form-control w-full ">
                        <label className="label"><span className="label-text">Name</span></label>
                        <input type="text" {...register('name', {
                            required: "Name is required"
                        })} className="input input-bordered w-full " />
                        {errors.name && <p className='text-red-500'>{errors.name?.message}</p>}
                    </div>
                    <div className="form-control w-full ">
                        <label className="label"><span className="label-text">Email</span></label>
                        <input type="email" {...register('email', {
                            required: "Email is requied"
                        })} className="input input-bordered w-full " />
                        {errors.email && <p className='text-red-500'>{errors.email?.message}</p>}
                    </div>
                    <div className="form-control w-full">
                        <label className="label"><span className="label-text">Password</span></label>
                        <input type="password" {...register('password', {
                            required: 'Password is required',
                            minLength: { value: 6, message: 'Password must be 6 characters long' },
                            pattern: { value: /(?=.*[A-Z])(?=.*[!@#$&*])(?=.*[0-9])/, message: 'Password must be strong' }
                        })} className="input input-bordered w-full " />
                        {errors.password && <p className='text-red-500'>{errors.password?.message}</p>}
                    </div>
                    <input className='btn btn-accent w-full mt-3' value='Sign up' type="submit" />
                    {/* {signUpError && <p className='text-red-500'>{signUpError}</p>} */}
                </form>
                <p>Already have account? <Link className='text-secondary' to='/login'>Please login</Link></p>
                <div className="divider">OR</div>
                <button className='btn btn-outline w-full'>CONTINUE WITH GOOGLE</button>
            </div>
        </div>
    );
};

export default SignUp;