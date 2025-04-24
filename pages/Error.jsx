import React from 'react'
import { Link } from 'react-router-dom'

function Error() {
  return (
    <main className='flex items-center justify-center h-screen flex-col gap-4 w-screen'>
    <div className='text-4xl'>Error: 404 not found</div>
    <Link to="/" className='bg-blue-600 p-3 text-white inline-block rounded-md'>home</Link>
    </main>
    
  )
}

export default Error