import { useParams } from 'react-router-dom';
import data from './Topdata.js';
import { useState } from 'react';
import standardSize from '../size.png';

function Topdetail() {

    const {id} = useParams();

    const [top] = useState(data);

    const optionLists = ["S", "M", "L", "XL"];
    const [selectedLists, setSelectedLists] = useState([]);

    const [count, setCount] = useState([1,1,1,1]);

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
                {selectedLists.slice(0,4).map(function(a,i) {

                    let set = new Set(selectedLists);
                    let newSelectedLists = [...set];

                    return (

                        <div className="selectedLists" key={i}>
                            {newSelectedLists[i]} size - {top[id].title} {Number(top[id].price)*Number(count[i])} 수량 : {count[i]}
                            <button type='button' name="add" 
                            onClick={()=>{
                                let copy = [...count];
                                copy[i]++;
                                setCount(copy);
                            }}>➕</button>&nbsp;

                            <button type='button' name="sub"
                            onClick={()=>{
                                let copy = [...count];
                                copy[i] === 1 ? alert('최소 주문수량은 1개입니다.') :
                                copy[i]--;
                                setCount(copy);}}>➖</button>&nbsp;

                            <button type='button' name="delete"
                            onClick={()=>{
                                let copy = [...newSelectedLists];
                                copy.splice(i, 1);
                                setSelectedLists(copy);
                            }}>❌</button>
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