"use strict";
const score = [];
const names = [];
function identityOne(val) {
    return val;
}
function identityTwo(val) {
    return val;
}
function identityThree(val) {
    return val;
}
identityThree(true);
function identityFour(val) {
    return val;
}
function identityFive(val) {
    // let sac: number[] = [1, 2, 3, 4];
    return val[4];
}
function lessData(val) {
    return 3;
}
const moreData = (val) => {
    return val[3];
};
