// funções complementares //
const money = new Intl.NumberFormat("pt-BR", {
    style: "currency",
    currency: "BRL",
    minimumFractionDigits: 2,
})
function searchInArrayForm(tag){
    let elements = document.getElementsByTagName(tag)
    return Array.prototype.slice.call(elements)
}
// --------------------- //

function changeDiscountDisplay(){
    let array = searchInArrayForm('div')
    array = array.filter((item)=>item.dataset.testid == 'price-default')
    array = array.filter((item)=>Array.prototype.slice.call(item.childNodes).map((item)=>item.localName).includes('span'))
    array.forEach((item)=>{
        let originalValue = Number(Array.prototype.slice.call(item.childNodes)[0].innerHTML.split(';')[1].replaceAll('.','').replace(',','.'))
        let discountedValue = Number(Array.prototype.slice.call(item.childNodes)[1].innerText.split('\n')[0].replace('R$','').replaceAll('.','').replace(',','.'))
        Array.prototype.slice.call(item.childNodes)[2].innerHTML = `(${money.format(Number(originalValue - discountedValue).toFixed(2))} de <strong>desconto</strong>)`
    })    
}

function changeButtons(){
    let array = searchInArrayForm('button')
    let bagButton = array.find((item)=>item.dataset.testid == 'bagButton')
    let buyButton = array.find((item)=>item.dataset.testid == 'buyButton')
    bagButton.style = 'display:none'
    buyButton.style = 'background-color: #0086ff'
    
}

function changeFloatPriceDisplay(){
    let divArray = searchInArrayForm('div')
    let floatPrice = divArray.find((item)=>item.dataset.testid=='showcase-price').childNodes[0]
    let priceInfo = divArray.find((item)=>item.dataset.testid == 'price-default')
    floatPrice.innerHTML = priceInfo.innerHTML
}

function changeFloatButton(){
    let buttonArray = searchInArrayForm('button')
    let buyButton = buttonArray.find((item)=>item.dataset.testid == 'buyButton')
    let floatButton = buttonArray.find((item)=>item.dataset.testid == 'float-button')
    floatButton.style = 'background-color: #0086ff'
    floatButton.innerHTML = buyButton.innerHTML
}


// 1) Ao invés da mensagem de porcentagem de desconto no PIX, informar o desconto em REAL da diferença entre o preço de antes e o atual da página do produto (Lembre-se que deverá ser aplicado valores reais da página do produto, ou seja, é preciso que a diferença dos valores seja automática e não manualmente inserida).
changeDiscountDisplay()
// 2) Esconder o botão de "Adicionar a Sacola" e alterar a cor do botão "Comprar".
changeButtons()

// Durante o scroll da página, é exibida uma caixa de informações flutuante com preços e botões de compra:

// 3) Aplicar a mesma alteração do ponto 1 nesta caixa flutuante.
changeFloatPriceDisplay()
// 4) Alterar o botão "Adicionar à Sacola" pelo de "Comprar". O botão deverá ter a cor nova e também a mesma funcionalidade do botão comprar original.
changeFloatButton()