const btn = document.querySelector('.btn')
const form = document.querySelector('#form')
const carrosDiv = document.querySelector('.carros')
const qt = document.querySelector('.qt')

const breakLoop = false
const carros = []
let count = 0

class Carro {
    marca
    modelo
    versao
    cor
    ano
    motor

    constructor(marca, modelo, versao, motor, cor, ano) {
        this.marca = marca
        this.modelo = modelo
        this.versao = versao
        this.motor = motor
        this.cor = cor
        this.ano = ano
    }

    get modelo_e_versao() {
        return {
            modelo: this.modelo,
            versao: this.versao
        }
    }
}

function addCarro() {
    count++
    const marca = document.getElementById('marca').value
    const modelo = document.getElementById('modelo').value
    const versao = document.getElementById('versao').value
    const motor = document.getElementById('motor').value
    const cor = document.getElementById('cor').value
    const ano = document.getElementById('ano').value

    console.log(marca, modelo, versao, motor, cor, ano)
    carros.push(new Carro(marca, modelo, versao, motor, cor, ano))
    console.log('carros cadastrados:', carros)
    form.reset()

    if (count === 3) confirm('Deseja visualizar os carros cadastrados?') ? mostrarCadastrados() : null
    
    return alert('Carro adicionado!')
}


function mostrarCadastrados() {
    const pre = document.createElement('pre')
    const code = document.createElement('code')
    code.innerHTML = JSON.stringify(carros, null, 4)
    pre.appendChild(code)
    carrosDiv.appendChild(pre)
    form.innerHTML = ''
}

btn.addEventListener('click', addCarro)