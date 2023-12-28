'use strict';

/**
 * reseller-customer service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::reseller-customer.reseller-customer');
