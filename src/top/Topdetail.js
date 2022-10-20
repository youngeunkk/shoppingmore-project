import { useParams } from 'react-router-dom';
import data from './Topdata.js';
import { useState } from 'react';

function Topdetail() {

    const {id} = useParams();

    const [top] = useState(data);

    return (
        <div className='detail'>
            <img src={'https://github.com/youngeunkk/shoppingmore-project/blob/main/src/top/img/' + id +'.jpg?raw=true'} 
                alt="TopProduct" width="30%" />
            <h3>{top[id].title}</h3>
            <h3>{top[id].price}</h3>
            <button type="button">바로 구매하기</button>
            <br></br>
            <img src={'https://github.com/youngeunkk/shoppingmore-project/blob/main/src/top/detailimg/' + id +'.jpg?raw=true'} alt="detail" width="40%"/>
        </div>
    )
}

export default Topdetail;