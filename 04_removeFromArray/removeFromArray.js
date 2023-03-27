const removeFromArray = function(arr, ...values) {
    const newArray = [];

    arr.forEach((element) => {
        if (!values.includes(element)) {
            newArray.push(element);
        }
    });

    return newArray;
};

// Do not edit below this line
module.exports = removeFromArray;
