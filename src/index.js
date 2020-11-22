import React from 'react';
import ReactDOM from 'react-dom';

import Card from './components/Card';
import Collapse from './components/Collapse';

const App=()=>{

        return(
            <div className="mt-4">
                   
                                <div className="card-group w-100 mt-4 mr-4 ml-4">
                                        <div className="col">
                                               
                                                        <Collapse href="collapseExample1" baslik="Gün Batımı">
                                                                <Card cardtitle="Gün Batımı" cardtext="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua." cardtime="2 gün önce" cardlink="https://picsum.photos/id/1026/200/300"/>
                                                        </Collapse>
                                                </div>
                                  
                                        
                                        <div className="col">
                                               
                                                        <Collapse href="collapseExample2" baslik="Köprü">
                                                                <Card cardtitle="Köprü" cardtext="Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa" cardtime="4 gün önce" cardlink="https://picsum.photos/id/134/200/300"/>
                                                        </Collapse>
                                               
                                        </div>
                                        
                                        <div className="col">
                                              
                                                        <Collapse href="collapseExample3" baslik="Denizler">
                                                                <Card  cardtitle="Denizler" cardtext="At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores. " cardtime="6 gün önce" cardlink="https://picsum.photos/id/147/200/300"/>
                                                        </Collapse>
                                                </div>
                                        </div>
                                    
                            

                    </div>
      
        );
}

ReactDOM.render(<App/>,document.getElementById('root'));