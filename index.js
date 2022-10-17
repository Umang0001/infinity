import {slideDown,slideToggle,slideUp} from './accordion.js'
// console.log(slideDown);

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

// accordion section

let accordion_wrapper=document.getElementsByClassName("accordion-wrapper")[0];
let accordionItems=Array.from(document.getElementsByClassName("accordion-item"));

accordion_wrapper.addEventListener("click",(e)=>{
    let active_acc=e.target.closest("label");
    let active_content=active_acc.querySelector(".accordion-content-text");
    let flag = true;

    
    
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
        
        // if(item === active_acc && item.classList.contains('active-acc')){
        //     item.classList.remove("active-acc");
        //     flag = false;
        // }
        
    })
    
    // if(flag){
        
    //     active_acc.classList.add("active-acc");
    //     slideToggle(active_content,1000);
    // }

    
})