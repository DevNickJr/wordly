import React, { MouseEvent, useEffect } from 'react'

interface IProps {
    isOpen: boolean,
    setIsOpen: (value: boolean) => void
}

const HowToPlay = ({ isOpen, setIsOpen }: IProps) => {
    
    const handleOutsideClick = (e: MouseEvent<HTMLDivElement, globalThis.MouseEvent>) => {
        if (e.target === e.currentTarget) {
            setIsOpen(false)
        }
    }

    return (
        <div onClick={handleOutsideClick} className={`fixed top-0 left-0 w-full h-full flex justify-center items-center py-8 p-2 sm:px-12 translate-x-full transition-all duration-500 ${isOpen ? "slide-in" : "slide-out"}`}>
            <div className='bg-white shadow-2xl rounded-lg p-4 sm:p-8 max-w-lg relative'>
                <div className='absolute top-5 right-4'>
                    <svg onClick={() => setIsOpen(false)} xmlns="http://www.w3.org/2000/svg" height="28" viewBox="0 0 24 24" width="24" className="cursor-pointer" data-testid="icon-close"><path fill="var(--color-tone-1)" d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"></path></svg>
                </div>
                <h1 className='text-3xl font-bold '>How to play</h1>
                <p className='text-lg'>Guess the Wordle in 6 tries.</p>
                <ul className='mt-3 pl-8'>
                    <li className='list-item list-disc leading-tight'>Each guess must be a valid 5-letter word.</li>
                    <li className='list-item list-disc leading-tight'>The color of the tiles will change to show how close your guess was to the word.</li>
                </ul>
                <div className='mt-4'>
                    <h1 className='font-bold mb-2'>Examples</h1>
                    <div className="mb-5">
                        <div className='flex gap-1 mb-1.5'>
                            <span className={`flex h-8 w-8 items-center justify-center bg-[#538d4e] text-white text-xl font-bold p-2`}>W</span>
                            <span className={`flex h-8 w-8 items-center justify-center border-2 border-black/20 text-xl font-bold p-2`}>E</span>
                            <span className={`flex h-8 w-8 items-center justify-center border-2 border-black/20 text-xl font-bold p-2`}>A</span>
                            <span className={`flex h-8 w-8 items-center justify-center border-2 border-black/20 text-xl font-bold p-2`}>R</span>
                            <span className={`flex h-8 w-8 items-center justify-center border-2 border-black/20 text-xl font-bold p-2`}>Y</span>
                        </div>
                        <p><span className='font-bold'>W</span> is in the word and in the correct spot</p>
                    </div>
                    <div className="mb-5">
                        <div className='flex gap-1 mb-1.5'>
                            <span className={`flex h-8 w-8 items-center justify-center border-2 border-black/20 text-xl font-bold p-2`}>P</span>
                            <span className={`flex h-8 w-8 items-center justify-center bg-[#c9b458] text-white text-xl font-bold p-2`}>I</span>
                            <span className={`flex h-8 w-8 items-center justify-center border-2 border-black/20 text-xl font-bold p-2`}>L</span>
                            <span className={`flex h-8 w-8 items-center justify-center border-2 border-black/20 text-xl font-bold p-2`}>E</span>
                            <span className={`flex h-8 w-8 items-center justify-center border-2 border-black/20 text-xl font-bold p-2`}>S</span>
                        </div>
                        <p><span className='font-bold'>I</span> is in the word but in the wrong spot.</p>
                    </div>
                    <div className="mb-5">
                        <div className='flex gap-1 mb-1.5'>
                            <span  className={`flex h-8 w-8 items-center justify-center border-2 border-black/20 text-xl font-bold p-2`}>V</span>
                            <span  className={`flex h-8 w-8 items-center justify-center border-2 border-black/20 text-xl font-bold p-2`}>A</span>
                            <span  className={`flex h-8 w-8 items-center justify-center border-2 border-black/20 text-xl font-bold p-2`}>G</span>
                            <span className={`flex h-8 w-8 items-center justify-center bg-[#787c7e] text-white text-xl font-bold p-2`}>U</span>
                            <span  className={`flex h-8 w-8 items-center justify-center border-2 border-black/20 text-xl font-bold p-2`}>E</span>
                        </div>
                        <p><span className='font-bold'>U</span> is not in the word in any spot.</p>
                    </div>
                </div>
                <p className='border-t-2 border-b-2 border-black/20 py-4 my-3 leading-tight'>Log in or create a free NYT account to link your stats</p>
                <p className='leading-tight'>A new puzzle is released daily at midnight. If you haven&#39;t already, you can sign up for our daily reminder email.</p>
            </div>
        </div>
  )
}

export default HowToPlay