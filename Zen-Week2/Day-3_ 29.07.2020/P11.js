function CountAnimals(tur,horse,pigs) {

    return ((tur*2)+(horse+pigs)*4);
}
var legs = CountAnimals(2,3,5)
console.log(legs);