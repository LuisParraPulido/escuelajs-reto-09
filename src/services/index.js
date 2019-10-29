const MongoLib = require('../lib/mongo')

class ProductService {
  constructor() {
    this.collection = 'products';
    this.mongoDB = new MongoLib();
  }
  async getProducts({ price }) {
    const query = price && { price: { $in: price }};
    const products = await this.mongoDB.getAll(this.collection, query);
    return products || [];
  }

  async getProduct({ productId }) {
    const product = await this.mongoDB.get(this.collection, productId);
    return product || {};
  }

  async createProduct({ product }) {
    const createProductId = await this.mongoDB.create(this.collection, product);
    return createProductId;
  }
  async updateproduct({ productId, product } = {}) {
    const updateProductId = await this.mongoDB.update(this.collection, productId, product);
    return updateProductId;
  }

  async deleteproduct({ productId}) {
    const deleteProductId = this.mongoDB.delete(this.collection, productId);
    return deleteProductId;
  }
}

module.exports = ProductService;
