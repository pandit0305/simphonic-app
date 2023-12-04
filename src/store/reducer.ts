import * as actionTypes from "./actionTypes"

const initialState: ProductState = {
  products: [
    {
      id: 1,
      title: "post 1",
      desc:"Quisque cursus, metus vitae pharetra Nam libero tempore, cum soluta nobis est eligendi",
    },
]
}

const reducer = (
    state: ProductState = initialState,
    action: ProductAction
  ): ProductState => {
    switch (action.type) {
      case actionTypes.ADD_PRODUCT:
        const newArticle: IProduct = {
          id: Math.random(), // not really unique
          title: action.product.title,
          desc: action.product.desc,
        }
        return {
          ...state,
          products: state.products.concat(newArticle),
        }
      case actionTypes.REMOVE_PRODUCT:
        const updatedProducts: IProduct[] = state.products.filter(
            (          product: { id: any }) => product.id !== action.product.id
        )
        return {
          ...state,
          products: updatedProducts,
        }
    }
    return state
  }
  
  export default reducer