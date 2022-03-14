function buyMe(p_id){
    let cart = getCookie("cart")
    if (!cart){
        cart = [{"pid":p_id}]
    }else{
        cart = JSON.parse(cart)
        cart.push({"pid":p_id, "Qty":1})
    }
    setCookie("cart", JSON.stringify(cart))
}
