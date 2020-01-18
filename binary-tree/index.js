function Tree(rootNode) {
    this.root = rootNode;
    this.addNode = function (node) {
        if (this.root === null) {
            this.root = node
        } else {
            this.root.addNode(node)
        }
    }

    this.traverse = function () {
        this.root.visit()
    }

    this.search = function (val) {
        return this.root.search(val)
    }
}

function Node(val) {
    this.value = val;
    this.left = null;
    this.right = null;

    this.addNode = function (node) {
        if (node.value < this.value) {
            if (this.left === null) {
                this.left = node;
            } else {
                this.left.addNode(node);
            }
        } else if (node.value > this.value) {
            if (this.right === null) {
                this.right = node;
            } else {
                this.right.addNode(node);
            }
        }
    }

    this.visit = function () {

        if (this.left != null) {
            this.left.visit();
        }

        // const value = this.value
        console.log(this.value)

        if (this.right != null) {
            this.right.visit();
        }

    }

    this.search = function (val) {
        if (val === this.value) {
            return this
        } else if (val < this.value && this.left != null) {
            return this.left.search(val)
        } else if (val > this.value && this.right != null) {
            return this.right.search(val)
        }


    }
}

const tree = new Tree(new Node(10));

for (let i = 0; i < 100000; i++) {

    tree.addNode(new Node(Math.floor(Math.random() * 1000000)));
}
tree.addNode(new Node(2));
tree.addNode(new Node(73));
tree.addNode(new Node(17));
tree.addNode(new Node(7));



// console.log(JSON.stringify(tree, null, 4));
tree.traverse()

console.log(tree.search(7))
