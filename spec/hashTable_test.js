import chai, { expect, assert } from 'chai'
import chaiChange from 'chai-change'
import HashTable from '../src/hashTable'

chai.use(chaiChange)

describe('Hash Table', () => {
  'use strict'

  it('exists', () => {
    expect(HashTable).to.be.a('function')
  })

  describe('put()', () => {
    it('adds a key-value pair to the hash table', () => {
      const hashTable = new HashTable()

      expect(() => hashTable.put("name", "Zanzibar"))
        .to.alter(() => hashTable.size(), { from: 0, to: 1 })
    })
  })

  describe('hash()', () => {
    const hashTable = new HashTable()
    let hashedKey = hashTable.hash("name")

    it('generates a hash for the key "name"', () => {
      expect(hashTable.hash("name")).to.equal(hashedKey)
      assert.isNumber(hashedKey, "hashed key is a number")
    })
  })

  describe('get()', () => {
    it('returns the data associated with key.', () => {
      const hashTable = new HashTable()
      hashTable.put("name", "Zanzibar")

      expect(hashTable.get("name")).to.eql("Zanzibar")
    })
  })

  describe('contains()', () => {
    const hashTable = new HashTable()
    hashTable.put("name", "Zanzibar")
    hashTable.put("place", "Zimbabwe")
    hashTable.put("animal", "Zebra")

    it('returns true if the hash table contains the key.', () => {
      expect(hashTable.contains("place")).to.be.true
    })
    it('returns false if the hash table does not contain the key', () => {
      expect(hashTable.contains("car")).to.be.false
    })
  })

  describe('iterate()', () => {
    it('takes a callback function and passes it each key and value in sequence.',
    () => {
      const hashTable = new HashTable()
      hashTable.put("name", "Zanzibar")
      hashTable.put("place", "Zimbabwe")
      hashTable.put("animal", "Zebra")
      let keyValueArray = []

      hashTable.iterate((k, v) => keyValueArray.push(`${k}: ${v}`))

      expect(keyValueArray.length)
        .to.equal(3)
    })
  })

  describe('remove()', () => {
    it('removes a key-value pair by key.', () => {
      const hashTable = new HashTable()
      hashTable.put("name", "Zanzibar")
      hashTable.put("place", "Zimbabwe")
      hashTable.put("animal", "Zebra")

      expect(() => hashTable.remove("name"))
        .to.alter(() => hashTable.size(), { from: 3, to: 2 })
      expect(hashTable.get("name"))
        .to.be.null
    })
  })

  describe('size()', () => {
    it('returns the number of key-value pairs in the hash table.', () => {
      const hashTable = new HashTable()
      hashTable.put("name", "Zanzibar")
      hashTable.put("place", "Zimbabwe")
      hashTable.put("animal", "Zebra")

      expect(hashTable.size()).to.equal(3)
    })
  })

})
