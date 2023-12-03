import React, { useState } from 'react'

import InputElement from '@/components/InputElement/InputElement';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { useFormik } from 'formik';
import { SigninSchema } from './signinSchema';
import { setAuth } from '@/store/auth/AuthSlice';
import { setUser } from '@/store/profile/ProfileSlice';
import Button from '@/components/Button/Button';

const INIT_STATE = {
    email: '',
    password: ''
}

const Signin = () => {
    const dispatch = useDispatch();
    const [formLoading, setFormLoading] = useState(false);


    const handleFormSubmit = (values) => {
        setFormLoading(true);
        dispatch(setUser(values));
        dispatch(setAuth({ login: true, token: 123 }));
        setFormLoading(false);
    }

    const formik = useFormik({
        initialValues: { ...INIT_STATE },
        validationSchema: SigninSchema,
        onSubmit: handleFormSubmit
    });


    return (
        <form className='space-y-4' onSubmit={formik.handleSubmit}>
            <div>
                <h1 className="font-semibold leading-tight tracking-tight text-2xl text-gray-900">
                    Sign in to your account
                </h1>
                <h2 className='text-sm text-gray-800 mt-1'>Stay conntected with our chat app.</h2>
            </div>
            <InputElement
                type="text"
                label="Email"
                name="email"
                placeholder="example@email.com"
                value={formik.values.email}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                error={formik.errors.email && formik.touched.email ? formik.errors.email : null}
            />
            <InputElement
                type="password"
                label="Password"
                name="password"
                placeholder="••••••••"
                value={formik.values.password}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                error={formik.errors.password && formik.touched.password ? formik.errors.password : null}
            />
            <div className="text-xs flex">
                <Link className="font-semibold text-blue-700 hover:text-blue-600">
                    Forgot password?
                </Link>
            </div>
            <div>
                <Button loading={formLoading}>Sign in</Button>
            </div>
            <div className='text-center'>
                <small>New to Chatapp? <Link className='font-semibold text-blue-700 hover:text-blue-600' to="/signup">Join Now</Link></small>
            </div>
        </form>
    )
}

export default Signin;

// eslint-disable-next-line no-lone-blocks
{/* <div className='flex w-full items-center'>
    <div className='bg-gray-300 flex-1 rounded h-[1px]'></div>
    <div className='px-2 text-sm'>or</div>
    <div className='bg-gray-300 flex-1 rounded h-[1px]'></div>
</div> */}