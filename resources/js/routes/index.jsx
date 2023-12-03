import React from 'react'
import { useSelector } from 'react-redux';
import { Navigate, Route, Routes } from 'react-router-dom'
import Protected from './protected';
import AuthLayout from '@/pages/auth/layout/AuthLayout';
import Signin from '@/pages/auth/signin/signin';
import Signup from '@/pages/auth/signup/signup';
import AppLayout from '@/pages/app/layout/AppLayout';
import App from '@/pages/app/app/app';

const AppRoues = () => {
    const { isLoggedIn } = useSelector(state => state.auth);

    return (
        <Routes>
            <Route path='/' element={<Protected access={!isLoggedIn} fallback="/app" />} >
                <Route index element={<Navigate to="/signin" />} />
                <Route element={<AuthLayout />}>
                    <Route path='signin' element={<Signin />} />
                    <Route path='signup' element={<Signup />} />
                </Route>
            </Route>

            <Route path='/app' element={<Protected access={isLoggedIn} fallback="/signin" />}  >
                <Route element={<AppLayout />}>
                    <Route index element={<App />} />
                </Route>

            </Route>
        </Routes>
    )
}

export default AppRoues