import { useState } from 'react';
import data from './Mendata.js';
import '../App.css';
import { Link } from 'react-router-dom';

function Men() {

    let [men] = useState(data);

    return (
        <>
        <div className='men'>
            {
                men.map(function(a,i){
                    return (
                        <div className="product" key={i} >
                            <Link to={'detail/' + i} style={{textDecoration: 'none'}}>
                            <img src={'https://github.com/youngeunkk/shoppingmore-project/blob/main/src/men/img/' + i +'.jpg?raw=true'} 
                                alt="MenProduct" width="80%" />
                            <h3>{men[i].title}</h3>
                            <p>{men[i].price}</p>
                            </Link>
                        </div>
                    )
                })
            }
        </div>
        </>
    )
}

export default Men;