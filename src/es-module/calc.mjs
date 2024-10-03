const add = (a, b) => {
    return a + b;
} 

const multiply = () => {
    // 
}

const calculator = {
    addition: add,
    multiply,
};

// exoprt default => only one export in this module file
// export default add;
export default calculator;

// or
// export const add = (a, b) => {
//     return a + b;
// }

