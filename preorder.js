class Node {

    constructor(value) {

      this.key = value;

      this.left = null;

      this.right = null;

    }

   }

   function TreePreorder(node) {

    if (node == null)

    return;

    document.write(node.key );

    TreePreorder(node.left);

    TreePreorder(node.right);

   }

   root = new Node('1');

   root.left = new Node('2');

   root.right = new Node('3');

   root.left.left = new Node('4');

   root.left.right = new Node('5');

   root.left.left.left = new Node('6');

   root.left.left.right = new Node('7');

   root.right.left = new Node('8');

   

    var result=TreePreorder(root);

    console.log(result);







const preorderTraverse = (node, array) => {

if (!node) return array;

array.push(node.value);

array = preorderTraverse(node.left, array);

array = preorderTraverse(node.right, array);

return array;

};



console.log(preorderTraverse(tree, [1,2,3,4,5]));

