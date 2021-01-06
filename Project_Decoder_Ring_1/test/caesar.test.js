// Write your tests here!
const {expect} = require('chai')
const caesar = require('../src/caesar')


describe('Ceasar', () =>{
    describe('ceasar()', ()=>{
        it('should return false if no input is given',()=>{
            const sub = caesar('',6)
            expect(sub).to.be.false
        })
        it('should return false if no shift value is given',()=>{
            const sub = caesar("testing spaces")
            expect(sub).to.be.false
        })
        it('should return false if shift value is 0',()=>{
            const sub = caesar("testing spaces",0)
            expect(sub).to.be.false
        })
        it('should return false if shift value is greater than 25',()=>{
            const sub = caesar("testing spaces",29)
            expect(sub).to.be.false
        })
        it('should return false if shift value is less than -25',()=>{
            const sub = caesar("testing spaces",-39)
            expect(sub).to.be.false
        })
        it('should return encoded message',()=>{
            const sub = caesar("Testing spaces",4)
            const expected = "xiwxmrk wtegiw"
            expect(sub).to.equal(expected)
        })
        it('should return decoded message',()=>{
            const sub = caesar("alzapun zwhjlz",7,false)
            const expected = "testing spaces"
            expect(sub).to.equal(expected)
        })
        it('should maintain spaces',()=>{
            const sub = caesar("TESTING SPACES",9)
            expect(sub).to.contain(' ')
        })
        it('should have same result regardless of letter case',()=>{
            const sub = caesar("TESTING SPACES",9)
            const sub2 = caesar("testing spaces",9)
            const sub3 = caesar("TESTING SPACES",9,false)
            const sub4 = caesar("testing spaces",9,false)
            expect(sub).to.equal(sub2)
            expect(sub3).to.equal(sub4)
        })
        it('should wrap to begining and end of alphabet with high enough shift',()=>{
            const wrapToFront = caesar("ZZZ",4)
            const wrapToEnd = caesar("AAA",7,false)
            const expectFront = "ddd"
            const expectEnd = "ttt"
            expect(wrapToFront).to.equal(expectFront)
            expect(wrapToEnd).to.equal(expectEnd)
        })
    })
})