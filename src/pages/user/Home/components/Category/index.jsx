import React from 'react'
import './index.css'

function Category({ imgLink, name ,onClick}) {
    return (
        <div onClick={onClick}
            className="categories-item py-4 px-3 mx-2"
            style={{
                width: '11.9rem',
                height: '17rem',
                backgroundColor: 'white',
                borderRadius: '6px',
                cursor: 'pointer'
            }}
        >
            <div className="category-img">
                <img src={imgLink} alt={name} style={{ width: '100%' }} />
            </div>
            <div
                className="category-name d-flex justify-content-center"
                style={{ fontSize: '1.4rem' }}
            >
                {name}
            </div>
        </div>
    )
}

export default Category
