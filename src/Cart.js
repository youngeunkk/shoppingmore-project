function Cart(props) {

  let [optionDataLists] = [props.optionDataLists];

  const handleBuy = () => {
    let sum = 0;
    for (let i = 0; i < optionDataLists.length; i++) {
      sum += optionDataLists[i].price;
    }
    console.log(sum)
  }

  return (
    <div className="cart">
      <table>
        <thead>
          <tr>
            <th>번호</th>
            <th>상품명</th>
            <th>사이즈</th>
            <th>가격</th>
            <th>수량</th>
          </tr>
        </thead>
        <tbody>

          {
            optionDataLists.map(function (a, i) {

              return (
                <tr key={i}>
                  <td>{i + 1}</td>
                  <td>{optionDataLists[i].title}</td>
                  <td>{optionDataLists[i].size}</td>
                  <td>{optionDataLists[i].price}</td>
                  <td>{optionDataLists[i].count}</td>
                </tr>

              )
            })}
        </tbody>
      </table>
      <div className="buyarea">
          <button type="button" id="buy" onClick={handleBuy}>바로 구매하기</button>
        </div>
    </div>
  )
}

export default Cart;