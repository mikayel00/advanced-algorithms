/**
 * SINGLY LINKED LIST
 *
 * Singly linked lists contain nodes which have a 'value' field as well as 'next' field, which points to the next node in line of nodes.
 *
 * @Pros Excellent alternative to arrays, if it's important to use insert/delete in the beginning.
 * @Cons Don't have an index
 *
 * @Insertion O(1)
 * @Removal O(1) or O(N) / First O(1),
 * @Searching O(N)
 * @AccessTime O(N)
 *
 * `https://visualgo.net/en/list`
 */

class Node {
    constructor(val) {
        this.val = val;
        this.next = null;
    }
}

class SinglyLinkedList {
    constructor() {
        this.head = null;
        this.tail = null;
        this.length = 0;
    }
    push(val) {
        const node = new Node(val);
        if (!this.head) {
            this.head = node;
        } else {
            this.tail.next = node;
        }
        this.tail = node;
        ++this.length;
        return this;
    }
    pop() {
        if (!this.head) return null;

        let current = this.head;
        let newTail = current;

        while (current.next) {
            newTail = current;
            current = current.next;
        }
        this.tail = newTail;
        this.tail.next = null;
        --this.length;

        if (!this.length) {
            this.head = null;
            this.tail = null;
        }
        return current;
    }
    shift() {
        if (!this.head) return null;
        const currentHead = this.head;
        this.head = currentHead.next;
        --this.length;

        if (!this.length) {
            this.tail = null;
        }

        return currentHead;
    }

    unshift(val) {
        const node = new Node(val);
        const oldHead = this.head;
        if (!this.head) {
            this.tail = node;
        } else {
            this.head = node;
            this.head.next = oldHead;
        }
        ++this.length;

        return this;
    }

    get(num) {
        if (num < 0 || num >= this.length) return null;

        let current = this.head;
        let counter = 0;

        while(num !== counter) {
            ++counter;
            current = current.next;
        }
        return current;
    }

    set(index, val) {
        const current = this.get(index);

        if (!current) return false;

        current.val = val;

        return true;
    }

    insert(index, val) {
        if (index < 0 || index > this.length) return false;
        if (index === this.length) return !!this.push(val);
        if (index === 0) return !!this.unshift(val);
        const prev = this.get(index - 1);
        const current = prev.next;
        const newNode = new Node(val);

        prev.next = newNode;
        newNode.next = current;
        ++this.length;

        return current;
    }

    remove(index) {
        if (index < 0 || index >= this.length) return null;
        if (index === this.length - 1) return this.pop(index);
        if (index === 0) return this.shift(index);

        const prev = this.get(index - 1);
        const current = prev.next;

        prev.next = current.next;
        --this.length;

        return current;
    }

    print () {
        const arr = [];
        let current = this.head;
        while (current) {
            arr.push(current.val)
            current = current.next;
        }
        console.log(arr);
    }

    reverse() {
        let node = this.head;
        this.head = this.tail;
        this.tail = node;

        let prev = null;
        let next = null;

        for (let i = 0; i < this.length; ++i) {
            next = node.next;
            node.next = prev;
            prev = node;
            node = next;
        }
        return this;
    }
}

const list = new SinglyLinkedList();
