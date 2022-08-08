import { Sequelize } from "sequelize-typescript";
import ProductAdmFacadeFactory from "../factory/product-adm.facade.factory";
import ProductModel from "../repository/product.model";
import ProductRepository from "../repository/product.repository";
import AddProductUsercase from "../usecase/add-product/add-product.usecase";
import ProductAdmFacade from "./product-adm.facade";

describe("Product Adm Facada test", () => {
  let sequelize: Sequelize;

  beforeEach(async () => {
    sequelize = new Sequelize({
      dialect: "sqlite",
      storage: ":memory:",
      logging: false,
      sync: { force: true },
    });

    await sequelize.addModels([ProductModel]);
    await sequelize.sync();
  });

  afterEach(async () => {
    await sequelize.close();
  });

  it("should create a product",async () => {
    // const productRepository = new ProductRepository();
    // const addProductUsecase = new AddProductUsercase(productRepository);
    // const productFacade = new ProductAdmFacade({
    //   addUsecase: addProductUsecase,
    //   checkStockUsecase: undefined,
    // });
    const productFacade = ProductAdmFacadeFactory.create();

    const input = {
      id: "1",
      name: "Product 1",
      description: "Product 1 description",
      purchasePrice: 100,
      stock: 10,
    };
    await productFacade.addProduct(input);

    const productModel = await ProductModel.findOne({ where: { id: "1" } });
    expect(productModel).toBeDefined();
    expect(productModel.id).toEqual("1");
    expect(productModel.name).toEqual("Product 1");
    expect(productModel.description).toEqual("Product 1 description");
    expect(productModel.purchasePrice).toEqual(100);
    expect(productModel.stock).toEqual(10);
  });
});
