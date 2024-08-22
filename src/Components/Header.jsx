import React from 'react'

function Header({score, failCount}) {
  return (
    <div className='flex flex-col gap-5 items-center justify-center p-10'>
        <h1 className='text-center text-3xl font-extrabold'>Welcome to the Programming Languages Memory Game!</h1>
        <div className='flex justify-between w-full'>

            <p>Score: {score}</p>
            <p>Failed Attempts: {failCount}</p>
        </div>
    </div>
  )
}

export default Header