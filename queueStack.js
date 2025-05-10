class Stack{
    constructor() {
this.items = []
    }
// add the lement to the top 
    push (value) {
        this.items.push(value)
    }

    //Remove and return to the top 

    pop(value){
        if(this.isEmpty()) return null;
        return this.items.pop()
    }

    //Get the top elment

    peek(){
        if(this.isEmpty()) return null;
        return this.items[this.items.length - 1]
    }
    isEmpty(){
        return this.items.length === 0
    }   

    // print stack elements 
    print() {
        let result = []
        if(this.isEmpty()) return null;
        return this.items.forEach((item) => {
            result.push(item)
        })
        console.log('__>' ,result)
     }


 }

 // Usage
const stack = new Stack();
stack.push(10);
stack.push(20);
stack.push(30);
stack.print(); // Output: 10 -> 20 -> 30
console.log(stack.pop()); // Output: 30
console.log(stack.peek()); // Output: 20



class Queue {
    constructor() {
      this.items = [];
    }
  
    // Add an element to the back
    enqueue(value) {
      this.items.push(value);
    }

     // Remove and return the front element
     dequeue() {
        if(this.isEmpty()) return null ;
        this.items.shift()
     }
}

//Queue Implementation Using a Linked List
class Node {
    constructor(value) {
        this.value = value ;
        this.next = null 
    }
}

class queueLinkedList {
    constructor() {
        this.front = null;
        this.rear = null ;
        this.size = null 
    }

      // Add an element to the back
      enqueue(value) {
        const newNode = new nodeModuleNameResolver(value)
        if(!this.front) {
            this.front = newNode;
            this.rear = newNode;

        } else {
            this.rear.next = newNode
            this.rear = newNode;
        }
        this.size++
      }

        // Remove and return the front element
        dequeue() {
            if(!this.front) return null ;
            this.front =  this.front.next;
            size--
            
        }
 }