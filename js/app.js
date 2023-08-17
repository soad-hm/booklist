let $ =document
const input1=$.querySelector ("#title")
const input2=$.querySelector("#author")
const input3=$.querySelector("#year")
const input4=$.querySelector(".add-btn")
const container=$.querySelector("#book-list")
let books=[]
function adddition(event){
    event.preventDefault()
    
    let value1=input1.value
    let value2=input2.value
    let value3=input3.value
    
  
    if(value1,value2,value3){
      let information={
        id:books.length+1,
        title:value1,
        author:value2,
        year:value3
    }
books.push(information)
   localstoragearray(books)
   generate(books)  
    }else{
   alert('fill information')
    }
   
}
function localstoragearray(array){
    localStorage.setItem('books',JSON.stringify(array))
    empety()
}
function empety(){
     input1.value='',
     input2.value='',
     input3.value=''

}
function generate(elem){
    container.innerHTML=''
    elem.forEach(function(book){
    newtrelem=$.createElement('tr')
    let newthtitleelem=$.createElement('th')
    newthtitleelem.innerHTML=book.title
    let newthauthorelem=$.createElement('th')
    newthauthorelem.innerHTML=book.author
    let newthyearelem=$.createElement('th')
    newthyearelem.innerHTML=book.year
    newtrelem.append(newthtitleelem,newthauthorelem,newthyearelem)
    container.append(newtrelem)
    })
console.log(newtrelem)
}
input4.addEventListener('click',adddition)
function filelocalstorage(){
    let locals=localStorage.getItem('books')
    if(locals){
        books=JSON.parse(locals)
        generate(books)
    }
}
window.addEventListener('load',filelocalstorage)