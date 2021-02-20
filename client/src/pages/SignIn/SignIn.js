import axios from 'axios';
import React, { useState, useContext, useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { Link, useHistory } from 'react-router-dom';
import { toast } from 'react-toastify';
import { AuthContext } from '../../context/auth';

function SignIn(props) {
    const { register, errors, handleSubmit } = useForm();
    const { user, login } = useContext(AuthContext);
    const [loading, setLoading] = useState(false);
    const history = useHistory();

    const onSubmit = async (formData) => {
        try {
            setLoading(true);
            const userData = await axios.post('api/auth/signin', {
                username: formData.username,
                password: formData.password,
            });
            login(userData.data);
            history.push('/');
        } catch (err) {
            setLoading(false);
            const message = err.response.data.errors.message;
            toast.error(`⚠️ Error! ${message}.`);
        }
    };

    return (
        <div className="bg-darkGray-500 lg:w-4/12 md:6/12 w-10/12 m-auto my-10 mt-40 shadow-md rounded">
            <div className="py-8 px-8 rounded-xl">
                <h1 className=" font-medium text-2xl mt-3 text-center text-white">
                    Login
                </h1>
                <form className="mt-6" onSubmit={handleSubmit(onSubmit)}>
                    <div className="my-5 text-sm">
                        <label
                            htmlFor="username"
                            className="block text-gray-300">
                            Username:
                        </label>
                        <input
                            type="text"
                            autoFocus
                            id="username"
                            name="username"
                            required={true}
                            className="rounded-sm px-4 py-3 mt-2 focus:outline-none bg-gray-700 w-full text-white"
                            ref={register()}
                        />
                    </div>

                    <div className="my-5 text-sm">
                        <label
                            htmlFor="password"
                            className="block text-gray-300">
                            Password:
                        </label>
                        <input
                            type="password"
                            id="password"
                            name="password"
                            required={true}
                            className="rounded-sm px-4 py-3 mt-2 focus:outline-none bg-gray-700 w-full text-white"
                            ref={register()}
                        />
                        <div className="flex justify-end mt-1 text-xs">
                            <Link
                                to="/forgot"
                                className="text-gray-400 hover:text-white">
                                Forget Password?
                            </Link>
                        </div>
                    </div>
                    <button
                        disabled={loading}
                        className="mt-10 block text-center text-white bg-blue-500 p-3 duration-300 rounded-sm hover:bg-blue-600 focus:outline-none disabled:opacity-50 w-full">
                        Login
                    </button>
                </form>
                <p className="mt-6 text-xs text-center font-light text-gray-400 ">
                    {' '}
                    Don't have an account?{' '}
                    <Link
                        to="/sign-up"
                        className="text-gray-400 hover:text-white font-medium">
                        {' '}
                        Create One{' '}
                    </Link>{' '}
                </p>
            </div>
        </div>
    );
}
export default SignIn;
