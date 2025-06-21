import React from 'react'

const Login2 = () => {
  return (
    <div className='bg-gray-50'>
        <div className="flex min-h-screen">
        {/* <!-- Left side - Image and University Info --> */}
        <div className="hidden lg:flex lg:w-1/2 bg-indigo-600 text-white p-12 flex-col justify-between bg-gradient-to-br from-indigo-600 to-purple-700">
            <div>
                <h1 className="text-4xl font-bold">University Course Registration System</h1>
                <p className="mt-6 text-xl">Streamline your academic journey with our intelligent scheduling system.</p>
            </div>
            
            <div className="relative h-64 w-full">
                <img src="https://images.unsplash.com/photo-1541339907198-e08756dedf3f" alt="University Campus" className="absolute inset-0 h-full w-full object-cover rounded-lg opacity-80" />
            </div>

            <div>
                <p className="text-lg font-medium">Features:</p>
                <ul className="mt-2 space-y-2">
                    <li className="flex items-center"><i className="fas fa-check-circle mr-2"></i> Smart conflict detection</li>
                    <li className="flex items-center"><i className="fas fa-check-circle mr-2"></i> Intuitive schedule builder</li>
                    <li className="flex items-center"><i className="fas fa-check-circle mr-2"></i> Real-time course availability</li>
                </ul>
            </div>
        </div>

        {/* <!-- Right side - Login Form --> */}
        <div className="w-full lg:w-1/2 flex items-center justify-center p-6">
            <div className="w-full max-w-md">
                <div className="text-center mb-10 lg:hidden">
                    <h1 className="text-3xl font-bold text-indigo-600">UCRS</h1>
                    <p className="mt-2 text-gray-600">University Course Registration System</p>
                </div>

                <div className="bg-white rounded-lg shadow-lg p-8">
                    <h2 className="text-2xl font-bold text-center text-gray-800 mb-8">Sign In</h2>
                    
                    <form>
                        <div className="mb-6">
                            <label htmlhtmlFor="student-id" className="block text-sm font-medium text-gray-700 mb-2">Student ID</label>
                            <div className="relative">
                                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                                    <i className="fas fa-id-card text-gray-400"></i>
                                </div>
                                <input type="text" id="student-id" className="pl-10 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 py-2 border px-3" placeholder="Enter your student ID" />
                            </div>
                        </div>
                        
                        <div className="mb-6">
                            <label htmlhtmlFor="password" className="block text-sm font-medium text-gray-700 mb-2">Password</label>
                            <div className="relative">
                                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                                    <i className="fas fa-lock text-gray-400"></i>
                                </div>
                                <input type="password" id="password" className="pl-10 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 py-2 border px-3" placeholder="Enter your password" />
                            </div>
                        </div>
                        
                        <div className="flex items-center justify-between mb-6">
                            <div className="flex items-center">
                                <input id="remember-me" type="checkbox" className="h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded" />
                                <label htmlhtmlFor="remember-me" className="ml-2 block text-sm text-gray-700">Remember me</label>
                            </div>
                            
                            <div className="text-sm">
                                <a href="#" className="font-medium text-indigo-600 hover:text-indigo-500">Forgot password?</a>
                            </div>
                        </div>
                        
                        <a href="dashboard.html" className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">Sign in</a>
                    </form>
                    
                    <div className="mt-6">
                        <p className="text-center text-sm text-gray-600">
                            Need an account? 
                            <a href="#" className="font-medium text-indigo-600 hover:text-indigo-500">Contact your administrator</a>
                        </p>
                    </div>
                </div>
                
                <div className="mt-8 text-center text-sm text-gray-500">
                    <p>© 2025 University Course Registration System. All rights reserved.</p>
                </div>
            </div>
        </div>
    </div>
    </div>
  )
}

export default Login2