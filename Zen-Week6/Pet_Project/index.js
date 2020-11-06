var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Pets = /** @class */ (function () {
    function Pets() {
    }
    return Pets;
}());
var Dog = /** @class */ (function (_super) {
    __extends(Dog, _super);
    function Dog(name, characteristics, history) {
        var _this = _super.call(this) || this;
        _this.name = name;
        _this.characteristics = characteristics;
        _this.history = history;
        return _this;
    }
    return Dog;
}(Pets));
var Cat = /** @class */ (function (_super) {
    __extends(Cat, _super);
    function Cat(name, characteristics, history) {
        var _this = _super.call(this) || this;
        _this.name = name;
        _this.characteristics = characteristics;
        _this.history = history;
        return _this;
    }
    return Cat;
}(Pets));
var Bird = /** @class */ (function (_super) {
    __extends(Bird, _super);
    function Bird(name, characteristics, history) {
        var _this = _super.call(this) || this;
        _this.name = name;
        _this.characteristics = characteristics;
        _this.history = history;
        return _this;
    }
    return Bird;
}(Pets));
var Fish = /** @class */ (function (_super) {
    __extends(Fish, _super);
    function Fish(name, characteristics, history) {
        var _this = _super.call(this) || this;
        _this.name = name;
        _this.characteristics = characteristics;
        _this.history = history;
        return _this;
    }
    return Fish;
}(Pets));
var Turtle = /** @class */ (function (_super) {
    __extends(Turtle, _super);
    function Turtle(name, characteristics, history) {
        var _this = _super.call(this) || this;
        _this.name = name;
        _this.characteristics = characteristics;
        _this.history = history;
        return _this;
    }
    return Turtle;
}(Pets));
var Availability = /** @class */ (function () {
    function Availability() {
        this.availablePets = {};
    }
    Availability.prototype.insert = function (animalType, name, charactristics, history) {
        var pet;
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
        var pets = this.availablePets[animalType];
        if (!pets) {
            pets = [];
        }
        pets.push(pet);
        console.log('Added Pet: ' + name);
        this.availablePets[animalType] = pets;
    };
    Availability.prototype.getAvailablePets = function () {
        return this.availablePets;
    };
    return Availability;
}());
var RequestPet = /** @class */ (function () {
    function RequestPet() {
        this.enquiry = {};
        this.id = 1;
    }
    RequestPet.prototype.insert = function (pets) {
        if (pets) {
            if (Array.isArray(pets)) {
                this.enquiry[this.id] = pets;
            }
            else {
                this.enquiry[this.id] = [pets];
            }
            this.id++;
        }
        else {
            console.log('Not a valid input.');
        }
    };
    RequestPet.prototype.getEnquiryDetails = function () {
        return this.enquiry;
    };
    RequestPet.prototype.showStatus = function (availablePets) {
        var maxLen = Object.keys(this.enquiry).length;
        if (maxLen > 5) {
            maxLen = 5;
        }
        for (var index = 1; index <= maxLen; index++) {
            var enq = this.enquiry[index];
            if (enq) {
                console.log('Checking status for request id: ' + index);
                enq.forEach(function (pet) {
                    if (availablePets[pet]) {
                        console.log('      Pet [' + pet + '] is available');
                    }
                    else {
                        console.log('      Pet [' + pet + '] is not available');
                    }
                });
            }
        }
    };
    return RequestPet;
}());
var availability = new Availability();
availability.insert('dog', 'murphy', 'medium fur ', 'was found in floods');
availability.insert('cat', 'xyz', 'abc', 'def');
availability.insert('cow', 'xyz', 'abc', 'def');
console.log(JSON.stringify(availability.getAvailablePets()));
var req = new RequestPet();
req.insert(['dog', 'cat']);
req.insert('cat');
req.insert(['dog', 'cat', 'fish']);
var enqDetails = req.getEnquiryDetails();
console.log(JSON.stringify(enqDetails));
req.showStatus(availability.getAvailablePets());
