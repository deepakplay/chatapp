import React, { useState } from 'react'

import InputElement from '@/components/InputElement/InputElement';
import { Link, useNavigate } from 'react-router-dom';
import { useFormik } from 'formik';
import { SignUpSchema } from './signupSchema';
import Button from '@/components/Button/Button';

const INIT_STATE = {
    name: '',
    email: '',
    password: ''
}

const Signup = () => {
    const [formLoading, setFormLoading] = useState(false);
    const navigate = useNavigate();


    const handleFormSubmit = (values) => {
        setFormLoading(true);
        navigate('/signin')
        setFormLoading(false);
    }

    const formik = useFormik({
        initialValues: { ...INIT_STATE },
        validationSchema: SignUpSchema,
        onSubmit: handleFormSubmit
    });


    return (
        <form className='space-y-4' onSubmit={formik.handleSubmit}>
            <div>
                <h1 className="font-semibold leading-tight tracking-tight text-2xl text-gray-900">
                    Create your account
                </h1>
                <h2 className='text-sm text-gray-800 mt-1'>Stay conntected with our chat app.</h2>
            </div>
            <InputElement
                type="text"
                label="Full Name"
                name="name"
                placeholder="Full Name"
                value={formik.values.name}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                error={formik.errors.name && formik.touched.name ? formik.errors.name : null}
            />
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

            <div>
                <Button loading={formLoading}>Sign up</Button>
            </div>
            <div className='text-center'>
                <small>Already have a account? <Link className='font-semibold text-blue-700 hover:text-blue-600' to='/signin'>Sign in</Link></small>
            </div>
        </form>
    )
}

export default Signup;

// eslint-disable-next-line no-lone-blocks
{/* <div className='flex w-full items-center'>
    <div className='bg-gray-300 flex-1 rounded h-[1px]'></div>
    <div className='px-2 text-sm'>or</div>
    <div className='bg-gray-300 flex-1 rounded h-[1px]'></div>
</div> */}
