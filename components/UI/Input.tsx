import * as React from "react";

interface InputProps {
    type: string;
    name: string;
    placeholder?: string;
    value: string | number;
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}
const Input: React.FC<InputProps> = ({ type, name, placeholder, value, onChange })  => {

    return (
        <div className="flex flex-col mb-4">
        <label className='flex mb-2 p-2'>{name}</label>
        <input
        type={type}
        name={name}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        className="border border-gray-300 rounded-md p-2 hover:bg-blue-100 focus:border-blue-500"
        />
        </div>
    );
};

export default Input;