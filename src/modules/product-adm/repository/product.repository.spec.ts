import { Sequelize } from "sequelize-typescript";
import Id from "../../@shared/domain/valueobject/id.valueobject";
import Product from "../domain/product.entity";
import ProductModel from "./product.model";
import ProductRepository from "./product.repository";

describe("Product Repository test", () => {
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

  it("should create a product", async () => {
    const productProps = {
      id: new Id("1"),
      name: "Product 1",
      description: "Product 1 description",
      purchasePrice: 100,
      stock: 10,
    };
    const product = new Product(productProps);

    const productRepository = new ProductRepository();
    await productRepository.add(product)

    const productModel = await ProductModel.findOne({ where: { id: productProps.id.id } });

    expect(productProps.id.id).toEqual(productModel.id);
    expect(productProps.name).toEqual(productModel.name);
    expect(productProps.description).toEqual(productModel.description);
    expect(productProps.purchasePrice).toEqual(productModel.purchasePrice);
    expect(productProps.stock).toEqual(productModel.stock);
  });
});
