class Animal {
    constructor(nome, idade) {
      if (this.constructor === Animal) {
        throw new Error("Classe abstrata não pode ser instanciada diretamente.");
      }
  
      this.nome = nome;
      this.idade = idade;
    }
  
    emitirSom() {
      throw new Error("Método abstrato 'emitirSom' deve ser implementado nas classes derivadas.");
    }
  }
  
  // Classes que herdam de Animal
  class Cachorro extends Animal {
    constructor(nome, idade, raca) {
      super(nome, idade);
      this.raca = raca;
    }
  
    emitirSom() {
      return "Au au!";
    }
  }
  
  class Gato extends Animal {
    constructor(nome, idade, cor) {
      super(nome, idade);
      this.cor = cor;
    }
  
    emitirSom() {
      return "Miau!";
    }
  }
  
  // Criando instâncias de objetos
  const cachorro1 = new Cachorro("Buddy", 3, "Labrador");
  const gato1 = new Gato("Mittens", 2, "Branco");
  const cachorro2 = new Cachorro("Max", 5, "Husky");
  
  // Testando os métodos
  console.log(cachorro1.emitirSom()); // Saída esperada: "Au au!"
  console.log(gato1.emitirSom()); // Saída esperada: "Miau!"
  console.log(cachorro2.emitirSom()); // Saída esperada: "Au au!"