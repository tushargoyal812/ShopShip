var hamburger=document.querySelector('#hamburger')
var productSidebar=document.querySelector('.responsive-product-sidebar')
var crossBtn=document.querySelector('#cross')

// showUI.style.display='none';
// crossBtn.style.display='none';
// hamburger.addEventListener("click",()=>{
//     crossBtn.style.display='block'
//     hamburger.style.display='none';
//     showUI.style.left==='-100%'?showUI.style.left='0px':showUI.style.left='-100%'
    // showUI.style.display==='block'?showUI.style.display='none':showUI.style.display='block'
    // showUI.style.display='block';
    // showUI.style.left='0'
// })

// crossBtn.addEventListener("click",()=>{
//     crossBtn.style.display='none'
//     hamburger.style.display='block';
//     showUI.style.display==='block'?showUI.style.display='none':showUI.style.display='block'
// })

// hamburger.style.display='none';

// showUI.style.display="none"
crossBtn.style.display='none'
hamburger.addEventListener("click",()=>{
    crossBtn.style.display='block'
    hamburger.style.display='none';
    if(productSidebar.style.left ==="0px"){
        productSidebar.style.left="-100%"
    }else{
        productSidebar.style.left="0px"
    }
})

crossBtn.addEventListener("click",()=>{
    crossBtn.style.display='none'
    hamburger.style.display='block';
    if(productSidebar.style.left ==="0px"){
        productSidebar.style.left="-100%"
    }else{
        productSidebar.style.left="0px"
    }
})