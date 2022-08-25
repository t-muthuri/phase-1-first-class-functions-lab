// Code your solution in this file!
const drivers = ['Antonia', 'Nuru', 'Amari', 'Mo'];

function returnFirstTwoDrivers(){
    console.log (drivers.slice (0,2));
    return drivers.slice (0,2);
}

function returnLastTwoDrivers(){
    console.log (drivers.slice (2));
    return drivers.slice (2);
}

const selectingDrivers = [
    returnFirstTwoDrivers,
    returnLastTwoDrivers,
]

function createFareMultiplier(a){
    const fareMultiplier = function (b){
        return a*b;
    }
    return fareMultiplier;
}

function fareDoubler(c,d){
    const doubleFare = 2*10;
    return doubleFare;
}

function fareTripler (c,d){
    const tripleFare = 3*12;
    return tripleFare;
}

const selectDifferentDrivers = function (arrayOfDrivers, b){
    return b(arrayOfDrivers);
}