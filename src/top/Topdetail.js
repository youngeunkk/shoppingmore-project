import { useNavigate, useParams } from 'react-router-dom';
import data from './Topdata.js';
import { useState } from 'react';
import standardSize from '../size.png';

function Topdetail(props) {

    let [optionDataLists, setOptionDataLists] = useState(props.optionDataLists);

    let [buyDataLists, setBuyDataLists] = useState([]);

    const {id} = useParams();   
 
    const navigate = useNavigate();  

    const [top] = useState(data);  

    const optionLists = ["S", "M", "L", "XL"];


    const [selectedLists, setSelectedLists] = useState([]);

    const [count, setCount] = useState([1,1,1,1]);

    const handleSelect = (e, i) => {
        let copy = [...selectedLists];
        let newCount = [...count];
        copy.push(e.target.value);
        newCount[i] = 1;
        setSelectedLists(copy);
    }
    

    const onClickCart = () => {
        let copy = [...selectedLists];
        let newCount = [...count];
        let set = new Set(copy);
        let newSet = [...set];

        for (let i =0; i < newSet.length; i++) {
            optionDataLists.push({
                'size' : copy[i],
                'title' : top[id].title,
                'price' : Number(top[id].price)*Number(newCount[i]),
                'count' : newCount[i]
            })
        }

        setOptionDataLists(optionDataLists);

        optionDataLists.length === 0 ? alert('옵션을 선택해주세요!') : navigate('/cart')
    }

    const onClickBuy = () => {

        let copy = [...selectedLists];
        let newCount = [...count];
        let set = new Set(copy);
        let newSet = [...set];
        let newBuyData = [...buyDataLists];
        
        for (let i =0; i < newSet.length; i++) {
            newBuyData.push({
                'size' : copy[i],
                'title' : top[id].title,
                'price' : Number(top[id].price)*Number(newCount[i]),
                'count' : newCount[i]
            })
        }

        setBuyDataLists(newBuyData);

        let sum = 0;

        for (let i = 0; i < newBuyData.length; i++) {
            sum += newBuyData[i].price;
          } 
          buyDataLists.length ===  0 ? alert('옵션을 선택해주세요!') : console.log(sum);

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
                            
                            {newSelectedLists[i]} size - {top[id].title} {Number(top[id].price)*Number(count[i])} 
                            수량 : {count[i]} 
                            
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
                                let newCount = [...count];
                                copy.splice(i, 1);

                                newCount[i] = newCount[i+1];
                                newCount[i+1] = newCount[i+2];
                                newCount[i+2] = newCount[i+3];

                                setCount(newCount);

                                setSelectedLists(copy);
                            }}>❌</button>
                        </div>
                    )
                })}
            
            <button type="button" id='buy'  onClick={onClickBuy}>바로 구매하기</button>
            <button type="button" id='cart' onClick={onClickCart}>장바구니</button>
            <br></br>
            <img src={'https://github.com/youngeunkk/shoppingmore-project/blob/main/src/top/detailimg/' + id +'.jpg?raw=true'} alt="detail" width="40%"/>
            <br></br>
            <img src={standardSize} width="60%" alt="standard size"/>
        </div>
    )
}

export default Topdetail;

export let optionDataLists;