function FuncAddShop(value) {
    const data = {
        shop_name: value.shop_name,
        shop_description: value.shop_description,
        shop_category: value.shop_category
    }

    // if(data.store == "a"){
    //     data = {
    //         ...data,
    //         "the_best": true,
    //     }
    // }
    
    return data;
}

module.exports = FuncAddShop;