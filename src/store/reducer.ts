import * as actionTypes from "./actionTypes"

const initialState: ProductState = {
  products:{
    data:[],
    keyword:""
  }
}

const reducer = (
  state: ProductState = initialState,
  action: ProductAction
): ProductState => {
  const { type, payload } = action;
  console.log(payload);
  switch (type) {
    case actionTypes.ADD_PRODUCT:

      return {
        ...state,
        products: payload,
      }
    default:
      return state;
  }
}

export default reducer