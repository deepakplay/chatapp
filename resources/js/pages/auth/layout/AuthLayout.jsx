import { Outlet } from 'react-router-dom';

const AuthLayout = () => {
    return (
        <div className='flex min-w-full min-h-screen pt-36 items-center p-3 bg-gray-50 flex-col'>            
            <div className='shadow rounded-lg  px-6 pt-8 pb-5 w-full max-w-sm bg-white'>
                <div className='w-full'>
                    <Outlet />
                </div>
            </div>

        </div>
    )
}

export default AuthLayout;



// <div className='text-center mt-7'>
//     <small>
//         &copy; {moment().format('YYYY')} Deepak Kumar. All Rights Reserved.
//     </small>
// </div>


