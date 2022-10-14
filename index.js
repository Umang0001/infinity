
let product_description=document.getElementById("product-description");

let dots=document.getElementsByClassName("dot");
console.log(dots);

document.body.addEventListener("click",(event)=>{
    let clickedDot=event.target;
    console.log(clickedDot);
})

// Q60.addEventListener("click",()=>{
//     // product_description.innerText="Q60 is an SUV connected to your world. Its suite of smart technologies keep you in touch with everyone - and everything - that matters most to you in life and on the road"

//     let x=Array.from(dots)

//     x.forEach(dot=>{
//         console.log(dot);
//         dot.classList.remove("active")
//     })
    
//     Q60.classList.add("active")
//     // Q60.style.background="#fff"
//     // QX80.style.background="none"
// })
// QX80.addEventListener("click",()=>{
//     product_description.innerText= "QX80 is an SUV connected to your world. Its suite of smart technologies keep you in touch with everyone - and everything - that matters most to you in life and on the road"
//     // Q60.style.background="none"
//     // QX80.style.background="#fff"
//     let x=Array.from(dots)

//     x.forEach(dot=>{
//         console.log(dot);
//         dot.classList.remove("active")
//     })
    
//     QX80.classList.add("active")
// })