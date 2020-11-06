var chunk_op = JSON.stringify(chunk([1, 2, 3, 4, 5, 6, 7, 8], 4));
console.log(chunk_op);
document.write("Chunk = " + chunk_op + "<br>");

var sum_op =(sum([1, 2, 3, 4, 5]));
console.log(sum_op);
document.write("Sum = " + sum_op + "<br>");


var find_op = (find([1, 2, 3, 4, 5]));
console.log(find_op);
document.write("Find = " +find_op + "<br>");


var reduce_op = (reduce([1, 2, 3, 4, 5]));
console.log(reduce_op);
document.write("Reduce = " +reduce_op + "<br>");

var filter_op = JSON.stringify(filter([1, 2, 3, 4, 5]));
console.log(filter_op);
document.write("Filter = " +filter_op + "<br>");

