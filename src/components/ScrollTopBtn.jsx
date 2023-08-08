import React, { useContext } from 'react'
import { Context } from '../context/Context'
import { BsArrowLeftCircle } from 'react-icons/bs'

function ScrollTopBtn() {
    const { handelScrollToTopSmooth } = useContext(Context)
    
    return (

        <button
            id='scroll-top-btn'
            className=" fixed bottom-5 right-5 rounded-full rotate-90 bg-gray-900 shadow-[0px_10px_20px_rgba(0,0,0,0.4)] text-white hover:bg-gray-700 transition duration-300"
            onClick={handelScrollToTopSmooth}
        >
            <BsArrowLeftCircle
                size={50}
                className="text-4xl rounded-full transition duration-5"
            />
        </button>

    )
}

export default ScrollTopBtn