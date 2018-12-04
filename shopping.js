document.addEventListener("click",function(event){
    event.preventDefault()  
     if(event.target.className == "button-plus") {
    increment(event);
}
if (event.target.className=="button-minus") {
decrement (event);

}
if (event.target.className== "btn btn-primary")  
add(event);
})

console.log(prices)

function increment(event) {
    var clickedBtn = event.target
    var papa = clickedBtn.parentElement
    var qte = papa.querySelector(".qtn")
    var prc=papa.querySelector(".prize span")
    qte.innerHTML++
    var totalprc=document.querySelector(".total-price ")
    totalprc.innerHTML =   parseInt(totalprc.innerHTML) + parseInt(prc.innerHTML) + "$"
    console.log(totalprc, total, qte)
 }

function decrement(event) {
    var clickedBtn = event.target
    var papa = clickedBtn.parentElement
    var qte = papa.querySelector(".qtn")
    var prc=papa.querySelector(".prize span")
    var totalprc=document.querySelector(".total-price")

    if(qte.innerHTML>0){
        qte.innerHTML-- ;
        var oldTotal =  parseInt(totalprc.innerHTML)
        console.log(oldTotal)
        var newTotal = parseInt(totalprc.innerHTML) - prc.innerHTML + "$";
        totalprc.innerHTML = newTotal;
        console.log(newTotal)
    }

 }
 function add() {


        var newImg = document.querySelector(".Image").value
        var newName= document.querySelector(".Name").value
        var newPrice=document.querySelector(".artclprc").value
        var clone=document.querySelector(".card").cloneNode(true);
        clone.querySelector(".card-img").src = newImg
        clone.querySelector(".card-title").innerHTML = newName
        clone.querySelector(".spn").innerHTML=newPrice
        debugger;
        var cards = document.querySelector(".cards")

        
        cards.insertBefore(clone, cards.children[cards.children.length-1])
        // document.querySelector(".cards").appendChild(a);
    

 }