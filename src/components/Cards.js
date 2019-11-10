import React, { Fragment } from 'react';

const Cards = ({id, name, email}) => {
    return (
        <Fragment >
            <div className="tc bg-light-green dib br3 ma2 pa3 grow bw2 shadow-5">
                <img src={`https://robohash.org/${id}?size=200x200`} alt='robots'/>
                <h1>{name}</h1>
                <p>{email}</p>
            </div>
        </Fragment>
    )
};

export default Cards;