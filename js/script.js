document.addEventListener("DOMContentLoaded", function (){
    const produtos = document.querySelectorAll(".produto");

    produtos.forEach(produto => {
        produto.addEventListener("click",function () {
            const nome = produto.getAttribute("data-nome");
            const valor =produto.getAttribute("data-valor");

            alert(`Produto: ${nome}\nValor: ${valor}`); 
            console.log(`Produto: ${ nome }, Valor: ${ valor }`);
        });
    });
});