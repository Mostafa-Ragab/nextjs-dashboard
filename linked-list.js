class doublyNode {
    constructor(value) {
        this.value = value;
        this.next = null ;
        this.prev = null;
    }
}

class DoublyLinkedList {
    constructor() {
        this.head = null ;
        this.tail = null ;
        this.size = 0
    }

    
  // Add a node at the end
  append(value) {
    const newNode = new DoublyNode(value);
    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      this.tail.next = newNode;
      newNode.prev = this.tail;
      this.tail = newNode;
    }
    this.size++;
  }

// at the begninning
  prepend(value) {
    let newNode = new doublyNode(value)
if(!this.head) {
    this.head = newNode;
    this.tail = newNode;
} else {
    this.head.prev = newNode;
    newNode.next = this.head;
    this.head = newNode
}
this.size++
  }
//print the list forward
print() {
    let current = this.head
    let result = ''
    while(current) {
        result += `${current.value} -> `;
        current = current.next
    }
    console.log(result)
}

  // Print the list in reverse
  printBackward() {
    let result = "";
    let current = this.tail;
    while (current) {
      result += `${current.value} <-> `;
      current = current.prev;
    }
    console.log(result + "null");
  }

}
const dll = new DoublyLinkedList();
dll.append(10);
dll.append(20);
dll.append(30);
dll.printForward();  // Output: 10 <-> 20 <-> 30 <-> null
dll.printBackward(); // Output: 30 <-> 20 <-> 10 <-> null

dll.prepend(5);
dll.printForward();  // Output: 5 <-> 10 <-> 20 <-> 30 <-> null