"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var user = {
    name: 'Edith Martin',
    email: 'jokzi@enju.zm',
    isActive: true,
};
function createUser(_a) {
    var string = _a.name, number = _a.isPaid;
}
var newUser = {
    name: 'sachin',
    isPaid: false,
    email: 'sipeivu@kurep.tl',
};
createUser(newUser);
function createCourse() {
    return { name: 'madhu', price: 500 };
}
function checkout(_a) {
    var name = _a.name, price = _a.price, email = _a.email, isPaid = _a.isPaid;
    // Function body
}
checkout({
    name: 'sachin',
    price: 100,
    email: 'sac@gmail.com',
    isPaid: true,
});
