let mylibrary = []

function Book(titulo,autor,paginas,loleiste){
    this.title = titulo
    this.author = autor
    this.pages = paginas
    if(loleiste == true){
        this.itsread = true
    }else{
        this.itsread = false
    }
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
    unnuevolibro = new Book(untitulo,unautor,unaspaginas,unloleiste)
    mylibrary.push(unnuevolibro)
    crearcarta(unacarta,untitulo,unautor,unaspaginas,unloleiste)

    $libreria.append(unacarta)
})
function crearcarta(lacarta,titulo,autor,paginas,loleyo){
    const unp = document.createElement('p')
    unp.innerText = titulo
    const unp2 = document.createElement('p')
    unp2.innerText = autor
    const unp3 = document.createElement('p')
    unp3.innerText = paginas
    const unp4 = document.createElement('p')
    if(loleyo == true){
        unp4.innerText = 'Si lo a leido'
    }else{
        unp4.innerText = 'Aun no lo lee'
    }
    lacarta.append(unp)
    lacarta.append(unp2)
    lacarta.append(unp3)
    lacarta.append(unp4)
}