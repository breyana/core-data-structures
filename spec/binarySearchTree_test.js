import chai, { expect } from 'chai'
import chaiChange from 'chai-change'
import BinarySearchTree from '../src/binarySearchTree'

chai.use(chaiChange)

describe.only('Binary Search Tree', () => {
  'use strict'

  it('exists', () => {
    expect(BinarySearchTree).to.be.a('function')
  })

  describe('insert()', () => {
    it('inserts a node with the specified value into the tree.', () => {
      const bst = new BinarySearchTree()
      bst.insert(50)
      bst.insert(30)
      bst.insert(51)
      bst.insert(31)
      // bst.traverse( (val) => console.log('hello') )
      expect(() => bst.insert(3))
        .to.alter(() => bst.count(), { from: 4, to: 5 })
    })
  })

  describe('search()', () => {
    const bst = new BinarySearchTree()
    bst.insert(50)
    bst.insert(30)
    bst.insert(51)
    bst.insert(31)


    it('returns a node object if found.', () => {
      expect(bst.search(51)).to.eql({ value: 51, left: null, right: null })
    })

    it('returns null if not found.', () => {
      expect(bst.search(3)).to.be.null
    })
  })

  describe('delete()', () => {
    const bst = new BinarySearchTree()
    bst.insert(50)
    bst.insert(30)
    bst.insert(51)
    bst.insert(31)
    bst.insert(15)
    bst.remove(50)
    console.log(bst)

  })
})
