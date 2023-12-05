// interface IProduct {
//    id:number,
//    name:string,
//    desc:string
//   }
  
  type ProductState = {
    products:{
      data:any[],
      keyword:string
    },
    
  }
  
  type ProductAction = {
    type: string
    payload: IProduct
  }
  
  type DispatchType = (args: ProductAction) => ProductAction