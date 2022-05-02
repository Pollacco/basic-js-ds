const { NotImplementedError } = require('../extensions/index.js');

const { ListNode } = require('../extensions/list-node.js');

/**
 * Implement the Queue with a given interface via linked list (use ListNode extension above).
 *
 * @example
 * const queue = new Queue();
 *
 * queue.enqueue(1); // adds the element to the queue
 * queue.enqueue(3); // adds the element to the queue
 * queue.dequeue(); // returns the top element from queue and deletes it, returns 1
 * queue.getUnderlyingList() // returns { value: 3, next: null }
 */
class Queue {
  base = [];
  getUnderlyingList() {
    return this.base.reverse().reduce((acc, current) => {
      if (acc) {
        const node = new ListNode(current);
        node.next = acc;
        return node;
      }

      return new ListNode(current);
    }, null);
  }

  enqueue(value) {
    this.base.push(value);
  }

  dequeue() {
    let remove = this.base[0]
    this.base.shift();
    return remove
  }
}


module.exports = {
  Queue
};
