let itens = [
    {
        image: 'https://images.kabum.com.br/produtos/fotos/156929/notebook-gamer-lenovo-gaming-3i-intel-core-i5-10300h-gtx-1650-4gb-8gb-ram-256gb-ssd-linux-16-9-widescreen-chameleon-blue-82cgs00100_1624476897_m.jpg',
        name: 'Notebook',
        price: 'R$ 3.303,56',
        type: 'quadro'
    },
    {
        image: 'https://images.kabum.com.br/produtos/fotos/324405/smartphone-samsung-galaxy-m23-5g-6gb-ram-128gb-octa-core-camera-tripla-50mp-tela-infinita-6-6-cobre-sm-m236bidtzto_1652197692_m.jpg',
        name: 'Smartphone',
        price: 'R$ 1.899,05',
        type: 'quadro'
    },
    {
        image: 'https://images.kabum.com.br/produtos/fotos/113405/monitor-lg-led-25-full-hd-ips-hdmi-1ms-25um58-g_1591183670_m.jpg',
        name: 'monitor',
        price: 'R$ 959,99',
        type: 'quadro'
    },
    {
        image: 'https://cdn.shopify.com/s/files/1/0510/3851/9482/products/Hae5ba22c2ab24733aff41d0d5a018a12E_600x.jpg?v=1641917925',
        name: 'Dabi',
        price: 'R$ 162,70',
        type: 'figure'
    },
    {
        image: 'https://cdn.shopify.com/s/files/1/0510/3851/9482/products/Hd9fea545e4534ccabf6ddf31009a77c0w_600x.jpg?v=1605717007',
        name: 'Luminária Dabi boku no hero',
        price: 'R$ 123,09',
        type: 'figure'
    },
    {
        image: 'https://cdn.shopify.com/s/files/1/0510/3851/9482/products/S04dcc560724d42269ad155f22a676ccaa_600x.jpg?v=1654282647',
        name: 'Roronoa Zoro',
        price: 'R$ 73,05',
        type: 'figure'
    }
    
]

let listFigures = []

let listframes = []

function separaItens(list){
    for(let i = 0; i < list.length; i++){
        if(list[i].type == 'quadro'){
            listframes.push(list[i])
        }else {
            listFigures.push(list[i])
        }
    }
}

separaItens(itens)

let ul1 = document.querySelector('.flex_li')
let ul2 = document.querySelector('.flex2')


function listar_li (list, reference){
    for(let i = 0; i < list.length; i++){
        let listProducts =  list[i]
        let template     =  criarTemplates(listProducts)
        reference.appendChild(template)
    }
}

listar_li(listFigures, ul2)
listar_li(listframes, ul1)


function criarTemplates(listProducts){
    let imagem = listProducts.image
    let name   = listProducts.name
    let price  = listProducts.price

    let tagLi  = document.createElement('li')
    let tagDiv = document.createElement('div')
    let tagImg = document.createElement('img')
    let tagH3  = document.createElement('h3')
    let tagP   = document.createElement('p') 


    tagDiv.classList.add('imagem')
    tagImg.src      = imagem
    tagImg.alt      = name
    tagH3.innerText = name
    tagP.innerText  = price

    tagLi.append(tagDiv, tagH3, tagP)
    tagDiv.append(tagImg)

    return tagLi
}

