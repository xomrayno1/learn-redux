import React from 'react';

function Card({users}) {
    
    return (
        <div className="card">
            <div className="card-body">
                <h5 className="card-title">{users.name}</h5>
                <h6 className="card-subtitle mb-2 text-muted">{users.username}</h6>
                <p className="card-text">{users.email}</p>
            </div>
        </div>
    );
}
export default Card;