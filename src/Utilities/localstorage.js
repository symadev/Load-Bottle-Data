const getStoredCart = ()=>{
    const storedCartString = localStorage.getItem('cart');


if(storedCartString){
 return JSON.parse(storedCartString)
}
return [];
}


const saveCartls = cart=>{
    const cartStringified = JSON.stringify(cart);
    localStorage.setItem('cart', cartStringified);
}
// cart (যা একটি Array/Object হতে পারে) সেটিকে String-এ পরিবর্তন করা হয়েছে,
//  কারণ localStorage শুধুমাত্র String সংরক্ষণ করতে পারে।




//here we check if the cart is exists in localstorage

const addTols = id =>{
    const cart = getStoredCart();

    cart.push(id);
    //save to localstorage
    saveCartls(cart);
}
export{addTols};