'use strict';

/**
 * food-and-wellness service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::food-and-wellness.food-and-wellness');
