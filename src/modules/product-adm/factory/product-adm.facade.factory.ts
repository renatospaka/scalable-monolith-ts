import ProductAdmFacade from "../facade/product-adm.facade";
import ProductRepository from "../repository/product.repository";
import AddProductUsercase from "../usecase/add-product/add-product.usecase";
import CheckStockUsercase from "../usecase/check-stock/check-stock.usecase";

export default class ProductAdmFacadeFactory {
  static create() {
    const productRepository = new ProductRepository();
    const addProductUsecase = new AddProductUsercase(productRepository);
    const checkStockUsecase = new CheckStockUsercase(productRepository);
    const productFacade = new ProductAdmFacade({
      addUsecase: addProductUsecase,
      checkStockUsecase: checkStockUsecase,
    });

    return productFacade;
  }
}
