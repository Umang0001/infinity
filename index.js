import {slideDown,slideUp} from './accordion.js'
let product_description=Array.from(document.getElementsByClassName("content"));
let dots=Array.from(document.getElementsByClassName("dot"));
document.getElementsByClassName("dots")[0].addEventListener("click",(event)=>{
    let clickedDot=event.target;
    if (clickedDot.name=="dot") {
        let id=clickedDot.id;
        product_description.forEach(e=>{
            e.classList.add("hide");
            e.classList.remove("show");
            document.getElementsByClassName(`${id}-content`)[0].classList.remove("hide")
            document.getElementsByClassName(`${id}-content`)[0].classList.add("show")
            dots.forEach(dot=>{
                dot.classList.remove("active")
                clickedDot.classList.add("active")
            })
        })
    }
})

let accordion_wrapper=document.getElementsByClassName("accordion-wrapper")[0];
let accordionItems=Array.from(document.getElementsByClassName("accordion-item"));

accordion_wrapper.addEventListener("click",(e)=>{
    let active_acc=e.target.closest("label");

    accordionItems.forEach(item=>{
        if(item !== active_acc){
            item.classList.remove("active-acc");
            slideUp(item.querySelector(".accordion-content-text"),1000);
        }else if(item === active_acc && item.classList.contains('active-acc')){
            item.classList.remove("active-acc");
            slideUp(item.querySelector(".accordion-content-text"),1000);
        }else{
            item.classList.add("active-acc");
            slideDown(item.querySelector(".accordion-content-text"),1000);
        }
        
     
        
        
    })
   
    
})