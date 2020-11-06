const test = () => {
    let StackWithJSFunction = new StackWithJSFunctions();
    let StackWithoutJSFunction = new StackWithoutJSFunctions();
    console.log('Add in stack:');
    let iteration = Math.floor(5 + Math.random() * 10);
    for (let i = 0; i < iteration; i++) {
        randomNumber = Math.floor(Math.random() * 100);
        console.log('Number:', randomNumber);
        StackWithJSFunction.push(randomNumber);
        StackWithoutJSFunction.push(randomNumber);
        StackWithJSFunction.print();
        StackWithoutJSFunction.print();
    }
    iteration = Math.floor(Math.random() * 5);
    for (let i = 0; i < iteration; i++) {
        console.log(StackWithJSFunction.pop());
        console.log(StackWithoutJSFunction.pop());
        StackWithJSFunction.print();
        StackWithoutJSFunction.print();
    }
};

class StackWithoutJSFunctions {
    constructor() {
        this.data = [];
        this.top = 0;
    }
    push(element) {
        this.data[this.top] = element;
        this.top++;
    }
    length() {
        return this.top;
    }
    isEmpty() {
        return this.top === 0;
    }
    peek() {
        return this.data[this.top - 1];
    }
    pop() {
        if (this.isEmpty() === false) {
            const extractElement = this.data[this.top - 1];
            this.data.splice(-1, 1);
            this.top--;
            return extractElement;
        } else return 'The stack is already empty';
    }
    print() {
        console.log('Stack Without JS Functions: ', this.data);
    }
    reverse() {
        for (
            let i = this.length() - 1;
            i >= Math.ceil(this.length() / 2);
            i--
        ) {
            [this.data[this.length() - i - 1], this.data[i]] = [
                this.data[i],
                this.data[this.length() - i - 1],
            ];
        }
    }
}

class StackWithJSFunctions {
    constructor() {
        this.data = [];
    }
    push(element) {
        this.data.push(element);
    }
    isEmpty() {
        return this.data.length === 0;
    }
    length() {
        return this.data.length;
    }
    peek() {
        return this.data[this.length() - 1];
    }
    pop() {
        return this.isEmpty() === false
            ? this.data.pop()
            : 'The stack is already empty';
    }
    print() {
        console.log('Stack With JS Functions: ', this.data);
    }
    reverse() {
        this.data.reverse();
    }
}
test();
