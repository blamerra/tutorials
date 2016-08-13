/**
 * Created by raul on 8/10/2016.
 */
function placeOrder(orderNumber){
    console.log ("Customer Number", orderNumber);

    cookAndDeliverFood(function(){
        console.log("Delivered order:", orderNumber);
    });

}

function cookAndDeliverFood(callback){
    setTimeout(callback, 5000);
}

placeOrder(1);
placeOrder(2);
placeOrder(3);
placeOrder(4);
placeOrder(5);