const test = () => {
    const queue = new PriorityQueue();
    const iteration = Math.floor(Math.random() * 20);
    for (let i = 0; i < iteration; i++) {
        queue.enqueue(Math.floor(Math.random() * 10));
        queue.print();
    }
    for (let i = 0; i < iteration; i++) {
        queue.dequeue();
        queue.print();
    }
};
const minHeap = (array, length, index) => {
    const left = 2 * index + 1,
        right = 2 * index + 2;
    let lowest = index;
    if (left < length && array[left] < array[lowest]) lowest = left;
    if (right < length && array[right] < array[lowest]) lowest = right;
    if (lowest != index) {
        [array[lowest], array[index]] = [array[index], array[lowest]];
        minHeap(array, length, lowest);
    }
};
class PriorityQueue {
    constructor() {
        this.items = [];
    }
    enqueue(element) {
        this.items.push(element);
        if (this.length() <= 1) return;
        for (let i = Math.floor(this.length() / 2) - 1; i >= 0; i--)
            minHeap(this.items, this.length(), i);
    }
    dequeue() {
        if (!this.length()) return;
        const root = this.items.shift();
        console.log(root);
        if (this.length() <= 1) return;
        for (let i = Math.floor(this.length() / 2) - 1; i >= 0; i--)
            minHeap(this.items, this.length(), i);
    }
    length() {
        return this.items.length;
    }
    print() {
        console.log(this.items);
    }
}
test();
