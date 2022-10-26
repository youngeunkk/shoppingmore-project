import { useParams } from 'react-router-dom';
import data from './Topdata.js';
import { useState } from 'react';
import standardSize from '../size.png';

function Topdetail() {

    const {id} = useParams();

    const [top] = useState(data);

    const optionLists = ["S", "M", "L", "XL"];
    const [selectedLists, setSelectedLists] = useState([]);

    const handleSelect = e => {
        let copy = [...selectedLists];
        copy.push(e.target.value);
        setSelectedLists(copy);
    }

    return (
        <div className='detail'>
            <img src={'https://github.com/youngeunkk/shoppingmore-project/blob/main/src/top/img/' + id +'.jpg?raw=true'} 
                alt="TopProduct" width="30%" />
            <h3>{top[id].title}</h3>
            <h3>{top[id].price}</h3>
            <br></br>

                <select onChange={handleSelect}>
                    {optionLists.map((item)=> (
                        <option value={item} key={item}>{item}</option>
                    ))}
                </select>
                <br></br>
                {selectedLists.map(function(e,i){
                    return (
                        <div className="selectedLists" key={i}>
                            {selectedLists[i]} size - {top[id].title} {top[id].price} 수량 : 1
                            <button type='button'>➕</button> 
                            <button type='button'>❌</button>
                        </div>
                    )
                })}    
            <button type="button" id='buy'>바로 구매하기</button>
            <button type="button" id='cart'>장바구니</button>
            <br></br>
            <img src={'https://github.com/youngeunkk/shoppingmore-project/blob/main/src/top/detailimg/' + id +'.jpg?raw=true'} alt="detail" width="40%"/>
            <br></br>
            <img src={standardSize} width="60%" alt="standard size"/>
        </div>
    )
}

export default Topdetail;