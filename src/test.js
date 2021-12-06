import React, { useState, useEffect } from 'react';

function Input() {

    const [text, setText] = useState('')
    const [data, setData] = useState([])
    const [condition, setCondition] = useState(false)
    function handleSubmit() {
        setData([...data, text])
    }
    function deleteData(k) {
        
        let newArr=data.splice(k,1)
        // console.log(newArr)
        // console.log(data)
        setData([...data])
    }
    useEffect(() => {
        setCondition(true)
    }, [data])
    
    return (
        <div>
            <input type='text' onChange={(e) => setText(e.target.value)} /><br />
            <button onClick={handleSubmit}>click here to add</button><br />
            {
                condition ? data.map((i, j) => {
                    return (
                        <div key={j}>
                            <h1>{i}</h1>
                            <button onClick={() => deleteData(j)}>delete</button>
                        </div>
                    )
                }) : null
            }
        </div>
    )
}

export default Input;