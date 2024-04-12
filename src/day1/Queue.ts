type Node<T> = {
    value: T,
    next?: Node<T>,
}
export default class Queue<T> {
    public length: number;
    private head?: Node<T>;
    private tail?: Node<T>;


    constructor() {
        this.head = this.tail = undefined;
        this.length = 0;
    }

    enqueue(item: T): void {
        const node = {value: item} as Node<T>;
        if (this.length === 0) {
            this.head = this.tail = node;
            return;
        }
        // increase length of queue
        this.length++;
        if (this.tail) {
            // old tail next point to this node
            this.tail.next = node;
            // repoint new tail to node
            this.tail = node;
        }
    }

    deque(): T | undefined {
        if (this.length === 0) {
            return undefined;
        }
        this.length--;
        if (this.length === 1) {
            const node = this.head;
            this.head = this.tail = undefined;
            return node?.value;
        }
        const node = this.head;
        this.head = this.head?.next;
        return node?.value;
    }

    peek(): T | undefined {
        return this.head?.value;
    }
}