const ListNode = require('../extensions/list-node');
/**
 * Implement the Queue with a given interface via linked list (use ListNode extension above).
 *
 * @example
 * const queue = new Queue();
 *
 * queue.enqueue(1); // adds the element to the queue
 * queue.enqueue(3); // adds the element to the queue
 * queue.dequeue(); // returns the top element from queue and deletes it, returns 1
 *
 */

class Queue {
  constructor() {
    this.array = [];
    this.first = null;
    this.second = null;
  }

  get size() {
    return this.array.length;
  }

  enqueue(element) {
    const node = new ListNode(element);
    this.array.push(element);
    if (!this.first) {
      this.first = node;
      this.second = node;
    }
    this.second.next = node;
    this.second = node;
  }

  dequeue() {
    this.first = this.first.next;
    return this.array.shift();
  }
}
module.exports = Queue;
