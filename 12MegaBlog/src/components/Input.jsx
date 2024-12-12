/*
Why use forwardref ?
while making an login page or any other page we need an input field 
which when is designed as component separately but to access state in login page
we need an ref of input field so we use forwardRef concept passing the refernce of that component
to the respective page when needed.
*/

import React, {useId} from "react";

const Input = React.forwardRef( function Input({
    label,
    type = "text",
    className = "",
    ...props
}, ref) {
    const id = useId();
    return (
        <div className="w-full">
            {label && <label 
            className="inline-block mb-1 pl-1" 
            htmlFor={id}>
                {label}</label>
            }
            <input 
            type={type}
            className={`px-3 py-2 rounded-lg bg-white
            text-black outline-none focus:bg-gray-50
            duration-200 border border-gray-200 w-full
            ${className}`}
            ref={ref}
            {...props}
            id={id}
            />
        </div>
    )
})

export default Input;