import { useState } from 'react';
import data from './Topdata.js';
import '../App.css';
import { Link } from 'react-router-dom';

function Top() {

    let [top] = useState(data);

    return (
        <>
        <div className='top'>
            {
                top.map(function(a,i){
                    return (
                        <div className="product" key={i} >
                            <Link to={'detail/' + i} style={{textDecoration: 'none'}}>
                            <img src={'https://github.com/youngeunkk/shoppingmore-project/blob/main/src/top/img/' + i +'.jpg?raw=true'} 
                                alt="TopProduct" width="100%" />
                            <h3>{top[i].title}</h3>
                            <p>{top[i].price}</p>
                            </Link>
                        </div>
                    )
                })
            }
        </div>
        </>
    )
}

export default Top;