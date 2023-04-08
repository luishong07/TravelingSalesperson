let locations = [];
let totalLocations = 4;
let bestEver;
let recordDistance = 0;
let count = 0
let totalPermutations 
// let values = [0, 1, 2, 3,4,5];
let order = [];
function setup() {
    createCanvas(innerWidth, innerHeight);
    for (let i = 0; i < totalLocations; i++) {
        let vector = createVector(random(width), random(height/2));
        locations[i] = vector;
        order[i] = i;
    }

    let d = calculateDistance(locations,order);
    recordDistance = d;
    bestEver = locations.slice();

    totalPermutations = factorial(totalLocations)
    console.log(totalPermutations)

}

function draw() {
    background("black");

    fill(255);
    for (let i = 0; i < locations.length; i++) {
        ellipse(locations[i].x, locations[i].y, 10, 10);
    }

    stroke(255);
    strokeWeight(2);
    noFill();
    beginShape();
    for (let i = 0; i < order.length; i++) {
        vertex(locations[i].x, locations[i].y);
    }
    endShape();

    translate(0, height / 2);
    stroke("red");
    strokeWeight(2);
    noFill();
    beginShape();
    for (let i = 0; i < order.length; i++) {
        let n = order[i];
        vertex(locations[n].x, locations[n].y);
    }
    endShape();



    let d = calculateDistance(locations, order);
    if (d < recordDistance) {
        recordDistance = d;
        bestEver = order.slice();
        // console.log(recordDistance);
    }

    textSize(32);
    // var s = '';
    // for (var i = 0; i < order.length; i++) {
    //   s += order[i];
    // }
    fill(255);
    var percent = 100 * (count / totalPermutations);
    text(nf(percent, 0, 2) + "% completed", 20, height / 2 - 50);
  
    nextOrder();
}

function swap(arr, i, j) {
    let temp = arr[i];
    arr[i] = arr[j];
    arr[j] = temp;
}

function calculateDistance(points,order) {
    let sum = 0;

    for (var i = 0; i < order.length - 1; i++) {
        var cityAIndex = order[i];
        var cityA = points[cityAIndex];
        var cityBIndex = order[i + 1];
        var cityB = points[cityBIndex];
        var d = dist(cityA.x, cityA.y, cityB.x, cityB.y);
        sum += d;
    }
    return sum;
}

function nextOrder() {
    count++
    let largestI = -1;
    for (let i = 0; i < order.length; i++) {
        if (order[i] < order[i + 1]) {
            largestI = i;
        }
    }
    if (largestI == -1) {
        noLoop();
        console.log("done");
    }

    let largestJ = -1;
    for (let j = 0; j < order.length; j++) {
        if (order[largestI] < order[j]) {
            largestJ = j;
        }
    }

    swap(order, largestI, largestJ);

    let endArray = order.splice(largestI + 1);
    endArray.reverse();
    order = order.concat(endArray);
}
function factorial(n) {
  if (n == 1) {
    return 1;
  } else {
    return n * factorial(n - 1);
  }
}