import React, { useState } from 'react';
import { AiOutlineMinus, AiOutlinePlus } from 'react-icons/ai'

const Blog = ({ title, info }) => {
    const [expanded, setExpanded] = useState(false)
    return (
        
            <article className='question'>
                <header className='flex justify-between my-4'>
                    <div>
                    <h4 onClick={() => setExpanded(!expanded)} className='question-title'>
                        {title}
                    </h4>
                    </div>
                    <div>
                    <button className='btn inline' onClick={() => setExpanded(!expanded)}>
                        {expanded ? <AiOutlineMinus /> : <AiOutlinePlus />}
                    </button>
                    </div>
                </header>
                {expanded && <p>{info}</p>}
            </article>
    
    )
}

export default Blog;