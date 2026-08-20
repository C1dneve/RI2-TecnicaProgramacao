function Telefone(ddd, numero) 
{
    this.ddd = ddd;
    this.numero = numero;

    this.getDdd = function () 
    {
        return this.ddd;
    };

    this.setDdd = function (ddd) 
    {
        this.ddd = ddd;
    };

    this.getNumero = function () 
    {
        return this.numero;
    };

    this.setNumero = function (numero) 
    {
        this.numero = numero;
    };

    this.getDddMaiusculo = function () 
    {
        return String(this.ddd).toUpperCase();
    };

    this.getDddMinusculo = function () 
    {
        return String(this.ddd).toLowerCase();
    };

    this.getNumeroMaiusculo = function () 
    {
        return String(this.numero).toUpperCase();
    };

    this.getNumeroMinusculo = function () 
    {
        return String(this.numero).toLowerCase();
    };
}

function Endereco(rua, numero, cidade, estado) 
{
    this.rua = rua;
    this.numero = numero;
    this.cidade = cidade;
    this.estado = estado;

    this.getRua = function () 
    {
        return this.rua;
    };

    this.setRua = function (rua) 
    {
        this.rua = rua;
    };

    this.getNumero = function () 
    {
        return this.numero;
    };

    this.setNumero = function (numero) 
    {
        this.numero = numero;
    };

    this.getCidade = function () 
    {
        return this.cidade;
    };

    this.setCidade = function (cidade) 
    {
        this.cidade = cidade;
    };

    this.getEstado = function () 
    {
        return this.estado;
    };

    this.setEstado = function (estado) 
    {
        this.estado = estado;
    };

    this.getRuaMaiusculo = function () 
    {
        return this.rua.toUpperCase();
    };

    this.getRuaMinusculo = function () 
    {
        return this.rua.toLowerCase();
    };

    this.getNumeroMaiusculo = function () 
    {
        return String(this.numero).toUpperCase();
    };

    this.getNumeroMinusculo = function () 
    {
        return String(this.numero).toLowerCase();
    };

    this.getCidadeMaiusculo = function () 
    {
        return this.cidade.toUpperCase();
    };

    this.getCidadeMinusculo = function () 
    {
        return this.cidade.toLowerCase();
    };

    this.getEstadoMaiusculo = function () 
    {
        return this.estado.toUpperCase();
    };

    this.getEstadoMinusculo = function () 
    {
        return this.estado.toLowerCase();
    };
}

function Cliente(nome, telefone, endereco) {
    this.nome = nome;
    this.telefone = telefone;
    this.endereco = endereco;

    this.getNome = function () 
    {
        return this.nome;
    };

    this.setNome = function (nome) 
    {
        this.nome = nome;
    };

    this.getTelefone = function () 
    {
        return this.telefone;
    };

    this.setTelefone = function (telefone) 
    {
        this.telefone = telefone;
    };

    this.getEndereco = function () 
    {
        return this.endereco;
    };

    this.setEndereco = function (endereco) 
    {
        this.endereco = endereco;
    };

    this.getNomeMaiusculo = function () 
    {
        return this.nome.toUpperCase();
    };

    this.getNomeMinusculo = function () 
    {
        return this.nome.toLowerCase();
    };

    this.getDescricao = function () 
    {
        return this.nome +
            "\nTelefone: (" + this.telefone.getDdd() + ") " +
            this.telefone.getNumero() +
            "\nEndereço: " + this.endereco.getRua() +
            ", " + this.endereco.getNumero() +
            " - " + this.endereco.getCidade() +
            "/" + this.endereco.getEstado();
    };
}

const telefone1 = new Telefone("12", "99999-9999");
const telefone2 = new Telefone("11", "88888-8888");
const telefone3 = new Telefone("21", "77777-7777");

const endereco1 = new Endereco
(
    "Rua dos Jardns",
    "100",
    "Itaguaí",
    "RJ"
);

const endereco2 = new Endereco
(
    "Avenida Brasil",
    "500",
    "Rio de Janeiro",
    "RJ"
);

const endereco3 = new Endereco
(
    "Rua do Comércio",
    "250",
    "Itaguaí",
    "RJ"
);

const cliente1 = new Cliente("Steve Roger", telefone1, endereco1);
const cliente2 = new Cliente("Tony stark", telefone2, endereco2);
const cliente3 = new Cliente("Bruce Banner", telefone3, endereco3);

const listaClientes = [cliente1, cliente2, cliente3];

for (let i = 0; i < listaClientes.length; i++) 
    {
    console.log(listaClientes[i].getDescricao());
    console.log();
}

function ordenarClientes(clientes) 
{
    const clientesOrdenados = [...clientes];

    clientesOrdenados.sort(function (a, b) 
    {
        return a.getNome().localeCompare(b.getNome());
    });

    return clientesOrdenados;
}

const clientesOrdenados = ordenarClientes(listaClientes);

console.log("Clientes ordenados:");

for (let i = 0; i < clientesOrdenados.length; i++) 
{
    console.log(clientesOrdenados[i].getNome());
}

let easter = "boa noite professor, cid aqui";

console.log(easter);