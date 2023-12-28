'use strict';

/**
 * imported-product service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::imported-product.imported-product');
