// eslint-disable-next-line max-classes-per-file
const repeatedElement = (head, repeatedElements) => {
  if (!head) return;

  let counter = 1;
  let { element, next } = head;
  const current = head;

  while (head != null) {
    while (next != null) {
      if (element === next.element) {
        counter += 1;
      }
      next = next.next;
    }

    head = next;
  }

  if (counter > 1) repeatedElements.push({ element, repeated: counter });
  repeatedElement(current.next, repeatedElements);
};

class Node {
  constructor(element) {
    this.element = element;
    this.next = null;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
    this.size = 0;
    this.current = null;
    this.repeatedElements = [];
  }

  add(element) {
    if (!element) return;

    const node = new Node(element);
    let current = null;

    if (this.head === null) this.head = node;
    else {
      current = this.head;
      while (current.next) {
        current = current.next;
      }
      current.next = node;
    }
    this.size += 1;
  }

  getRepeteadValues() {
    repeatedElement(this.head, this.repeatedElements);
    return this.repeatedElements;
  }

  getMostRepeated() {
    return this.getRepeteadValues().reduce((a, b) => (a.repeated > b.repeated ? a : b));
  }
}

const numbers = ['1', '0', '1', '4', '9', '0', '4'];
const linkedlist = new LinkedList();

numbers.map((e) => linkedlist.add(e));

const repeatedValues = linkedlist.getMostRepeated();

console.log(repeatedValues.element);

