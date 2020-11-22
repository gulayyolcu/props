import React from 'react';

const Card=(props)=>{
        return(
            <div className="card w-100">
                    <img src={props.cardlink} className="rounded mx-auto d-block  mt-4" alt="..."/>
                    <div className="card-body ml-4">
                            <h5 className="card-title  mx-auto">{props.cardtitle}</h5>
                            <p className="card-text">{props.cardtext}</p>
                            <p className="card-text"><small className="text-muted">{props.cardtime}</small></p>
                    </div>
        </div>
        );
}

export default Card;
