import { useParams } from 'react-router-dom';
import data from './Mendata.js';
import { useState } from 'react';

function Mendetail() {

    const {id} = useParams();

    const [men] = useState(data);

    return (
        <div className='detail'>
            <img src={'https://github.com/youngeunkk/shoppingmore-project/blob/main/src/men/img/' + id +'.jpg?raw=true'} 
                alt="MenProduct" width="30%" />
            <h3>{men[id].title}</h3>
            <h3>{men[id].price}</h3>
            <img src={'https://image.musinsa.com/images/prd_img/2022092218100400000079174.jpg'} alt="detail" width="40%"/>
        </div>
    )
}

export default Mendetail;