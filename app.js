console.log("Hello World!\n==========\n");

// Exercise 1 Section
console.log("EXERCISE 1:\n==========\n");

function printOdds(count){
        if (count > 0){
            for(let i = 0; i < count; i++){
                if(i % 2 != 0){
                    console.log(i);
                }
            }
        }
        else{
            for(let i = count; i < 0; i++){
                if(i % 2 != 0){
                    console.log(i);
                }
            }
        }
    }
    
    printOdds(10);
    printOdds(-10);

// Exercise 2 Section
console.log("EXERCISE 2:\n==========\n");


function checkAge(userName,age){

    let aboveSixteen = `Congrats ${userName}, you can drive!`;
    let belowSixteen = `Sorry ${userName}, you have to wait until you are 16.`;

    if (age >= 16){
        console.log(aboveSixteen);
    }
    else{
        console.log(belowSixteen);
    }
}
    checkAge(`Joe`,12);
    checkAge(`jay`,20);

// Exercise 3 Section
console.log("EXERCISE 3:\n==========\n");

function whichQuadrant(x,y){
    
    if(x == 0 && y != 0){
        console.log(`(${x},${y}) lies on the Y axis.`);
    }
    if( y == 0 && x != 0){
        console.log(`(${x},${y}) lies on the X axis.`);
    }
    if(x > 0 && y > 0){
        console.log(`(${x},${y}) is in quadrant 1.`);
    }
    if(x > 0 && y < 0){
        console.log(`(${x},${y}) is in quadrant 4.`);
    }
    if(x < 0 && y > 0){
        console.log(`(${x},${y}) is in quadrant 2.`);
    }
    if(x < 0 && y < 0){
        console.log(`(${x},${y}) is in quadrant 3.`);
    }
    if(x == 0 && y == 0){
        console.log(`(${x},${y}) is at the origin.`)
    }
}

whichQuadrant(1,0);
whichQuadrant(0,1);
whichQuadrant(-1,1);
whichQuadrant(1,-1);
whichQuadrant(1,1);
whichQuadrant(-1,-1);
whichQuadrant(0,0);

// Exercise 4 Section
console.log("EXERCISE 4:\n==========\n");

function typeOfTriangle(a,b,c){
    let numbers = [a,b,c];
    let sorted = numbers.sort((x,y) => x-y);

    let x = sorted[0];
    let y = sorted[1];
    let z = sorted[2];

    if(x+y>z){
        if( x == y && x == z){
            console.log(`(${numbers}) This is an equalateral triangle.`)
        }
        if( x == y && y !=z || x!= y && y == z){
            console.log(`(${numbers}) This is an isoceles triangle.`)
        }
        if(x < y && y !=z){
            console.log(`(${numbers}) This is a scalene triangle.`)
        }
    }
    else{
        console.log(`(${numbers}) This is not a triangle.`)
    }

}

typeOfTriangle(1,2,3)
typeOfTriangle(3,3,3)
typeOfTriangle(4,5,6)
typeOfTriangle(2,3,3)
typeOfTriangle(5,4,9)
typeOfTriangle(0,1,3)
typeOfTriangle(0,0,3)
typeOfTriangle(0,0,0)

// Exercise 5 Section
console.log("EXERCISE 5:\n==========\n");

function dataPlanStatus(planLimit, day, usage){

//planlimit/30 = daily average usage
//day * daily average usage = max amount used by that day == a
//usage / day = amount that user has used up to that day == b
// if a > b then they are staying below the plan which is good
// if a < b they are exceeding the plan, need to upgrade
// if a == b then they are at the plans max

let planDailyAverage = planLimit/30;
let planMaxAtDay = planDailyAverage * day;
let userDailyAverage = usage/day;
let planMaxRound = Math.round(planMaxAtDay * 100)/100;
let planDailyRound = Math.round(planDailyAverage * 100)/100;
let userRound = Math.round(userDailyAverage * 100)/100;
let difference = usage - planMaxRound;
let estimate = userRound * 30;


if(planDailyAverage > userDailyAverage){
    console.log(`As of the ${day} day of 30, you have used ${usage}gb of data out of ${planLimit}gb.`)
    console.log(`At day ${day}, your plans average should total to ${planMaxRound}gb. This is ${-difference}gb under.`)
    console.log(`your daily average usage is ${userRound}gb.`)
    console.log(`You are under the max daily average of ${planDailyRound}gb`)
    console.log(`At this rate you will use ${estimate}gb by the end of the 30 days.`)
    console.log(`You can downgrade your plan to avoid wasting data.`)
}

if(planDailyAverage < userDailyAverage){
    console.log(`As of the ${day} day of 30, you have used ${usage}gb of data out of ${planLimit}gb.`)
    console.log(`At day ${day}, your plans average should total to ${planMaxRound}gb, This is ${difference}gb over.`)
    console.log(`your daily average usage is ${userRound}gb.`)
    console.log(`You are over the max daily average of ${planDailyRound}gb.`)
    console.log(`At this rate you will use ${estimate}gb by the end of the 30 days.`)
    console.log(`You should upgrade your plan to avoid running out of data.`)
}

if(planDailyAverage == userDailyAverage){
    console.log(`As of the ${day} day of 30, you have used ${usage}gb of data out of ${planLimit}gb.`)
    console.log(`At day ${day}, your plans average should total to ${planMaxRound}gb.`)
    console.log(`your daily average usage is ${userRound}gb.`)
    console.log(`You are at the max daily average of ${planDailyRound}gb.`)
    console.log(`At this rate you will use ${estimate}gb by the end of the 30 days.`)
    console.log(`consider upgrading plan to avoid going over.`)
}
}

dataPlanStatus(100,5,12);
console.log(`----------`)

dataPlanStatus(100,15,50);
console.log(`----------`)

dataPlanStatus(100,17,80);
console.log(`----------`)