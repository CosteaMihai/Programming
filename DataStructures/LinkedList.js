class ListNode {
    constructor(data, next = null) {
        this.data = data;
        this.next = next;
    }
}
class LinkedList {
    constructor() {
        this.head = null;
    }
    addBeginning(element) {
        const newNode = new ListNode(element);
        if (this.head) newNode.next = this.head;
        this.head = newNode;
        return this.head;
    }
    addEnd(element) {
        const newNode = new ListNode(element);
        if (!this.head) this.head = newNode;
        newNode.next = this.head;
        this.head = newNode;
        return this.head;
    }
    printList() {
        let current = this.head;
        let str = '';
        while (current) {
            str += current.data + ' ---> ';
            current = current.next;
        }
        console.log(str);
    }
}
const linked = new LinkedList();
linked.addBeginning(1);
linked.addBeginning(2);
linked.addBeginning(3);
linked.addBeginning(4);
linked.addBeginning(5);
linked.printList();
