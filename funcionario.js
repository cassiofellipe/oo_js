function Pessoa(nome) {
    this.nome = nome;
    this.dizOi = function(){
        console.log(this.nome + " diz olá " );
    }
    this.dizCargo = function() {
        console.log(this.cargo);
    }    
}

function Funcionario(nome, cargo, salario) {
    this.cargo = cargo;
    let _salario = salario;

    // getters e setters
    this.getSalario = function() {
        return _salario;
    }

    this.setSalario = function(valor) {
        if (typeof valor === 'number') {
            _salario = valor;
        }
    }

    this.aumento = function() {
        const novoSalario = _salario * 1.1;
        _salario = novoSalario;
    }

    this.dizCargo = function() {
        console.log(this.cargo);
    }

    Pessoa.call(this, nome);
}

function Estagiario(nome) {
    Funcionario.call(this, nome, "Estagiário", 2000);

    this.aumento = function() {
        const novoSalario = this.getSalario() * 1.07;
        this.setSalario(novoSalario);    
    }
}

function Gerente(nome) {
    Funcionario.call(this, nome, "Gerente", 10000);

    this.aumento = function() {
        const novoSalario = this.getSalario() * 1.15;
        this.setSalario(novoSalario);    
    }
}

const funcinario1 = new Funcionario("Maria", "de Front-end", 5000);
const funcinario2 = new Estagiario("Pedro");
const funcinario3 = new Gerente("Cássio Fellipe");


funcinario1.aumento();
console.log(funcinario1.getSalario())

funcinario2.aumento();
console.log(funcinario2.getSalario())

funcinario3.aumento();
console.log(funcinario3.getSalario())




// const pessoa = new Pessoa("Cássio");

// funcinario1.dizOi();
// funcinario1.dizCargo();

// funcinario1.setSalario(7000);

// console.log(funcinario1.getSalario());

