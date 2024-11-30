     {/* <div className="absolute top-0 left-0 w-1/4 h-1/4 bg-[#585B42] rounded-full"></div> */}
      {/* <div className="absolute bottom-0 right-0 w-1/4 h-1/4 bg-[#585B42] rounded-full"></div> */}
      {/* <div className="absolute top-0 left-0 w-1/4 h-1/4 bg-[#585B42] rounded-full" style={{clipPath: "circle(70% at 75% 25%)"}}></div>
      <div className="absolute bottom-0 right-0 w-1/4 h-1/4 bg-[#585B42] rounded-full" style={{clipPath: "circle(50% at 75% 75%)"}}></div> */}
      import React from 'react';
      import { useNavigate } from 'react-router-dom';
      import '@fortawesome/fontawesome-free/css/all.css';
      
      const LoginPage = () => {
        const navigate = useNavigate();
      
        const handleLogin = (event) => {
          event.preventDefault();
          // Add your login logic here
          navigate('/home');
        };
      
        return (
          <div className="min-h-screen flex items-center justify-center bg-[#F5F3DB] relative overflow-hidden">
            {/* Background shapes */}
            <div className="absolute top-0 left-0 w-1/4 h-1/4 bg-[#585B42] rounded-full" style={{clipPath: "circle(50% at 25% 25%)"}}></div>
            <div className="absolute bottom-0 right-0 w-1/4 h-1/4 bg-[#585B42] rounded-full" style={{clipPath: "circle(50% at 75% 75%)"}}></div>
            <div className="bg-white p-10 rounded-lg shadow-lg relative z-10 max-w-md w-full">
              <h2 className="text-3xl font-bold mb-4 text-center">Login</h2>
              <p className="text-center mb-6">Please enter your Login and your Password</p>
              <form className="space-y-4" onSubmit={handleLogin}>
                <div className="relative">
                  <input
                    type="text"
                    placeholder="Username or Email"
                    className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-[#585B42] pl-10"
                  />
                  <i className="fas fa-user absolute top-1/2 transform -translate-y-1/2 left-3 text-gray-400"></i>
                </div>
                <div className="relative">
                  <input
                    type="password"
                    placeholder="Password"
                    className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-[#585B42] pl-10"
                  />
                  <i className="fas fa-lock absolute top-1/2 transform -translate-y-1/2 left-3 text-gray-400"></i>
                </div>
                <div className="text-right">
                  <a href="#" className="text-sm text-gray-600 hover:text-gray-900">Forget password?</a>
                </div>
                <button className="w-full bg-[#585B42] text-white py-2 rounded-md font-semibold hover:bg-[#434C28]">Login</button>
                <button className="w-full bg-white text-black border border-[#585B42] py-2 rounded-md flex items-center justify-center space-x-2 hover:bg-gray-100">
                  <i className="fab fa-google"></i>
                  <span>Or, sign-in with Google</span>
                </button>
              </form>
              <div className="text-center mt-4">
                <span>Not a member yet? <a href="#" className="text-[#585B42] font-semibold">Register!</a></span>
              </div>
            </div>
          </div>
        );
      };
      
      export default LoginPage;
      