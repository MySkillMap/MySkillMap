import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="min-h-screen bg-gray-100 py-6 flex flex-col justify-center sm:py-12">
      <div className="relative py-3 sm:max-w-xl sm:mx-auto">
        <div className="absolute inset-0 bg-gradient-to-r from-cyan-400 to-sky-500 shadow-lg transform -skew-y-6 sm:skew-y-0 sm:-rotate-6 sm:rounded-3xl"></div>
        <div className="relative px-4 py-10 bg-white shadow-lg sm:rounded-3xl sm:p-20">
          <div className="max-w-md mx-auto">
            <div className="text-center">
              <h1 className="text-3xl font-extrabold text-gray-900 mb-6">MySkillMap</h1>
              <p className="text-xl text-gray-600 mb-8">Welcome to our awesome app!</p>
            </div>
            
            <div className="flex flex-col items-center">
              <div className="mb-4 bg-blue-500 text-white p-4 rounded-lg w-full text-center">
                Tailwind CSS is successfully installed!
              </div>
              
              <div className="mt-8">
                <button
                  onClick={() => setCount((count) => count + 1)}
                  className="px-4 py-2 bg-indigo-600 text-white rounded-md hover:bg-indigo-700 transition-colors"
                >
                  Count is: {count}
                </button>
              </div>
              
              <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-4 w-full">
                <div className="bg-green-100 p-4 rounded-lg border border-green-200">
                  <h3 className="font-bold text-green-800">Utility-First</h3>
                  <p className="text-green-700">Use utility classes to build custom designs</p>
                </div>
                <div className="bg-purple-100 p-4 rounded-lg border border-purple-200">
                  <h3 className="font-bold text-purple-800">Responsive</h3>
                  <p className="text-purple-700">Fully responsive components with Tailwind</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default App