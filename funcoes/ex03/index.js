const carrinho = {
    nomeDoCliente: "Guido Bernal",
    produtos: [
        {
            id: 1,
            nome: "Camisa",
            qtd: 3,
            precoUnit: 3000
        },
        {
            id: 2,
            nome: "Bermuda",
            qtd: 2,
            precoUnit: 5000
        }
    ],
    imprimirResumo: function(){
        console.log(`Cliente: ${this.nomeDoCliente}`)
        this.imprimirDetalhes();
        let qtdItens = this.calcularTotalDeItens();
        let totalCompra = this.calcularTotalAPagar();
        let desconto = this.calcularDesconto();
        console.log(`Total de itens: ${qtdItens} itens`);
        console.log(`Total a pagar: R$${(totalCompra/100).toFixed(2)}`);
        console.log(`Desconto de R$${(desconto/100).toFixed(2)}`)
        },
    addProduto: function(produto){
        let jaTem = false;
        let indiceAdd;
        for(let i = 0;i < this.produtos.length; i++){
            if(produto.id == this.produtos[i].id){
                indiceAdd = i;
                jaTem = true;
            }
        }
        if(jaTem){
            this.produtos[indiceAdd].qtd += produto.qtd;
        }else{
            this.produtos.push(produto)};
    },
    imprimirDetalhes: function(){
        for(let i2 = 0; i2<this.produtos.length; i2++){
            let itemP = this.produtos[i2];
            console.log(`Item ${itemP.id} - ${itemP.nome} - ${itemP.qtd} und - R$${((itemP.precoUnit)/100).toFixed(2)}`);
        }
    },
    calcularTotalDeItens: function(){
        let quantidadeItens = 0;
        for(let item of carrinho.produtos){
            quantidadeItens += item.qtd;
        };
        return quantidadeItens;
        
    },
    calcularTotalAPagar: function(){
        let totalCompra = 0;
        for(let item of carrinho.produtos){
            totalCompra += item.precoUnit*item.qtd;
        };
        return totalCompra;
    },
    calcularDesconto: function(){
     let total = this.calcularTotalAPagar();
     let qtdC = this.calcularTotalDeItens();
     let menorI = this.produtos[0].precoUnit;
      
        if(total > 100 || qtdC >= 4){
            for(let item of this.produtos){
                if(item.precoUnit < menorI){
                    menorI = item.precoUnit;
                }
            }
            if((total*0.1)>menorI){
                return total*0.1;
            }else return menorI;
        }
    }
};

const novaBermuda = {
    id: 2,
    nome: "Bermuda",
    qtd: 3,
    precoUnit: 5000
}
const novoTenis = {
    id: 3,
    nome: "Tenis",
    qtd: 1,
    precoUnit: 10000
}

carrinho.addProduto(novaBermuda);
carrinho.addProduto(novoTenis);
carrinho.imprimirResumo();
//console.log(carrinho.produtos);
