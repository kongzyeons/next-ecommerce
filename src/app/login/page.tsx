const LoginPage = () => {
  return (
    <div className='bg-red-50 flex justify-center items-center h-screen min-w-full'>
        <form 
            className=" flex flex-col md:w-1/5"
            action="">
                <div className="text-center">
                    <span className="text-blue-400">welcome!</span>
                </div>
                <input 
                    type="text" 
                    placeholder="email" 
                    className="p-3 mt-8 border-2 border-gray-400 rounded-md focus:outline-none focus:border-blue-100"
                />
                <input 
                    type="password" 
                    placeholder="password" 
                    className="p-3 mt-6 border-2 border-gray-400 rounded-md focus:outline-none focus:border-blue-100"
                />
                <button className=" bg-blue-600 p-3 mt-6 rounded-md text-white font-bold">
                    login
                </button>
        </form>
    </div>
  )
}

export default LoginPage