import { expect } from 'chai';
import { sum, sub, mult, div } from './../src/main.js';

describe('Calc', () => {

  // Smoke tests (testes mais simples)
  describe('Smoke tests', () => {
    it('should exists method sum', () => {
      expect(sum).to.exist;
      expect(sum).to.be.a('function');
    });

    it('should exists method sub', () => {
      expect(sub).to.exist;
      expect(sub).to.be.a('function');
    });

    it('should exists method mult', () => {
      expect(mult).to.exist;
      expect(mult).to.be.a('function');
    });

    it('should exists method div', () => {
      expect(div).to.exist;
      expect(div).to.be.a('function');
    });

  });

  context('Sum', () => {
    it('should return 4 when sum(2,2)', () => {
      expect(sum(2,2)).to.be.eq(4);
    });
  });

  context('Sub', () => {
    it('should return 4 when sub(6,2)', () => {
      expect(sub(6,2)).to.be.eq(4);
    });

    it('should return -4 when sub(2, 6)', () => {
      expect(sub(2,6)).to.be.eq(-4);
    })
  });

  context('Mult', () => {
    it('should return 4 when mult(2,2)', () => {
      expect(mult(2,2)).to.be.eq(4);
    });
  });

  context('Div', () => {
    it('should return 2 when div(4,2)', () => {
      expect(div(4,2)).to.be.eq(2, 'Should be 2');
    });

    it('should return "Não é permitida a divisão por zero"', () => {
      expect(div(4, 0)).to.be.eq('Não é permitida a divisão por zero');
    });
  });
});
