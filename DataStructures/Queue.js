const test = () => {
    const queue = new Queue();
    queue.enqueue(10);
    queue.enqueue(20);
    queue.enqueue(30);
    queue.enqueue(40);
    queue.print();
    queue.dequeue();
    queue.dequeue();
    queue.print();
};
class Queue {
    constructor() {
        this.data = [];
    }
    enqueue(element) {
        this.data.push(element);
    }
    dequeue() {
        !this.isEmpty() ? this.data.shift() : console.log('The queue is empty');
    }
    isEmpty() {
        return this.data.length === 0;
    }
    peek() {
        return !this.isEmpty() ? this.data[0] : 'The queue is empty';
    }
    length() {
        return this.data.length;
    }
    print() {
        console.log(this.data);
    }
}
test();
