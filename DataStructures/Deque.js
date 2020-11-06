const test = () => {
    const deque = new Deque();
    const iteration = Math.floor(Math.random() * 100);
    for (let i = 0; i < iteration; i++) {
        const operation = Math.floor(Math.random() * 3);
        switch (operation) {
            case 0:
                deque.addFront(i);
                break;
            case 1:
                deque.addRear(i);
                break;
            case 2:
                deque.removeFront();
                break;
            case 3:
                deque.removeRear();
                break;
        }
        deque.print();
    }
};
class Deque {
    constructor() {
        this.items = [];
    }
    addFront(element) {
        this.items.unshift(element);
    }
    addRear(element) {
        this.items.push(element);
    }
    removeFront() {
        if (this.isEmpty()) return;
        return this.items.shift();
    }
    removeRear() {
        if (this.isEmpty()) return;
        return this.items.pup();
    }
    isEmpty() {
        return !this.items.length;
    }
    print() {
        console.log(this.items);
    }
}
test();
