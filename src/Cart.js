function Cart(props) {

  let [optionDataLists] = [props.optionDataLists];

  return (
    <div className="cart">
      <table>
        <thead>
          <tr>
            <th>번호</th>
            <th>상품명</th>
            <th>사이즈</th>
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
    </div>
  )
}

export default Cart;