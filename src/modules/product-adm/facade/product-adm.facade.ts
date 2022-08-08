import UsecaseInterface from "../../@shared/usecase/usecase.interface";
import ProductAdmFacadeInterface, { AddProductFacadeInputDTO, CheckStockFacadaInputDTO, CheckStockFacadaOutputDTO } from "./product-adm.interface";

export interface UsecaseProps {
  addUsecase: UsecaseInterface;
  checkStockUsecase: UsecaseInterface;
}

export default class ProductAdmFacade implements ProductAdmFacadeInterface{
  private _addUsecase: UsecaseInterface;
  private _checkStockUsecase: UsecaseInterface;

  constructor(usecaseProps: UsecaseProps) {
    this._addUsecase = usecaseProps.addUsecase;
    this._checkStockUsecase = usecaseProps.checkStockUsecase;
  }

  addProduct(input: AddProductFacadeInputDTO): Promise<void> {
    return this._addUsecase.execute(input);
    // due to the facade DTO is equal to the usecase DTO
    // othewise, there would be a DTO transformation
  }
  
  checkStock(input: CheckStockFacadaInputDTO): Promise<CheckStockFacadaOutputDTO> {
    return this._checkStockUsecase.execute(input);
    // due to the facade DTO is equal to the usecase DTO
    // othewise, there would be a DTO transformation
  }
}
