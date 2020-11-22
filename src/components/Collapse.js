import React from 'react';

const Collapse=(props)=>{
        return(
                <div className="ml-4 col">
                     
                        <a className="btn btn-primary mb-4 mx-auto" data-toggle="collapse" href={"#".concat(props.href)} role="button" aria-expanded="false" aria-controls="collapseExample">
                                    {props.baslik}
                        </a>

                        <div className="collapse" id={props.href}>
                                <div className="card card-body">
                                        {props.children}
                                </div>
                        </div>

                </div>
        );
}

export default Collapse;