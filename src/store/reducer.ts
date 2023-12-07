import * as actionTypes from "./actionTypes"

const initialState: ProductState = {
  products:{
    data:[],
    keyword:"",
  }
}

const reducer = (
  state: ProductState = initialState,
  action: ProductAction
): ProductState => {
  const { type, payload } = action;
  console.log(payload);
  switch (type) {
    case actionTypes.GET_PRODUCT_REQUEST:
      return {
        ...state,
      }
      case actionTypes.GET_PRODUCT_SUCCESS:
        return {
          ...state,
          products: payload,
        }
        case actionTypes.GET_PRODUCT_FAILURE:
          return {
            ...state,
          }
    default:
      return state;
  }
}

export default reducer