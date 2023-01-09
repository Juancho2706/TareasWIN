let mylibrary = []
let numeroindex = 0
function Book(titulo,autor,paginas,loleiste,index){
    this.title = titulo
    this.author = autor
    this.pages = paginas
    if(loleiste == true){
        this.itsread = true
    }else{
        this.itsread = false
    }
    this.indice = index
}

function addBookToLibrary(){

}
// const libro1 = new Book("Howarts","Lebron","231", true)
// const libro2 = new Book("Phisics","Adam","523", false)

// mylibrary.push(libro1)
// mylibrary.push(libro2)

const $libreria = document.querySelector('.libreria')
const $anadir = document.querySelector('.addbutton')
$anadir.addEventListener('click', (e)=>{
    const unacarta = document.createElement('div')
    untitulo = prompt("Titulo del libro.")
    unautor = prompt("Autor?")
    do{
        unaspaginas = prompt("Cuantas paginas?")
    }while((parseInt(unaspaginas) >= 0) == false)
    do{
        unloleiste = prompt("Lo leiste ya? s/n")
    } while (((unloleiste == 's') || (unloleiste == 'n')) == false);
    if(unloleiste == 's'){
        unloleiste = true
    }else if(unloleiste == 'n'){
        unloleiste = false
    }
    indiceindex = mylibrary.length
    unnuevolibro = new Book(untitulo,unautor,unaspaginas,unloleiste, indiceindex)
    mylibrary.push(unnuevolibro)
    crearcarta(unacarta,untitulo,unautor,unaspaginas,unloleiste)
    unacarta.classList.add('carta')
    $libreria.append(unacarta)
})
const $anadirfact = document.querySelector('.factaddbutton')
$anadirfact.addEventListener('click', (e)=>{
    const unacarta = document.createElement('div')
    untitulo = 'Howarts School'
    unautor = "Daniel Radcliffe"
    unaspaginas = "69"
    unloleiste = true
    indiceindex = mylibrary.length
    unnuevolibro = new Book(untitulo,unautor,unaspaginas,unloleiste, indiceindex)
    mylibrary.push(unnuevolibro)
    crearcarta(unacarta,untitulo,unautor,unaspaginas,unloleiste,indiceindex)
    unacarta.classList.add('carta')
    unacarta.setAttribute('id', indiceindex.toString())
    $libreria.append(unacarta)
})
function crearcarta(lacarta,titulo,autor,paginas,loleyo,indix){
    const unp = document.createElement('p')
    unp.innerText = 'Libro: '+titulo
    const unp2 = document.createElement('p')
    unp2.innerText = 'Autor: '+autor
    const unp3 = document.createElement('p')
    unp3.innerText = 'Paginas: '+paginas
    const unbot = document.createElement('button')
    const borrar = document.createElement('button')
    borrar.innerText = 'X'
    borrar.addEventListener('click', (e)=>{
        const itemsoontodelete = document.getElementById(indix.toString())
        itemsoontodelete.remove()
    })
    unbot.classList.add('leido')
    unbot.classList.add('noleido')
    let siono = loleyo
    if(siono == true){
        unbot.classList.remove('noleido')
        unbot.innerText ='Leido'
    }else{
        unbot.classList.remove('leido')
        unbot.innerText = 'No Leido'
    }
    unbot.addEventListener('click', (e)=>{
        siono = !siono;
        if(siono== true){
            unbot.classList.remove('noleido')
            unbot.classList.add('leido')
            unbot.innerText ='Leido'
        }else{
            unbot.classList.remove('leido')
            unbot.classList.add('noleido')
            unbot.innerText = 'No Leido'
        }
    })
    lacarta.append(unp)
    lacarta.append(unp2)
    lacarta.append(unp3)
    lacarta.append(unbot)
    lacarta.append(borrar)
}
// function leido(unbool,e){
//     if(unbool== true){
//         e.classList.remove('noleido')
//         e.innerText ='Leido'
//     }else{
//         e.classList.remove('leido')
//         e.innerText = 'No Leido'
//     }
// }