type Node<T> = {
    value: T,
    next?: Node<T>
}

export default class Stack<T> {
    public length: number;
    private head?: Node<T>;


    constructor() {
        this.length = 0;
        this.head = undefined;
    }

    push(item: T): void {
        this.length++;
        const node = {value: item} as Node<T>
        if (!this.head) {
            this.head = node;
            return;
        }
        const currentHead = this.head;
        this.head = node;
        this.head.next = currentHead;
    }

    pop(): T | undefined {
        if (!this.head) {
            return undefined;
        }
        this.length--;
        const head = this.head;
        this.head = this.head.next;
        return head.value;
    }

    peek(): T | undefined {
        return this.head?.value;
    }
}