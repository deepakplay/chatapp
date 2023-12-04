import { faEye, faEyeSlash } from '@fortawesome/free-regular-svg-icons';
import { faCircleNotch, faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { forwardRef, useState } from 'react'

const InputElement = forwardRef(({
    label,
    error,
    apiError,
    name,
    className,
    search,
    type,
    required,
    formClassName = '',
    onKeyPress = ()=>{},
    value,
    loader,
    ...otherProps
}, ref) => {
    const [passToggle, setPassToggle] = useState(false);

    const handleKeyPress = (e) => {
        if (type === 'number' && isNaN(e.key) && e.key !== '.') {
            e.preventDefault();
        }
        onKeyPress(e);
    }

    const inputProps = {
        name,
        ref,        
        id: name,
        value: value || '',
        loader,
        onKeyPress: handleKeyPress,
        className: `border text-gray-90 shadow-sm text-sm rounded-md block w-full p-2 ing-1 ring-inset ring-gray-300 placeholder:text-gray-400 placeholder:text-xs outline-none focus:border-blue-600 ${className ? `${className} ` : ''}${(error || apiError) ? ' border-red-600' : ' border-gray-200'}`,
        ...otherProps
    }

    if (!!search || type === 'password' || !!loader) {
        inputProps.className = `${inputProps.className} pr-9`
    }

    if (type !== 'textarea') {
        inputProps['type'] = passToggle ? 'text' : ((type === 'number') ? 'text' : type);
    }

    return (
        <div className={`flex w-full flex-col ${formClassName} mt-2`}>
            {!!label && (
                <label htmlFor="email" className="block text-sm font-medium leading-7 text-gray-600">
                    {label}
                    {required && <span className="text-red-600">*</span>}
                </label>
            )}
            <div className="w-full relative">
                {type === "textarea" ? <textarea {...inputProps} /> : <input {...inputProps} />}
                {search && (
                    <span className='absolute right-3 top-1/2 -translate-y-1/2' >
                        <FontAwesomeIcon icon={faMagnifyingGlass} />
                    </span>
                )}
                {type === 'password' && !!value?.length && (
                    <span className='absolute right-3 top-1/2 -translate-y-1/2' onClick={() => setPassToggle(!passToggle)}>
                        <FontAwesomeIcon icon={passToggle ? faEye : faEyeSlash} />
                    </span>
                )}

                {!!loader &&
                    <span className='absolute right-3 top-1/2 -translate-y-1/2'>
                        <FontAwesomeIcon icon={faCircleNotch} spin />
                    </span>
                }
            </div>
            {error && <span className="text-red-600 text-xs">{error}</span>}
        </div>
    )
})

export default InputElement;