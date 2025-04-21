import './App.css'
import Input from "../components/UI/Input.tsx";
import WebcamCapture from "../components/UI/WebcamCapture.tsx";
import { useState } from 'react';
import * as React from "react";

function App() {
    const [formData, setFormData] = useState({
        Name: '',
        Email: '',
        ProfilePicture: null as File | null,
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setFormData((prev) => ({
            ...prev,
            [name]: value,
        }));
    };

    const handleCapture = (file: File) => {
        setFormData((prev) => ({
            ...prev,
            ProfilePicture: file,
        }));
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        const data = new FormData();
        data.append('Name', formData.Name);
        data.append('Email', formData.Email);
        if (formData.ProfilePicture) {
            data.append('ProfilePicture', formData.ProfilePicture);
        }
        console.log(formData)

        try {
            const response = await fetch('http://localhost:5091/api/users', {
                method: 'POST',
                body: data,
            });
            if (response.ok) {
                alert('Форма успішно надіслана!');
            } else {
                alert('Помилка при відправці форми.');
            }
        } catch (error) {
            console.error(error);
            alert('Помилка сервера.');
        }
    };

    return (
        <>
            <div className='flex flex-col justify-center h-screen bg-gray-100 w-screen'>
                <h1 className='w-full flex justify-center text-4xl py-6'>Sign up</h1>
                <div className='form-wrapper flex flex-row items-center rounded p-6 w-screen justify-evenly'>
                    <WebcamCapture onCapture={handleCapture} />
                    <form className='flex flex-col items-start'>
                        <Input
                            type="text"
                            name="Name"
                            placeholder="Username"
                            value={formData.Name}
                            onChange={handleChange}
                        />
                        <Input
                            type="email"
                            name="Email"
                            placeholder="Email"
                            value={formData.Email}
                            onChange={handleChange}
                        />
                        <button
                            onClick={handleSubmit}
                            type="submit"
                            className='bg-blue-500 text-white rounded-md p-2 w-full'
                        >
                            Sign Up
                        </button>
                    </form>
                </div>
            </div>
        </>
    );
}

export default App;
