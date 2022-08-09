import Id from "../../../@shared/domain/valueobject/id.valueobject";
import ProductModel from "../../repository/product.model";
// import AddProductUsercase from "../add-product/add-product.usecase";
import CheckStockUsercase from "./check-stock.usecase";

const MockRepository = () => {
  return {
    add: jest.fn(),
    find: jest.fn(),
  };
};

describe("Check Stock usecase unit test", () => {
  it("should check stock of a product", async () => {
    await ProductModel.create({
      id: new Id("1"),
      name: "Product 1",
      description: "Product 1 description",
      purchasePrice: 100,
      stock: 10,
    });

    // const addProductUsecase = new AddProductUsercase(productRepository);
    // const inputAdd = {
    //   name: "Product 1",
    //   description: "Product 1 description",
    //   purchasePrice: 100,
    //   stock: 10,
    // };
    // const result = await addProductUsecase.execute(inputAdd);
    
    const productRepository = MockRepository();
    const checkStockUsecase = new CheckStockUsercase(productRepository);
    const inputStock = {
      productId: "1",
    };
    const productCheckStock = await checkStockUsecase.execute(inputStock);

    expect(productCheckStock).toBeDefined();
    expect(productCheckStock.productId).toEqual("1");
    expect(productCheckStock.stock).toEqual("10");
  });
});
