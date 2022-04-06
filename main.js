let button = document.getElementById("load-btn");
let app = document.getElementById("app");
let pVisitors = document.createElement("h3");
let pVisitorsEatPizza = document.createElement("h3");
let pWait = document.createElement("h4");
let count = 0;
let countEatPizza = 0;
let circle = document.createElement("div");
let div1 = document.createElement("div");
let div2 = document.createElement("div");
app.appendChild(pWait);
app.appendChild(div1);
app.appendChild(div2);
div1.className = "div1";
div2.className = "div2";
button.className = "";

function getVisitors(count, countEatPizza) {
  pVisitors.innerHTML = "How many people came to the party: " + count;
  pVisitorsEatPizza.innerHTML = "How many people eat pizza: " + countEatPizza;
}
getVisitors(count, countEatPizza);

function getData(data) {
  div1.appendChild(pVisitors);
  div2.appendChild(pVisitorsEatPizza);
  for (let dataIndex = 0; dataIndex < data.length; ++dataIndex) {
    const liCameToTheParty = document.createElement("p");
    if (data[dataIndex].eatsPizza === true) {
      countEatPizza += 1;
    }
    liCameToTheParty.appendChild(document.createTextNode(data[dataIndex].name));
    count += 1;
  }
  getLoading();
  return app;
}
function getLoading() {
  button.className = "";
  pWait.innerHTML = "";
  getVisitors(count, countEatPizza);
}
function load() {
  pWait.innerHTML = "waiting...";
  button.className = "loading";
  count = 0;
  countEatPizza = 0;
}

function getCircle(countEatPizza) {
  let visitors = countEatPizza;

}


document.getElementById("load-btn").addEventListener("click", function() {
  load();
  fetch("https://gp-js-test.herokuapp.com/pizza")
    .then(response => response.json())
    .then(function(data) {
      setTimeout(() => {
        console.log(data);
        getVisitors(count, countEatPizza);
        app.appendChild(circle);
        return getData(data.party);
      }, 1000);
    });
});