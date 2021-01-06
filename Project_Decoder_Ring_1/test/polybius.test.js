// Write your tests here!
const {expect} = require('chai')
const polybius = require('../src/polybius')


describe('Polybius', () =>{
    describe('polybius()', ()=>{
        it('should return false if no input is given',()=>{
            const code = polybius()
            expect(code).to.be.false
        })
        it('should return false if decoding input is not an even number',()=>{
            const code = polybius("4242 4242 2",false)
            expect(code).to.be.false
        })
        it('should return false if input has special characters',()=>{
            const sub = polybius("!@#$")
            expect(sub).to.be.false
        })
        it('should return false if input is not a string',()=>{
            const sub = polybius(546878)
            expect(sub).to.be.false
        })
        it('should encode message as string of numbers',()=>{
            const code = polybius("testing spaces")
            const expected = "44513444423322 345311315134"
            expect(code).to.equal(expected)
        })
        it('should decode message as string of letters',()=>{
            const code = polybius("44513444423322 345311315134", false)
            const expected = "test(i/j)ng spaces"
            expect(code).to.equal(expected)
        })
        it('converts both I and J to 42 when encoding',()=>{
            const testForI = polybius("I")
            const testForJ = polybius("J")
            const expected = '42'
            expect(testForI&&testForJ).to.equal(expected)
        })
        it('converts 42 to (i/j) when decoding',()=>{
            const testFor42 = polybius("42",false)
            const expected = "(i/j)"
            expect(testFor42).to.equal(expected)
        })
        it('should maintain spaces',()=>{
            const sub = polybius("Testing spaces")
            expect(sub).to.contain(" ")
        })
        it('should have same result regardless of letter case',()=>{
            const sub = polybius("testing spaces")
            const sub2 = polybius("TESTING SPACES")
            expect(sub).to.equal(sub2)
        })
        it('should still output string on encode',()=>{
            const sub = polybius("Testing Spaces")
            expect(sub).to.be.a('string')
        })
    })
})