import ProductAdmFacade from "../facade/product-adm.facade";
import ProductRepository from "../repository/product.repository";
import AddProductUsercase from "../usecase/add-product/add-product.usecase";

export default class ProductAdmFacadeFactory {
  static create() {
    const productRepository = new ProductRepository();
    const addProductUsecase = new AddProductUsercase(productRepository);
    const productFacade = new ProductAdmFacade({
      addUsecase: addProductUsecase,
      checkStockUsecase: undefined,
    });

    return productFacade;
  }
}
