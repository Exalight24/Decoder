// Write your tests here!
const {expect} = require('chai')
//const substitution = require('../src/substitution')
const substitute = require('../src/substitution')


describe('Substitution', () =>{
    describe('substitution()', ()=>{
        it('should return false if no input is given',()=>{
            const sub = substitute('',"plmoknijbuhvygctfxrdzeswaq")
            expect(sub).to.be.false
        })
        it('should return false if no alphabet is given',()=>{
            const sub = substitute('testing',)
            expect(sub).to.be.false
        })
        it('should return false if aphabet has special characters',()=>{
            const sub = substitute("testing","plmoknijbuhvygc!fxrdzeswaq")
            expect(sub).to.be.false
        })
        it('should return false if provided alphabet is not exactly 26 letters or is not a string',()=>{
            const sub = substitute("test","short")
            const sub2 = substitute("test",12345678909876543212345678)
            expect(sub).to.be.false
            expect(sub2).to.be.false
        })
        it('should return false if alphabet has repeating characters',()=>{
            const sub = substitute("testing spaces","aacdefghijklmnopqrstuvwxyz")
            expect(sub).to.be.false
        })
        it('should return encoded message',()=>{
            const sub = substitute("Testing spaces","plmoknijbuhvygctfxrdzeswaq")
            const expected = "dkrdbgi rtpmkr"
            expect(sub).to.equal(expected)
        })
        it('should return decoded message',()=>{
            const sub = substitute("Dkrdbgi rtpmkr","plmoknijbuhvygctfxrdzeswaq",false)
            const expected = "testing spaces"
            expect(sub).to.equal(expected)
        })
        it('should maintain spaces',()=>{
            const sub = substitute("TESTING SPACES","plmoknijbuhvygctfxrdzeswaq")
            expect(sub).to.contain(' ')
        })
        it('should have same result regardless of letter case while encoding',()=>{
            const sub = substitute("TESTING SPACES","plmoknijbuhvygctfxrdzeswaq")
            const sub2 = substitute("testing spaces","plmoknijbuhvygctfxrdzeswaq")
            expect(sub).to.deep.equal(sub2)
        })
        it('should have same result regardless of letter case while decoding',()=>{
            const sub3 = substitute("TESTING SPACES","plmoknijbuhvygctfxrdzeswaq",false)
            const sub4 = substitute("testing spaces","plmoknijbuhvygctfxrdzeswaq",false)
            expect(sub3).to.deep.equal(sub4)
        })
    })
})