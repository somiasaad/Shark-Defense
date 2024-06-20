import React from 'react'

export default function Input({ Type, Class, Placeholder, Value, OnChange }) {
    return (
        <>
            <input type={Type} className={Class} placeholder={Placeholder} value={Value} onChange={OnChange} />
        </>
    )
}
