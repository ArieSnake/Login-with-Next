"use client"

import { useForm } from "react-hook-form";
import { InputUser } from "./_lib/types";
import axios from "axios";
import { useState } from "react";

const Home = () => {
  const { register, handleSubmit, reset, formState: { errors } } = useForm<InputUser>()
  const [message, setMessage] = useState<{ type: 'success' | 'error', text: string } | null>(null)


  const onSubmit = (data: InputUser) => {
    axios.post('/api/users', data)
      .then(response => {
        setMessage({ type: 'success', text: response.data.message })
        reset()

        setTimeout(() => {
          setMessage(null)
        }, 2000)
      })
      .catch(error => {
        setMessage({ type: 'error', text: error.response?.data.message || 'Something went wrong!' })
      })
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-indigo-900 via-purple-900 to-pink-900 text-white">
      <div className="w-full max-w-md p-6 bg-gray-800 rounded-lg shadow-lg">
        <h1 className="text-3xl font-bold text-center mb-6">Sign Up</h1>

        {message && (
          <div
            className={`p-3 my-4 rounded-lg ${
              message.type === 'success' ? 'bg-green-500' : 'bg-red-500'
            }`}
          >
            {message.text}
          </div>
        )}

        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
          <div>
            <label htmlFor="name" className="block text-sm font-medium mb-1">Name</label>
            <input
              {...register("name", { required: "Name is required" })}
              type="text"
              className="w-full px-4 py-2 bg-gray-700 border border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-500 focus:border-transparent"
              placeholder="Enter your name"
            />
            {errors.name && <p className="text-red-500 text-sm">{errors.name.message}</p>}
          </div>
          <div>
            <label htmlFor="surname" className="block text-sm font-medium mb-1">Surname</label>
            <input
              {...register("surname", { required: "Surname is required" })}
              type="text"
              className="w-full px-4 py-2 bg-gray-700 border border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
              placeholder="Enter your surname"
            />
            {errors.surname && <p className="text-red-500 text-sm">{errors.surname.message}</p>}
          </div>
          <div>
            <label htmlFor="login" className="block text-sm font-medium mb-1">Login</label>
            <input
              {...register("login", { required: "Login is required" })}
              type="text"
              className="w-full px-4 py-2 bg-gray-700 border border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
              placeholder="Enter your login"
            />
            {errors.login && <p className="text-red-500 text-sm">{errors.login.message}</p>}
          </div>
          <div>
            <label htmlFor="password" className="block text-sm font-medium mb-1">Password</label>
            <input
              {...register("password", { required: "Password is required", minLength: { value: 6, message: "Password must be at least 6 characters long" } })}
              type="password"
              className="w-full px-4 py-2 bg-gray-700 border border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-500 focus:border-transparent"
              placeholder="Enter your password"
            />
            {errors.password && <p className="text-red-500 text-sm">{errors.password.message}</p>}
          </div>
          <button
            type="submit"
            className="w-full py-2 bg-gradient-to-r from-pink-500 to-purple-500 text-white font-semibold rounded-lg hover:from-pink-600 hover:to-purple-600 focus:outline-none focus:ring-4 focus:ring-pink-300"
          >
            Sign Up
          </button>
        </form>
      </div>
    </div>
  )
}

export default Home;




/*import { useActionState } from "react";
import { handleSignUp } from "./_lib/actions";

const Home = () => {
  const [state, formAction] = useActionState(handleSignUp, {message:""})
  
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-indigo-900 via-purple-900 to-pink-900 text-white">
      <div className="w-full max-w-md p-6 bg-gray-800 rounded-lg shadow-lg">
        <h1 className="text-3xl font-bold text-center mb-6">Sign Up</h1>
        {state.message && <p className="bg-red-500 p-2 my-2">{state.message}</p>}
        <form className="space-y-4" action={formAction}>
          <div>
            <label htmlFor="name" className="block text-sm font-medium mb-1">Name</label>
            <input
              type="text"
              name="name"
              className="w-full px-4 py-2 bg-gray-700 border border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-500 focus:border-transparent"
              placeholder="Enter your name"
            />
          </div>
          <div>
            <label htmlFor="surname" className="block text-sm font-medium mb-1">Surname</label>
            <input
              type="text"
              name="surname"
              className="w-full px-4 py-2 bg-gray-700 border border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
              placeholder="Enter your surname"
            />
          </div>
          <div>
            <label htmlFor="login" className="block text-sm font-medium mb-1">Login</label>
            <input
              type="text"
              name="login"
              className="w-full px-4 py-2 bg-gray-700 border border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
              placeholder="Enter your login"
            />
          </div>
          <div>
            <label htmlFor="password" className="block text-sm font-medium mb-1">Password</label>
            <input
              type="password"
              name="password"
              className="w-full px-4 py-2 bg-gray-700 border border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-500 focus:border-transparent"
              placeholder="Enter your password"
            />
          </div>
          <button
            type="submit"
            className="w-full py-2 bg-gradient-to-r from-pink-500 to-purple-500 text-white font-semibold rounded-lg hover:from-pink-600 hover:to-purple-600 focus:outline-none focus:ring-4 focus:ring-pink-300"
          >
            Sign Up
          </button>
        </form>
        <p className="text-sm text-center mt-4">
          Already have an account?{' '}
          <a href="#" className="text-pink-400 hover:underline">
            Log In
          </a>
        </p>
      </div>
    </div>
  );
};
export default Home;
*/
// "use client"

// import axios from "axios"

// export default function Home(){
  
//    const handleGetAll = () => {
//       axios.get("http://localhost:3000/api/users")
//       .then(res => console.log(res.data)
//       )
//    }
//    const handleGetOne = () => {
//     axios.get("http://localhost:3000/api/users/1")
//       .then(res => console.log(res.data)
//       )

//    }
//    const handlePost = () => {
//     axios.post("http://localhost:3000/api/users", {
//       name:"Tiko", surname:"Sahakyan", login:"Tiko123", password:"123*456"
//     })
      
      

//    }

//   return <div>
//     <h1>HELLO!</h1>
//     <button onClick={handleGetAll} className="bg-indigo-300 p-2 m-2">GET  /api/users</button>
//     <button onClick={handleGetOne} className="bg-indigo-200 p-2 m-2">GET /api/users/1</button>
//     <button onClick={handlePost} className="bg-indigo-400 p-2 m-2">POST /api/users</button>
//   </div>
// }