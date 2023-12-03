import { faCircleNotch } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'

const Button = ({
    children,
    loading = false,
    disabled = false,
    className = '',
    ...otherProps
}) => {
    return (
        <button
            className={`flex w-full justify-center items-center rounded ${(disabled || loading) ? 'bg-blue-500 pointer-events-none' : 'bg-blue-700'} px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-blue-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600${className ? ` ${className}` : ''}`}
            disabled={loading || disabled}
            {...otherProps}
        >
            {children}
            {loading && <FontAwesomeIcon icon={faCircleNotch} className='ms-2' spin/>}
        </button>
    )
}

export default Button