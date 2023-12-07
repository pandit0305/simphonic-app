import * as actionTypes from "./actionTypes"

export function addProduct(payload:{data:any[], keyword:string}) {
  const action: ProductAction = {
    type: actionTypes.GET_PRODUCT_SUCCESS,
    payload,
  }

  return simulateHttpRequest(action)
}

export function getProductRequest() {
  const action: ProductRequestAndFailure= {
    type: actionTypes.GET_PRODUCT_SUCCESS,
  }

}

export function getProductFailure() {
  const action: ProductRequestAndFailure= {
    type: actionTypes.GET_PRODUCT_FAILURE,
  }
}

export function removeProduct(payload:ProductState) {
  const action: ProductAction = {
    type: actionTypes.REMOVE_PRODUCT,
    payload,
  }
  return simulateHttpRequest(action)
}

export function simulateHttpRequest(action: ProductAction) {
  return (dispatch: DispatchType) => {
    setTimeout(() => {
      dispatch(action)
    },500)
  }
}