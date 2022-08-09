import { CheckStockFacadeInputDTO, CheckStockFacadeOutputDTO } from "../../facade/product-adm.interface";
import ProductGateway from "../../gateway/product.gateway";

export default class CheckStockUsercase {
  private _productRepository: ProductGateway;

  constructor(productRepository: ProductGateway) {
    this._productRepository = productRepository;
  }

  async execute(input: CheckStockFacadeInputDTO): Promise<CheckStockFacadeOutputDTO> {
    const result = await this._productRepository.find(input.productId);
    
    return {
      productId: result.id.id,
      stock: result.stock,
    };
  }
}
