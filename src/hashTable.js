'use strict'

class Node {
  constructor(key, value) {
    this.key = key;
    this.value = value
    this.next = null;
  }
}

export default class HashTable {
  constructor() {
    this.list = new Array(137);
    this.count = 0
  }

  hash(key) {
    let prime = 37
    let total = 0
    for (var i = 0; i < key.length; i++) {
      total += prime * total + key.charCodeAt(i)
    }
    total = total % this.list.length
    return total
  }

  put(key, value) {
    let hashedKey = this.hash(key)
    this.list[hashedKey] = new Node(key, value)
    this.count++
  }

  get(key) {
    let hashedKey = this.hash(key)
    if(!this.list[hashedKey]) {
      return null
    }
    return this.list[hashedKey].value
  }

  contains(key) {
    let hashedKey = this.hash(key)
    if (!this.list[hashedKey]) {
      return false
    }
    return this.list[hashedKey].key === key ? true : false
  }

  iterate(func) {
    this.list.forEach((elem, index) => {
      if (elem) {
        func(elem.key, elem.value)
      }
    })
  }

  remove(key) {
    let hashedKey = this.hash(key)
    delete this.list[hashedKey]
    this.count--
  }

  size() {
    return this.count
  }
}
