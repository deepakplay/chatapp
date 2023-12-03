import { setAuth } from '@/store/auth/AuthSlice'
import { setUser } from '@/store/profile/ProfileSlice'
import { faSignOut } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import { useDispatch } from 'react-redux'
import { Outlet } from 'react-router-dom'

const AppLayout = () => {
    const dispatch = useDispatch();

    const handleLogout = () => {
        dispatch(setUser(null));
        dispatch(setAuth({ login: false, token: null }));
    }
    return (
        <div className='min-w-full min-h-screen flex'>
            <div className='bg-blue-700 w-[300px] h-screen text-white shadow-lg p-4'>
                <div className='flex items-center'>
                    <h1 className='font-semibold'>Chatapp</h1>

                    <span className='ms-auto cursor-pointer' onClick={handleLogout}>
                        <FontAwesomeIcon icon={faSignOut} />
                    </span>
                </div>

            </div>
            <div className='p-4'>
                <Outlet />
            </div>
        </div>
    )
}

export default AppLayout

