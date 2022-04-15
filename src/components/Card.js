import React from "react";

const Card = ({id, name, email}) => {
    return (
        <div className="bg-light-green dib br3 pa2 ma2 grow shadow-5 w-20-l w-30-m w-60">
            <img alt="robots" src={`https://robohash.org/${id}?size=200x200`}/>
            <h3 className="fw5">{name}</h3>
            <p>{email}</p>
        </div>
    );
};

export default Card;
