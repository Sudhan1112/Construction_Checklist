import React from 'react'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import ChecklistContainer from './components/ChecklistContainer'

function App() {
  return (
    <>
      <div className='p-6 bg-gray-50 min-h-screen'>
        <header className='mb-6'>
          <h1 className='text-3xl font-bold text-gray-800'>Construction Checklist</h1>
          <p className='text-gray-600'>Manage activities and track progress</p>
        </header>

        <ChecklistContainer />
        <ToastContainer position='bottom-right' />
      </div>
    </>
  )
}

export default App;
