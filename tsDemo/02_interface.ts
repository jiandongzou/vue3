interface demo {
    name: string;
    say(): void
}

class mydemo implements demo {
    name: string;
    constructor(name: string) {
        this.name = name
    }
    say(): void {
        console.log(this.name)
    }

}

interface Alarm {
    alert(): void
}
interface LightableAlarm extends Alarm {
    lightOn(): void;
    lightOff(): void;
}
class Door {

}

class SecurityDoor extends Door implements Alarm {
    alert() {
        console.log('SecurityDoor alert');
    }
}
class Car implements Alarm {
    alert() {
        console.log('Car alert');
    }
}

