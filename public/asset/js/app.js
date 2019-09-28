const btn = document.querySelector("#order-placed");
let order = document.querySelector("textarea");

btn.addEventListener("click",function(e){
    e.preventDefault();
    orderInfo=order.value.trim();
    const queryUrl=`/api/burgers/${orderInfo}`

    fetch(queryUrl, {method: "POST"}).then(a=>a.json())
})








