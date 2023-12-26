import React from 'react'
import './index.scss';
const EmptyList = () => {
    return (
        <div className='emptylist-container'>
            <div className='emptylist-content'>
                <h2 className="">Your movie list is empty</h2>
                <button type="submit">Add a new movie</button>
            </div>

        </div>
    )
}

export default EmptyList;
