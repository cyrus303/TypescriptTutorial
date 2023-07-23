"use strict";
function detectType(val) {
    if (typeof val === 'string') {
        return val.toLowerCase();
    }
    return val + 3;
}
function provideId(id) {
    if (!id) {
        console.log('please provide ID');
        return;
    }
    id.toLowerCase();
}
function checkAdminAccount(account) {
    if ('isAdmin' in account) {
        return account.isAdmin;
    }
}
