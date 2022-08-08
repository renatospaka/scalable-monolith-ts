export default interface ProductAdmFacadeInterface {
  addProduct(input: AddProductFacadeInputDTO): Promise<void>;
  checkStock(input: CheckStockFacadaInputDTO): Promise<CheckStockFacadaOutputDTO>;
}

export interface AddProductFacadeInputDTO {
  id?: string;
  name: string;
  description: string;
  purchasePrice: number;
  stock: number;
}

export interface CheckStockFacadaInputDTO {
  productId: string;
}

export interface CheckStockFacadaOutputDTO {
  productId: string;
  stock: number;
}
