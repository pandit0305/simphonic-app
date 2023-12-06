import * as actionTypes from "./actionTypes"

const initialState: ProductState = {
    data:[],
    keyword:"",
    isLoading:false,
    isError:false
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
        isLoading:true,
        isError:false
      }
      case actionTypes.GET_PRODUCT_SUCCESS:
        return {
          ...state,
          data: payload,
          isLoading:false,
          isError:false
        }
        case actionTypes.GET_PRODUCT_FAILURE:
          return {
            ...state,
            isLoading:false,
            isError:true
          }
    default:
      return state;
  }
}

export default reducer