/*
  Desafio FizzBuzz

  Escreva uma lib que receba um número e:

  Se o número for divisível por 3, no lugar do número escreva "Fizz"
  Se o número for divisível por 5, no lugar do número escreva "Buzz"
  Se o número for divisível por 3 e 5, no lugar do número escreva "FizzBuzz"
  Se não for múltiplo de nada retorna o número
*/

import { expect } from 'chai'
import fizzbuzz from './../src/fizzbuzz.js';

describe('FizzBuzz', () => {
  it('should return "Fizz" when multiple of 3', () => {
    expect(fizzbuzz(3)).to.be.equal('Fizz');
    expect(fizzbuzz(6)).to.be.equal('Fizz');
  })

  it('should return "Buzz" when multiple of 5', () => {
    expect(fizzbuzz(5)).to.be.eq('Buzz');
    expect(fizzbuzz(10)).to.be.eq('Buzz');
  })

  it('should return "FizzBuzz" when multiple of 3 and 5', () => {
    expect(fizzbuzz(15)).to.be.eq('FizzBuzz');
    expect(fizzbuzz(30)).to.be.eq('FizzBuzz');
  })

  it('should return the value if it isn`t multiple of nothing', () => {
    expect(fizzbuzz(7)).to.be.equal(7);
    expect(fizzbuzz(22)).to.be.equal(22);
  })

  it('should return 0 when 0', () => {
    expect(fizzbuzz(0)).to.be.eq(0)
  })
})
