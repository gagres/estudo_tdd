// Descreve os testes de um determinado arquivo
describe('Main', function() {
  describe('Method A', function() {
    // Isola os casos de contexto que uma classe, metodo ou arquivo possuem
    context('Case 1', function() {
      // Responsavel por rodar os comandos
      it('should happen somethinng', function() {
        /*
          1) Aqui é onde ocorre o que esperamos
          2) Entrada de dados
          2) Retorna algo esperado
        */
        throw new Error('just an error');
      })
    })

    // Only permite definir que deve rodar apenas esse caso selecionado
    context.only('Case 2', function() {
      // O skip permite dizer quais testes devem ser pulados (caso não os queiramos agora)
      it.skip('should happen somethinng', function() {
        throw new Error('just an error');
      })
      it('should happen somethinng', function() {
      })
    })
  })

  // Hooks
  describe.only('Method B', function() {
    // Roda uma vez antes do bloco
    before(function() {
      console.log('Before')
    })
    // Roda uma vez depois do bloco
    after(function() {
      console.log('After')
    })
    // Roda todas as vezes antes de cada bloco
    beforeEach(function() {
      console.log('Before each');
    })
    // Roda todas as vezes depois de cada bloco
    afterEach(function() {
      console.log('After each');
    })

    it('Test 1', function() {

    })
    it('Test 2', function() {

    })
  })
});

/*
  1) O mocha possui reporters, responsáveis pela maneira como os testes serão apresentados no terminal
    mocha --reporters (list all reporters)
    mocha --reporter=<type> (set type)

  2) Comandos (CLI)
  --bail (-b) : Para quando achar o primeiro erro
*/
