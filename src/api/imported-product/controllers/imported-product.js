"use strict";

/**
 * imported-product controller
 */

const { createCoreController } = require("@strapi/strapi").factories;

module.exports = createCoreController(
  "api::imported-product.imported-product",
  ({ strapi }) => ({
    importProducts: async (ctx, next) => {
      return await strapi.db.transaction(async (transacting) => {
        try {
          const { id, isAdmin = false } = await strapi.plugins[
            "users-permissions"
          ].services.jwt.getToken(ctx);
          //get product IDS
          let product_ids = ctx.request.body.products;
          //search all products //if exists //move forward
          product_ids = product_ids.map((prod) => prod.id);

          const products = await strapi
            .query("api::product.product")
            .findMany({ where: { id: { $in: product_ids } } });
          //check if product_ids and response products have same ids
          const productIdsInProducts = products.map((product) => product.id);

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

          for (const it of product_ids) {
            await strapi.query("api::imported-product.imported-product").create(
              {
                data: { product: it, reseller: id },
              },
              { transaction: transacting }
            );
          }
          await transacting.commit();
          return ctx.send({ message: `Products Imported Successfully` }, 200);
        } catch (err) {
          await transacting.rollback();
          console.log(err);
          return ctx.send(err, 400);
        }
      });
    },
  })
);
