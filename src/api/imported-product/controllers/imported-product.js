"use strict";

/**
 * imported-product controller
 */

const { createCoreController } = require("@strapi/strapi").factories;

module.exports = createCoreController(
  "api::imported-product.imported-product",
  ({ strapi }) => ({
    importProducts: async (ctx, next) => {
      try {
        //get product IDS
        const product_ids = ctx.request.body.products;
        //search all products //if exists //move forward

        const products = await strapi
          .query("api::product.product")
          .findMany({ where: { id: { $in: product_ids } } });

        //check if product_ids and response products have same ids
        const productIdsInProducts = products.map((product) =>
          product.id.toString()
        );

        // Filter product_ids array for IDs not present in products
        const filteredIds = product_ids.filter(
          (id) => !productIdsInProducts.includes(id)
        );

        if (filteredIds.length > 0) {
          return ctx.send(
            {
              message: `No Products with the given IDs: ${filteredIds}`,
            },
            400
          );
        }

        const data = products.map((prod) => {
          let obj = {
            product: prod.id,
            reseller: 10,
            reselling_price: "",
            reseller_margin: "",
          };
        });
        console.log(data);
        //import products
        // const createImport = await strapi
        //   .query("api::imported-product.imported-product")
        //   .createMany({ data });
        // console.log(invalid_ids);
        return ctx.send(products, 200);
      } catch (err) {
        console.log(err);
        return ctx.send(err, 400);
      }
    },
  })
);
