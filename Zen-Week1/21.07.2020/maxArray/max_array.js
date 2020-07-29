var arr = [3,56,62,23,31,28,74];
var max = 0;

for (let ind = 0; ind<=arr.length; ind++)
{
	if(arr[ind] > max)
	{
		max = arr[ind];
	}
}
console.log(max);

