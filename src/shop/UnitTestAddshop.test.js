const FuncAddShop = require("./FuncAddShop");



test("ture test", ()=> {
    let data = {
        shop_name: "com",
        shop_description: "auisdjf",
        shop_category: "รายละเอียด"
      }
    expect(FuncAddShop(data).shop_description).toBe("auisdjf");
})


test("local",()=>{
  localStorage.setItem("c","c")

  expect(localStorage.getItem("c")).toBe("c")
})