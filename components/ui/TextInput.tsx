import React from "react";

export interface TextInput {
    label: string
    name: string
    placeholder?: string
    password?: boolean
    onChange: Function
}

export default function TextInput({label, name, placeholder, password, onChange}: TextInput) {
    return (
        <div className="">
            <label
                htmlFor={name}
                className="block font-sans text-sm font-medium text-gray-700"
            >
                {label}
            </label>
            <div className="mt-1 relative rounded-md shadow-sm">
                <input
                    type={password ? 'password' : 'text'}
                    name={name}
                    id={name}
                    className="focus:ring-blue-500 focus:border-blue-500 block font-sans w-full sm:text-sm border-gray-300 rounded-md"
                    placeholder={placeholder}
                />
            </div>
        </div>
    );
}
