import React, { useState } from 'react'

const Step1 = ({ setstep1 }) => {

    const [name, setname] = useState("")
    const [email, setemail] = useState("")

    const hanldeonSubmit = (event) => {
        event.preventDefault();
        setstep1({ name, email })
    }

    return (
        <div>
            <form action="" className='flex flex-col gap-5'>
                <label onSubmit={hanldeonSubmit}>
                    name :
                    <input type="text" value={name} placeholder='name' onChange={(e) => setname(e.target.value)} />
                </label>
                <label htmlFor="">
                    email :
                    <input type="text" value={email} placeholder='enter email' onChange={(e) => setemail(e.target.value)} />
                </label>
                <button className='border-1 p-2 rounded-xl bg-gray-400' type="submit">Next</button>
            </form>
        </div>
    )
}

export default Step1