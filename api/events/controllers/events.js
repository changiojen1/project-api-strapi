'use strict';

/**
 * Read the documentation (https://strapi.io/documentation/developer-docs/latest/development/backend-customization.html#core-controllers)
 * to customize this controller
 */

module.exports = {
    homepage: async (ctx) => {
        let entities;
        try{
            entities = await strapi.services.category.find({
                _sort: "cid:asc"});
            console.log("entities1",entities);

            return await ctx.render("`crown2_xx`",{
                data:entities,
                title:"Crown Clothing 2021",
            })
        }catch(err){
            console.log(err);
        }
    }

};
