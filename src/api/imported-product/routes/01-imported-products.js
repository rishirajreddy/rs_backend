module.exports = {
  routes: [
    {
      method: "POST",
      path: "/reseller/products/import",
      handler: "imported-product.importProducts",
      config: {
        policies: [],
        middlewares: [], //query validator
      },
    },
  ],
};
