test("ture test", ()=> {
    let data = {
        id: "1",
            shop_name: "shop_name",
            product_name: "product_name",
            unit_price: "unit_price",
            unit_of_measure: "unit_of_measure",
            product_category: "product_category",
            product_description: "product_description"
      }
    expect(data.product_name).toBe("product_name");
})