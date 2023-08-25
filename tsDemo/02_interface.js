"use strict";
class mydemo {
    constructor(name) {
        this.name = name;
    }
    say() {
        console.log(this.name);
    }
}
class Door {
}
class SecurityDoor extends Door {
    alert() {
        console.log('SecurityDoor alert');
    }
}
class Car {
    alert() {
        console.log('Car alert');
    }
}
