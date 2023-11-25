import React from 'react'
import '../App.css';

const Card = (prop) => { 
    return (
        <div className="card">
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