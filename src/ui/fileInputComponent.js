import React, { useState } from 'react';

const FileInputComponent = () => {
    const [inputText, setInputText] = useState('');
    const [showInput, setShowInput] = useState(false);

    const handleButtonClick = () => {
        setShowInput(true);
    };

    const handleSaveClick = () => {
        console.log('Saved text:', inputText);
        setShowInput(false);
    };


    return (
        <div>
            <button className='button button4' onClick={handleButtonClick}>Show Input</button>
            {showInput && (
                <div className='in-outer'>
                    <input className='input-deco'
                        type="text"
                        value={inputText}
                        onChange={(e) => setInputText(e.target.value)}
                    />
                    <button className='button button2 save-button' onClick={handleSaveClick}>Save</button>
                </div>
            )}
        </div>
    )
}

export default FileInputComponent;