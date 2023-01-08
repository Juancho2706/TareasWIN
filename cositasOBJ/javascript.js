function books(title,author,pages,didureadit) {
    this.titulo = title
    this.autor = author
    this.paginas = pages
    this.loleiste = didureadit
    this.info = function(){
        return this.titulo + " by " + this.autor + ", " + this.paginas + " pages, "+ this.loleiste
    }
}
books.prototype.esnopor = function(){
    console.log(this.titulo + ' esnopor!')
}
books.prototype.noesnopor = function(){
    console.log(this.titulo + ' no es XXX! :(')
}

//Todos los objetos tienen un prototipo, o un __proto__ atributo,
//cuando le digo a una funcion que 'function.prototype.NOMBRENUEVAFUNCION'
//le digo que pegue esa NUEVAFUNCTION a la function que llame con prototype

const unlibro = new books('kamasutra', 'Jhon', '420', 'Ya lo lei');

function revistas(nombre){
    this.name = nombre
    this.comosellama = function(){
        console.log(this.name)
    } 
}

revistas.prototype = Object.create(books.prototype)

const unarevista = new revistas('Mens Health')