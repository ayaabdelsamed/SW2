


/*=============== SEARCH ===============*/

/*=============== Search Show ===============*/


/*=============== Search Hidden ===============*/



/*=============== LOGIN ===============*/



/*=============== Login Show ===============*/


/*=============== Login  Hidden ===============*/








/*=============== ADD SHADOW HEADER ===============*/

/*=============== HOME SWIPER = ==============*/


  /*=============== FEATURED WSIPER = ==============*/
  let swiperFeatured = new Swiper('.featured__swiper', {
    loop: true,
    spaceBetween: 16,
    grabCursor: true,
    slidesPerView: 'auto',
    centeredSlides: 'auto',

    navigation:{
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    breakpoints: {
      1150: {
         slidesPerView: 4,
         centeredSlides: false
        }
    }
});
//////////////////////////////////////////////////////////
cartButton = document.getElementById('cart-button'),
 cartButton1 = document.getElementById('button1'),
 cartButton2 = document.getElementById('button2'),
 cartButton3 = document.getElementById('button3'),
 cartButton4 = document.getElementById('button4'),
 cartButton5 = document.getElementById('button5'),
 cartButton6 = document.getElementById('button6'),
 cartButton7 = document.getElementById('button7'),
 cartButton8 = document.getElementById('button8'),
 cartButton9 = document.getElementById('button9'),
 cartButton10 = document.getElementById('button10'),
 cartButton11=document.getElementById('button111'),

      cartClose = document.getElementById('cart-close'),
      cartContent = document.getElementById('cart-content')

/*===============  ===============*/

s="The Giver  $11.19";

    cartButton.addEventListener('click',() =>{
        cartContent.classList.add('show-cart');
        
    })
    cartButton1.addEventListener('click',() =>{
        cartContent.classList.add('show-cart');
       
        addBookToArray("The Lord Of The King");
    })
    cartButton3.addEventListener('click',() =>{
        cartContent.classList.add('show-cart');
        addBookToArray("Simple&Minimalist");
    })
    cartButton2.addEventListener('click',() =>{
        cartContent.classList.add('show-cart');
        addBookToArray("Muted Poster");
    })
    cartButton4.addEventListener('click',() =>{
        cartContent.classList.add('show-cart');
        addBookToArray("Pouring Dreams");
    })
    cartButton5.addEventListener('click',() =>{
        cartContent.classList.add('show-cart');
        addBookToArray("Customize Clothes");
    })
    cartButton6.addEventListener('click',() =>{
        cartContent.classList.add('show-cart');
        addBookToArray("Designed For Work");
    })
    cartButton7.addEventListener('click',() =>{
        cartContent.classList.add('show-cart');
        addBookToArray("Plant Tree");
    })
    cartButton8.addEventListener('click',() =>{
        cartContent.classList.add('show-cart');
        addBookToArray("Modern Poster");

    })
    cartButton9.addEventListener('click',() =>{
        cartContent.classList.add('show-cart');
        addBookToArray("Bird Park");

    })
    cartButton10.addEventListener('click',() =>{
        cartContent.classList.add('show-cart');
        addBookToArray("Memories of sword");
        
    })
   

////////////////////////////////////////////////////////////////////



/*=============== cart variables ===============*/

let bookDiv = document.getElementById("bookkk");



let  arrayOfBooks=[];

// if there is books add in localstorage
if(localStorage.getItem("bookkk")){
    arrayOfBooks=JSON.parse(localStorage.getItem("bookkk"));
}
getDataFromLocalStorage();
 





/*=============== close the cart ===============*/
if (cartClose) {
    cartClose.addEventListener('click', () => {
        cartContent.classList.remove('show-cart');
       
    });
}
/*=============== purchase ===============*/

if(cartButton11){
    cartButton11.addEventListener('click', () =>{
        cartButton11.classList.remove('show-cart')
        window.location.href = 'https://app.fatora.io/register/?src=www.google.com&for=pg&lang=ar';
    })
}
if(cartClose){
    cartClose.addEventListener('click', () =>{
        cartContent.classList.remove('show-cart')

    })
}
/*=============== adding and removing ===============*/


  ///remove 
bookDiv.addEventListener("click",(e)=>{
    if(e.target.classList.contains("del")){
        deleteBookWith(e.target.parentElement.getAttribute("data-id"));
        e.target.parentElement.remove();
        
    }
}

);


function addBookToArray(textText){
      const book ={
        id: Date.now(),
        title: textText,
      };
      arrayOfBooks.push(book);
      console.log(arrayOfBooks);
      addElementToPageForm(arrayOfBooks);
 // add to local storage
 addDataTolocalStorage(arrayOfBooks);
 // for testing 
 console.log(arrayOfBooks);
 console.log(JSON.stringify(addBookToArray));
}

/*=============== add book to page ===============*/



function addElementToPageForm(arrayOfBooks) {
    bookDiv.innerHTML = "";
    arrayOfBooks.forEach((book) => {
        let div = document.createElement("div");
        div.className = "bookk";
         div.setAttribute("data-id",book.id)
        div.style.border = "1px solid grey"; 
        div.style.padding = "10px"; 
        div.style.display = "flex"; 
        let textSpan = document.createElement("span");
        textSpan.textContent = book.title;
        textSpan.style.paddingTop="7px"
        textSpan.style.flex = "1"; 
        textSpan.style.fontWeight = "bold"; 
        //buton remove
        let button = document.createElement("button");
        button.textContent = "Remove";
        button.className="del";
        button.style.backgroundColor = "red"; 
        button.style.color = "white"; 
        button.style.fontWeight = "bold";
        button.style.padding="10px";

        
        // Append text and button to div
        div.appendChild(textSpan);
        div.appendChild(button);

        // Add margin between divs
        div.style.marginBottom = "10px";

        // Append div to bookDiv
        bookDiv.appendChild(div);
    });



}
// add to local storage

function addDataTolocalStorage(arrayOfBooks){
    window.localStorage.setItem("bookkk", JSON.stringify(arrayOfBooks)); 
}
function getDataFromLocalStorage(){
    let data = window.localStorage.getItem("bookkk");
    if(data){
        let books=JSON.parse(data);
        addElementToPageForm(books);
       
    }
}
function deleteBookWith(bookid){
    arrayOfBooks = arrayOfBooks.filter((book) => book.id != bookid);
    addDataTolocalStorage(arrayOfBooks);
}







/*=============== NEW SWIPER ===============*/


/*=============== TESTIMONIAL SWIPER ===============*/


/*=============== SHOW SCROLL UP ===============*/



/*=============== SCROLL SECTIONS ACTIVE LINK ===============*/


/*=============== SCROLL REVEAL ANIMATION ===============*/