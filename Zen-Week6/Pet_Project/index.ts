abstract class Pets {
    name;
    breed;
    characteristics;
    history;
}

class Dog extends Pets{

    constructor(name, characteristics, history){
         super();
         this.name = name;
         this.characteristics = characteristics;
         this.history = history;
    }
}

class Cat extends Pets{
    constructor(name, characteristics, history){
        super();
        this.name = name;
        this.characteristics = characteristics;
        this.history = history;
   }
}

class Bird extends Pets{
    constructor(name, characteristics, history){
        super();
        this.name = name;
        this.characteristics = characteristics;
        this.history = history;
   }
}

class Fish extends Pets{
    constructor(name, characteristics, history){
        super();
        this.name = name;
        this.characteristics = characteristics;
        this.history = history;
   }
}

class Turtle extends Pets{
    constructor(name, characteristics, history){
        super();
        this.name = name;
        this.characteristics = characteristics;
        this.history = history;
   }
}

class Availability {

    availablePets = {};

    insert(animalType, name, charactristics, history) {
        let pet;
        switch (animalType.toLowerCase()) {
            case 'dog':
                pet = new Dog(name, charactristics, history);
                break;
            
            case 'cat':
                pet = new Cat(name, charactristics, history);
                break;
            
            case 'bird':
                pet = new Bird(name, charactristics, history);
                break;

            case 'fish':
                pet = new Fish(name, charactristics, history);
                break;

            case 'turtle':
                pet = new Turtle(name, charactristics, history);
                break;

            default:
                console.log('Ignoring: ' + animalType);
        }

        let pets = this.availablePets[animalType];
        if (!pets) {
            pets = [];
        }
        pets.push(pet);
        console.log('Added Pet: ' + name);
        this.availablePets[animalType] = pets;
    }

    getAvailablePets() {
        return this.availablePets;
    }

    showCounts(petType) {
        let totalPets = {};
        if (petType && petType.trim().length > 0) {
            let petArray = this.availablePets[petType];
            totalPets[petType] = petArray? petArray.length : 0;
        } else {
            Object.keys(this.availablePets).forEach(pet => {
                totalPets[pet] = this.availablePets[pet].length;
            });
        }
        return totalPets;
    }
}

class RequestPet {
    enquiry = {};
    id = 1;

    insert(pets) {
        if (pets) {
            if (Array.isArray(pets)) {
                this.enquiry[this.id] = pets;
            } else {
                this.enquiry[this.id] = [pets];
            }
            this.id++;
        } else {
            console.log('Not a valid input.');
        }
    }

    getEnquiryDetails() {
        return this.enquiry;
    }

    showStatus(availablePets) {
       
        let maxLen = Object.keys(this.enquiry).length;
        if (maxLen > 5) {
            maxLen = 5;
        }

        for(let index=1; index<=maxLen; index++) {
            let enq = this.enquiry[index];
            if (enq) {
                console.log('Checking status for request id: ' + index);
                enq.forEach(pet => {
                    if (availablePets[pet]) {
                        console.log('      Pet [' + pet + '] is available');
                    } else {
                        console.log('      Pet [' + pet + '] is not available');
                    }
                });
            }
        }
    }

    showMatchingRequests(availablePets) {

        let maxLen = Object.keys(this.enquiry).length;
        let matchedReqIds = [];

        for(let index=1; index<=maxLen; index++) {
            let enq = this.enquiry[index];
            let matched = true;
            if (enq) {
                for (let i=0; i<enq.length; i++) {
                    if (!availablePets[enq[i]]) {
                        matched = false;
                        break;
                     }
                }
            }
            if (matched) {
                matchedReqIds.push(index);
            }
        }

        return matchedReqIds;
    }
}


let availability = new Availability();
availability.insert('dog', 'xyz', 'abc', 'def');
availability.insert('cat', 'xyz', 'abc', 'def');
availability.insert('cow', 'xyz', 'abc', 'def');
console.log(JSON.stringify(availability.getAvailablePets()));

let req = new RequestPet();
req.insert(['dog', 'cat']);
req.insert('cat');
req.insert(['dog', 'cat', 'fish']);

let enqDetails = req.getEnquiryDetails();
console.log(JSON.stringify(enqDetails));
req.showStatus(availability.getAvailablePets());

let petCounts = availability.showCounts('');

console.log('Available Pets information:')
Object.keys(petCounts).forEach(pet => {
    console.log('     ' + pet + '=' + petCounts[pet]);
});

let mathedIds = req.showMatchingRequests(availability.getAvailablePets());
console.log('The folloing enquiry details are matched with Pet availability:');
mathedIds.forEach(index => {
    console.log('    Request ID=' + index + ' and Pets' + enqDetails[index]);
});