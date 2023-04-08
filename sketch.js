let locations = [];
let totalLocations = 10;
let bestEver;
let recordDistance = 0;

let values = [0, 1, 2, 3,4,5];
function setup() {
    createCanvas(innerWidth, innerHeight);
    // put setup code here
    // for (let i = 0; i < totalLocations; i++) {
    //     let vector = createVector(random(width), random(height));
    //     locations[i] = vector;
    // }

    // let d = calculateDistance(locations);
    // recordDistance = d;
    // bestEver = locations.slice()
}

function draw() {
    background("black");
    console.log(values);

    let largestI = -1;
    for (let i = 0; i < values.length; i++) {
        if (values[i] < values[i + 1]) {
            largestI = i;
        }
    }
    if (largestI == -1) {
        noLoop();
        console.log("done");
    }
    let largestJ = -1;
    for (let j = 0; j < values.length; j++) {
        if (values[largestI] < values[j]) {
            largestJ = j;
        }
    }
    swap(values, largestI, largestJ);

    // let len = values.length - largestI - 1
    let endArray = values.splice(largestI + 1);
    endArray.reverse();
    values = values.concat(endArray);

    textSize(64)
    let s = ''
    for(let i = 0; i < values.length; i++){
        s+=values[i]
    }
    fill(255)
    text(s, 20, height/2)

    // put drawing code here
    // fill(255);
    // for (let i = 0; i < locations.length; i++) {
    //     ellipse(locations[i].x, locations[i].y, 10, 10);
    // }

    // stroke(255);
    // strokeWeight(2);
    // noFill();
    // beginShape();
    // for (let i = 0; i < locations.length; i++) {
    //     vertex(locations[i].x, locations[i].y);
    // }
    // endShape();

    // stroke("red");
    // strokeWeight(2);
    // noFill();
    // beginShape();
    // for (let i = 0; i < bestEver.length; i++) {
    //     vertex(bestEver[i].x, bestEver[i].y);
    // }
    // endShape();

    // let i = floor(random(locations.length));
    // let j = floor(random(locations.length));
    // swap(locations, i, j);

    // let d = calculateDistance(locations);
    // if (d < recordDistance) {
    //     recordDistance = d;
    // 	bestEver = locations.slice()
    //     console.log(recordDistance);
    // }
}

function swap(arr, i, j) {
    let temp = arr[i];
    arr[i] = arr[j];
    arr[j] = temp;
}

function calculateDistance(points) {
    let sum = 0;

    for (let i = 0; i < points.length - 1; i++) {
        let d = dist(
            points[i].x,
            points[i].y,
            points[i + 1].x,
            points[i + 1].y
        );
        sum += d;
    }
    return sum;
}
