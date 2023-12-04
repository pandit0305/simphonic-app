interface IProduct {
    id: number
    title: string
    desc: string
  }
  
  type ProductState = {
    products: IProduct[]
  }
  
  type ProductAction = {
    type: string
    product: IProduct
  }
  
  type DispatchType = (args: ProductAction) => ProductAction