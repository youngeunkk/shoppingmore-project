

function Cart(props) {

    let [optionDataLists] = [props.optionDataLists];
  
    return (
      <div className='cart'>
        <h1>{optionDataLists[0].title}</h1>
      </div>
    )
  }
  
  export default Cart;