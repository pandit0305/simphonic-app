import * as actionTypes from "./actionTypes"

export function addProduct(payload:{data:any[],keyword:string}) {
  const action: ProductAction = {
    type: actionTypes.ADD_PRODUCT,
    payload,
  }

  return simulateHttpRequest(action)
}

export function removeProduct(payload:{data:any[],keyword:string}) {
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
    }, 500)
  }
}