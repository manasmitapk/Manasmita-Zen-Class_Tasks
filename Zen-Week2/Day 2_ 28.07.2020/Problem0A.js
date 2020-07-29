var cat = {
    name: 'Fluffy',
    activities: ['play', 'eat cat food'],
    catFriends: [
    {
    name: 'bar',
    activities: ['be grumpy', 'eat bread omblet'],
    weight: 8,
    furcolor: 'white'
    }, 
    {
    name: 'foo',
    activities: ['sleep', 'pre-sleep naps'],
    weight: 3
    }
    ]
   }


// 1.Add height and weight to Fluffy
cat["height"] = 300;
cat["weight"] = 50;

// 2.Fluffy name is spelled wrongly. Update it to Fluffyy
cat["name"] = "Fluffyy";

// 3.List all the activities of Fluffyy’s catFriends.
for(let i of cat["catFriends"]){
    console.log(i["activities"]);
}

// 4.Print the catFriends names.
for(let i of cat["catFriends"]){
    console.log(i["name"]);
}

// 5.Print the total weight of catFriends
let totalWeight = 0;
for(let i of cat["catFriends"]){
    totalWeight += i["weight"];
}
console.log(totalWeight);


// 6.Print the total activities of all cats (op:6)
for(let i of cat["activities"]){
    console.log(i);
}
for(i of cat["catFriends"]){
    for(let j of i["activities"]){
        console.log(j);
    }
}

// 7.Add 2 more activities to bar & foo cats
for(i of cat["catFriends"]){
    i["activities"].push("myActivity");
}

// 8.Update the fur color of bar
cat["catFriends"][0]["furcolor"] = "Brown"

console.log(cat);
