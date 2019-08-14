import React from 'react'

const constructionStyle = {
    color: 'white',
    position: 'absolute',
    left: '50%',
    top: '50%',
    transform: 'translate(-50%, -50%)'
}

const Construction = () => {
    return (
        <div style={constructionStyle}>
            <h1>UNDER CONSTRUCTION</h1>
            <p>Coming soon! Thanks for your patience.</p>
        </div>
    )
}

export default Construction 
