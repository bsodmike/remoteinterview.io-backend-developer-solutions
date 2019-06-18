function Node(value) {
  this.value = value;
  this.next = null;
}

function Queue() {
  this.first = null;
  this.last = null;
  this.size = 0;
}

Queue.prototype.enqueue = function(value) {
  let newNode = new Node(value);
  if (this.size) this.last.next = newNode;
  else this.first = newNode;
  this.last = newNode;
  this.size++;
  return this.size;
};

Queue.prototype.dequeue = function() {
  let removedNode = this.first;
  if (this.size) {
    this.first = this.first.next;
    removedNode.next = null;
    this.size--;
    return removedNode.value;
  }
};

function calculateSubPiles(n, p) {
  let subPiles = [];
  let count = 0;
  while (count < p) {
    subPiles.push(Math.floor(n/p));
    count++;
  }
  count = 0;
  while (count < n % p) {
    subPiles[count]++;
    count++;
  }
  return subPiles;
}

function calculatePiles(input) {
  const inputs = input.split(' ');
  const nBoxes = +inputs[0];
  const mMost = +inputs[1];
  
  if (nBoxes <= mMost) return nBoxes;
  
  const pParts = +inputs[2];
  const nNode = new Node(nBoxes);
  
  let freqCount = {};
  let totalPiles = 0;
  let q = new Queue();
  
  q.first = nNode;
  q.last = nNode;
  q.size = 1;
  
  while (q.size) {
    if (q.first.value <= mMost) {
      if (q.first.value !== 0) {
        let removedVal = q.dequeue();
        freqCount[removedVal] = freqCount[removedVal] + 1 || 1;
      } else q.dequeue();
    } else {
      calculateSubPiles(q.first.value, pParts).forEach(val => {
        if (val !== 0) q.enqueue(val);
      });
      q.dequeue();
    }
  }
  
  for (let key in freqCount) totalPiles += freqCount[key];
  
  //console.log(freqCount);
  return totalPiles;
}


//Installed node modules: jquery underscore request express jade shelljs passport http sys lodash async mocha moment connect validator restify ejs ws co when helmet wrench brain mustache should backbone forever debug

process.stdin.resume();
process.stdin.setEncoding('utf8');
var util = require('util');
var input = "";

process.stdin.on('data', function (text) {
  input += text;
});

process.stdin.on('end', function () {

  var piles = calculatePiles(input);
  console.log(piles);
  
});