// interface IProduct {
//    id:number,
//    name:string,
//    desc:string
//   }
  
  type ProductState = {
      data:any[],
      keyword:string,
  }
  
  type ProductAction = {
    type: string
    payload: IProduct
  }
  type ProductRequestAndFailure ={
    type:string
  }
  type DispatchType = (args: ProductAction) => ProductAction