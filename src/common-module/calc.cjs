const add = (a, b) => {
    return a + b;
} 

// make add method public
// 2 possibilites
// module.exports = add;
module.exports = {
    addition: add
};