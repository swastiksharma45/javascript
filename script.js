let price = [100,200,300,400,500];
for(let i=0; i<price.length; i++){
    let offer = price[i]/10;
    price[i] = price[i] - offer;
    console.log(price[i]);
}