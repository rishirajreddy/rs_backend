"use strict";

/**
 * address controller
 */

const { createCoreController } = require("@strapi/strapi").factories;

module.exports = createCoreController("api::address.address", ({ strapi }) => ({
  //add address
  async addAddress(ctx, next) {
    var userInfo;
    var adminInfo;
    var userID;
    var {
      name,
      houseNumber,
      addressLine1,
      pincode,
      city,
      area,
      state,
      country,
      addressLine2,
      user,
    } = ctx.request.body;
    console.log(ctx.request.body);
    try {
      if (
        ctx.request &&
        ctx.request.header &&
        ctx.request.header.authorization
      ) {
        const { id, isAdmin = false } = await strapi.plugins[
          "users-permissions"
        ].services.jwt.getToken(ctx);

        adminInfo = await strapi
          .query("plugin::users-permissions.user")
          .findOne({
            where: {
              id: id,
            },
            populate: { role: true },
          });

        // console.log(adminInfo);
        if (adminInfo.role.name === "Admin") {
          userID = user;
        } else {
          userID = id;
        }
      }
      console.log(userID);
      const entry = await strapi.entityService.create("api::address.address", {
        data: {
          name: name,
          houseNumber: houseNumber,
          addressLine1: addressLine1,
          pincode: pincode,
          city: city,
          area: area,
          state: state,
          country: country,
          addressLine2: addressLine2,
          user: userID,
        },
      });
      // console.log(entry);
      return ctx.send(entry, 200);
    } catch (error) {
      console.log(error);
      return ctx.send(error, 400);
    }
  },

  //update address-
  async updateAddress(ctx, next) {
    try {
      const id = ctx.params.id;
      const address = ctx.request.body;
      const addressUpdate = await strapi.entityService.update(
        "api::address.address",
        id,
        {
          data: address,
        }
      );
      if (addressUpdate === null) {
        ctx.send({
          message: "Address not found",
        });
        return (ctx.response.status = 400);
      }
      return addressUpdate;
    } catch (err) {
      console.log(err);
      return err;
    }
  },

  //delete address
  async deleteAddress(ctx, next) {
    try {
      const id = ctx.params.id;
      const deleteAddressResp = await strapi.entityService.delete(
        "api::address.address",
        id
      );
      if (deleteAddressResp === null) {
        ctx.send({
          message: "Address not found",
        });
        return (ctx.response.status = 400);
      }
      return deleteAddressResp;
    } catch (err) {
      console.log(err);
      return err;
    }
  },
}));
