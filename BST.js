class TreeNode {
    constructor(value) {
      this.value = value;
      this.left = null;
      this.right = null;
    }
  }

  class BinarySearchTree {
    constrtuctor() {
        this.root = null
    }

    // Insert New Node 
    insert(value) {
        const newNode = new TreeNode(value)
        if(!this.root) {
            this.root = newNode
        }
        let current = this.root
        while(true) {
          
            if(value < current.value) {
                if(!current.left) {
                   current.left = newNode
                   return;
                } 
                current = current.left
            }  else {
                if(!current.right) {
                    current.right = newNode
                    return;
                }
                current = current.right;


            }
        }
    } 

    search(value) {
        let current = this.root
        while(true) {
            if(!current) return null;
            if(value === current.value) {
                return current.value
            } else {
                if(value < current.value) {
                    current = current.left
                } else {
                   current = current.right
                }
            }
        }
    }
  }