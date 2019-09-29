const btn = document.querySelector("#order-placed");
let order = document.querySelector("textarea");
const eatBtn = document.querySelectorAll("#eat-btn");
const burger = document.querySelectorAll(".requests .eat .card");
console.log(eatBtn);

btn.addEventListener("click", function(e) {
  e.preventDefault();
  orderInfo = { burger: order.value.trim() };
  const queryUrl = "/api/burgers";

  fetch(queryUrl, {
    method: "POST",
    body: JSON.stringify(orderInfo),
    headers: {
      "Content-type": "application/json"
    }
  }).then(function() {
    console.log("added new burger");
    location.reload();
  });
});
eatBtn.forEach(btn => {
  btn.addEventListener("click", function(e) {
    e.preventDefault();
    let info = { burger: e.target.parentNode.firstElementChild.innerText };
    const queryUrl = "/api/burgers/:id";
    fetch(queryUrl, {
      method: "PUT",
      body: JSON.stringify(info),
      headers: {
        "Content-type": "application/json"
      }
    }).then(function() {
      console.log("Yummy, that was delicious");
      location.reload();
    });
  });
});
