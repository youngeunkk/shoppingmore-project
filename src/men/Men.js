import { useState } from 'react';
import data from './Mendata.js';
import '../App.css';

function Men() {

    let [men] = useState(data);

    /**
     * <div className="product">
                <img src={basicKnit} alt="basicKnit" width="100%"/>
                <h2>{men[0].title}</h2>
                <p>{men[0].price}</p>
            </div>
     */

    return (
        <div className='men'>
            {
                men.map(function(a,i){
                    return (
                        <div className="product">
                            <img src={'https://github.com/youngeunkk/shoppingmore-project/blob/main/src/men/img/'+ i +'.jpg?raw=true'} alt="MenProduct" width="80%" />
                            <h2>{men[i].title}</h2>
                            <p>{men[i].price}</p>
                        </div>
                    )
                })
            }
        </div>
    )
}

export default Men;