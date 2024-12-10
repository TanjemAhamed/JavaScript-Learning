// List of default array
let arr = [45, "BJIT Limited", null, 20.63, undefined, function (){}, 'abc', [1,5,6], true, {}, false, ];

// Creating a function to count the occurence of each data type in the array 
function countDataType(arr) {
    let count = {
        number: 0,
        string: 0,
        null: 0,
        float: 0,
        undefined: 0,
        function: 0,
        boolean: 0,
        object: 0,
        array: 0
    };
    arr.map((data) => {
        if (typeof data === 'number') {
            count.number++;
        } else if (typeof data === 'string') {
            count.string++;
        } else if (data === null) {
            count.null++;
        } else if (typeof data === 'function') {
            count.function++;
        } else if (typeof data === 'boolean') {
            count.boolean++;
        } else if (typeof data === 'object') {
            if (Array.isArray(data)) {
                count.array++;
            } else {
                count.object++;
            }
        } else if (typeof data === 'undefined') {
            count.undefined++;
        } 
    });
    return count;
}

console.log(countDataType(arr));
