import React, { useState, useEffect } from 'react'
import '../App.css';

const Card = (prop) => {

    const [X, setX] = useState(0)
    const [Y, setY] = useState(0)

    const recordMouse = e => {
        setX(e.clientX)
        setY(e.clientY)
    }

    console.log('mouse event')

    useEffect(() => {
        window.addEventListener('mousemove', recordMouse)

        return () => {
            console.log("card clean up")
            window.removeEventListener('mousemove',recordMouse)
        }
    }, [])



    return (
        <div className="card">
            <p>x position : {X}</p> <p>y position : {Y}</p>
            <img src={prop.image} alt="Avatar" style={{ width: '100%' }}></img>
            <div className="container">
                <h4><b>{prop.name}</b></h4>
                <p>{prop.title}</p>
                <input type='text' onChange={prop.onChangeName} value={prop.name} ></input>
                <p><button className='button button3' onClick={prop.onDelete}>Delete</button></p>
                {/* <div>{prop.children}</div> */}
            </div>
        </div>
    )
}

export default Card