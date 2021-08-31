const conenedorPrimer = document.querySelector(".contenedor")
const ijd9e9fnoafaa = document.querySelector(".ijd9e9fnoafa") ; 

const Derecha  = document.querySelector(".rigth")
const izquierdo = document.querySelector(".left")

function LaIglesia() {
    let TrueA = true ;
    return TrueA
}

if(LaIglesia() && true){
    ijd9e9fnoafaa.setAttribute("src","/CentroTuristicosDeChaguillo/img/la-iglesia-de-sanjavier.png")
}


// const srcImg = ( permiso,nopermitir,Derecha1 , izquierdo0 ) => {
//     if (permiso){
//         ijd9e9fnoafaa.addEventListener("click" , () => {
//         Derecha.setAttribute("src",Derecha1)
//         })}
//     else if (nopermitir){
//         ijd9e9fnoafaa.removeAttribute("src","")
//         ijd9e9fnoafaa.addEventListener("click" , () => {
//             izquierdo.setAttribute("src",izquierdo0)
//  })}}

izquierdo.addEventListener("click",()=> {
    ijd9e9fnoafaa.removeAttribute("src","")
    ijd9e9fnoafaa.setAttribute("src","/CentroTuristicosDeChaguillo/img/ciudadPerdida.jpg")
})
Derecha.addEventListener("click",()=> {
    ijd9e9fnoafaa.removeAttribute("src","")
    ijd9e9fnoafaa.setAttribute("src","/CentroTuristicosDeChaguillo/img/la-iglesia-de-sanjavier.png")
})    



    // for(let i= 1 ;i < 5;i++){
        
    //     if(i == 1){
    //         ijd9e9fnoafaa.removeAttribute("src","")
    //         ijd9e9fnoafaa.setAttribute(false,true,"src","/CentroTuristicosDeChaguillo/img/la-iglesia-de-sanjavier.png")
    //         break
    //     }else if(i == 2){


    //     }    
    // }    

    
//    srcImg(false,true,"","/CentroTuristicosDeChaguillo/img/ciudadPerdida.jpg")
