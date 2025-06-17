import React, { useState } from 'react'
import Step1 from './Step1'

const SignUp = () => {
    const [step1Data, setstep1] = useState({})

    return (
        <div className='m-10 flex justify-center items-center border-2 p-10'>
            <Step1 setstep1={setstep1} />
        </div>
    )
}

export default SignUp