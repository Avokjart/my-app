import React from 'react';

export default function Movie(props) {
    const renderStars = () => {
        const stars = [];
        
        for (let i = 0; i < props.item.rating; i++) {
            stars.push(<img key={i} src="star.png" alt="Star" className="star" style={{ marginRight: '5px', width: '20px', height: '20px'}} />);
        }
        return stars;
    };

    return (
        <li className="list-group-item">
            {props.item.title}
            <div className="rating">
                {renderStars()}
            </div>
            <img
                src="delete.png"
                alt="Delete"
                className="btn-delete"
                style={{ marginRight: '5px', width: '20px', height: '20px' }}
                onClick={() => props.deleteItem(props.item.id)}
            />
        </li>
    );
}
