import React, { useContext, useState } from 'react'
import './DivyaAlok.css'
import { MyContext } from './../ContextProvider';

function Content2() {

    const ctx = useContext(MyContext)

    const [name, setName] = useState("");
    const [count, setCount] = useState(0);

    function displayNameHandler(e) {
        let updatedName = e.target.value;
        setName(updatedName)
    }

    function handleClick() {
        setCount(count + 1);
    }

    return (
        <div className={ctx.themeStatus ? 'body-wrapper' : 'body-wrapper-dark'}>
            <div className='item1'>
                <div className='position'>
                    <h2>
                        Enter following details
                    </h2>
                    <div>
                        <input
                            type="text"
                            placeholder="Enter name"
                            name="name"
                            onChange={displayNameHandler}
                            value={name}
                        />
                        <button type="submit" onClick={handleClick}>
                            Submit
                        </button>
                    </div>
                </div>
            </div>
            <div></div>
            <div></div>
            <div></div>
            <div className={ctx.themeStatus ? 'item2' : 'item2 item-dark'}>
                <div className="position">
                    <h2>
                        Name : {name}
                    </h2>
                    <p>
                        The name was submitted {count} times
                    </p>
                </div>
            </div>
            <div className='item3'>
                <span className='position'>
                    <h2>
                        This website is currently is in {ctx.themeStatus ? 'DARK' : 'LIGHT'} mode
                    </h2>
                </span>
            </div>
            <span className='spanClass'>
                <button onClick={ctx.changeUser} className='buttonClass' >
                    Gaurav Mode
                </button>
            </span>
        </div>
    )
}

export default Content2
