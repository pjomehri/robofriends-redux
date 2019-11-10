import React, { Fragment } from 'react';
import Cards from './Cards';

const CardsList = ({ robots }) => {
    return (
        <Fragment>
        {
            robots.map((robot, i)=> {
                return  (
                    <Cards 
                        key={robots[i].id} 
                        id={robots[i].id} 
                        name={robots[i].name} 
                        email={robots[i].email}
                    />
                );
            })
        }      
        </Fragment>
    );
}

export default CardsList;