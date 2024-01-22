class Hero {
    constructor(nome, idade, tipo) {
      this.nome = nome;
      this.idade = idade;
      this.tipo = tipo;
    }
  
    atacar() {
      let ataque;
  
      switch (this.tipo) {
        case 'mago':
          ataque = 'magia';
          break;
        case 'guerreiro':
          ataque = 'espada';
          break;
        case 'monge':
          ataque = 'artes marciais';
          break;
        case 'ninja':
          ataque = 'shuriken';
          break;
        default:
          ataque = 'um ataque desconhecido';
      }
  
      console.log(`O ${this.tipo} atacou usando ${ataque}`);
    }
  }
  
  // Exemplo de uso:
  const heroi1 = new Hero('Aragorn', 30, 'guerreiro');
  heroi1.atacar(); // Saída: O guerreiro atacou usando espada
  
  const heroi2 = new Hero('Gandalf', 1000, 'mago');
  heroi2.atacar(); // Saída: O mago atacou usando magia
  