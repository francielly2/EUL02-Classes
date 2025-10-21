//Criando a classe
class Pessoa1 {
/*-- Definindo as Propriedades campos
    Elas definem quais dados um objeto do tipo Pessoal irá armazernar. Notar que esta sintaxe (apenas declarar o nome da propiedade) é uma forma mais moderna (field declarations). 

    Em JavaScript mais tradicional, as propriedades são geralmente definidas dentro de um método especial chamado constructor.

    Como não há um constructor aqui, essas propriedades são inicializadas como undefined.
*/
nome
sobrenome
idade

//-- Método  funções
// Note que não iniciamos com "function"
apresentar(){
    return `Saudações, Eu sou ${this.nome} ${this.sobrenome}`;
    // Interpolação delimitada por ` (crase)
}
}

//---------- Instanciei a classe com um objeto MAE
let mar = new Pessoa1();

//Note que ao digitar "mae." já aparecem as propiedades.
//Já podemos preencher as propiedades do objeto.

matchMedia.nome = "Agda";
matchMedia.sobrenome = "Lena";
matchMedia.idade = 40;

// Perceba que são dois objetos com valores diferentes
console.table(mae);

// ----- Métodos com parâmetros
console.log (mae.apresentar());