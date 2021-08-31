const  imagenDelTurismo = document.querySelector('.imagesDeTurismo')
const imagenDelTurismo2 = document.querySelector('.imagesDeTurismo2')
const imagenDelTurismo3= document.querySelector('.imagesDeTurismo3')
const imagenDelTurismo4 = document.querySelector('.imagesDeTurismo4')

const ijd9e9fnoafaa = document.querySelector(".ijd9e9fnoafa") ; 

const Derecha  = document.querySelector(".rigth")
const izquierdo = document.querySelector(".left")

function LaIglesia() {
    let TrueA = true ;
    return TrueA
}
function LaCiudadPerdida() {
    let TrueA = true ;
    return TrueA
}

if(LaIglesia() && true){
    ijd9e9fnoafaa.setAttribute("src","/CentroTuristicosDeChaguillo/img/la-iglesia-de-sanjavier.png")}

    izquierdo.addEventListener("click",()=> {
             if(ijd9e9fnoafaa.getAttribute("src") == "/CentroTuristicosDeChaguillo/img/la-iglesia-de-sanjavier.png") {
                ijd9e9fnoafaa.removeAttribute("src","")
                ijd9e9fnoafaa.setAttribute("src","/CentroTuristicosDeChaguillo/img/ciudadPerdida.jpg")}

        else if(ijd9e9fnoafaa.getAttribute("src") == "/CentroTuristicosDeChaguillo/img/ciudadPerdida.jpg"){
                ijd9e9fnoafaa.removeAttribute("src","")
                ijd9e9fnoafaa.setAttribute("src","/CentroTuristicosDeChaguillo/img/la-batalla-de-chaguillo.jpg")}

        else if(ijd9e9fnoafaa.getAttribute("src") == "/CentroTuristicosDeChaguillo/img/la-batalla-de-chaguillo.jpg"){
                ijd9e9fnoafaa.removeAttribute("src","")
                ijd9e9fnoafaa.setAttribute("src","/CentroTuristicosDeChaguillo/img/img2/Imagen5.jpg")}

        else if(ijd9e9fnoafaa.getAttribute("src") == "/CentroTuristicosDeChaguillo/img/img2/Imagen5.jpg"){
                ijd9e9fnoafaa.removeAttribute("src","")
                ijd9e9fnoafaa.setAttribute("src","/CentroTuristicosDeChaguillo/img/img2/Imagen2.jpg")}

        else if(ijd9e9fnoafaa.getAttribute("src") == "/CentroTuristicosDeChaguillo/img/img2/Imagen2.jpg"){
                ijd9e9fnoafaa.removeAttribute("src","")
                ijd9e9fnoafaa.setAttribute("src","/CentroTuristicosDeChaguillo/img/img2/Imagen3.jpg")}

        else if(ijd9e9fnoafaa.getAttribute("src") == "/CentroTuristicosDeChaguillo/img/img2/Imagen3.jpg"){
                ijd9e9fnoafaa.removeAttribute("src","")
                ijd9e9fnoafaa.setAttribute("src","/CentroTuristicosDeChaguillo/img/img2/Imagen4.jpg")}




    })
    Derecha.addEventListener("click",()=> {
        if(ijd9e9fnoafaa.getAttribute("src") == "") {
            ijd9e9fnoafaa.removeAttribute("src","")
            ijd9e9fnoafaa.setAttribute("src","/CentroTuristicosDeChaguillo/img/la-iglesia-de-sanjavier.png")
        }else if(ijd9e9fnoafaa.getAttribute("src") == "/CentroTuristicosDeChaguillo/img/la-batalla-de-chaguillo.jpg") {
            ijd9e9fnoafaa.removeAttribute("src","")
            ijd9e9fnoafaa.setAttribute("src","/CentroTuristicosDeChaguillo/img/ciudadPerdida.jpg")}
        else if (ijd9e9fnoafaa.getAttribute("src") == "/CentroTuristicosDeChaguillo/img/ciudadPerdida.jpg"){
            ijd9e9fnoafaa.removeAttribute("src","")
            ijd9e9fnoafaa.setAttribute("src","/CentroTuristicosDeChaguillo/img/la-iglesia-de-sanjavier.png")
        }
        else if (ijd9e9fnoafaa.getAttribute("src") == "/CentroTuristicosDeChaguillo/img/img2/Imagen5.jpg"){
            ijd9e9fnoafaa.removeAttribute("src","")
            ijd9e9fnoafaa.setAttribute("src","/CentroTuristicosDeChaguillo/img/la-batalla-de-chaguillo.jpg")}
        else if (ijd9e9fnoafaa.getAttribute("src") == "/CentroTuristicosDeChaguillo/img/img2/Imagen2.jpg"){
            ijd9e9fnoafaa.removeAttribute("src","")
            ijd9e9fnoafaa.setAttribute("src","/CentroTuristicosDeChaguillo/img/img2/Imagen5.jpg")}
        else if (ijd9e9fnoafaa.getAttribute("src") == "/CentroTuristicosDeChaguillo/img/img2/Imagen3.jpg"){
            ijd9e9fnoafaa.removeAttribute("src","")
            ijd9e9fnoafaa.setAttribute("src","/CentroTuristicosDeChaguillo/img/img2/Imagen2.jpg")}
        else if (ijd9e9fnoafaa.getAttribute("src") == "/CentroTuristicosDeChaguillo/img/img2/Imagen4.jpg"){
            ijd9e9fnoafaa.removeAttribute("src","")
            ijd9e9fnoafaa.setAttribute("src","/CentroTuristicosDeChaguillo/img/img2/Imagen3.jpg")}

        

    })


    // Derecha.addEventListener("click",()=> {
    //     if(ijd9e9fnoafaa.getAttribute("src") == "/CentroTuristicosDeChaguillo/img/la-iglesia-de-sanjavier.png"){

    //     }


    // })



    
    // const micontador = (function (){
    //         let _contedor = 10 ; 
        
    //     function imcremetar () {return _contedor++}
    //     function decrementar () {return _contedor--}
    //     function valor(){return _contedor}
    //     return{
    //         imcremetar,
    //         decrementar,
    //         valor
    //     }

    // })();




    // if(!(ijd9e9fnoafaa.getAttribute("src") == "/CentroTuristicosDeChaguillo/img/la-iglesia-de-sanjavier.png" || ijd9e9fnoafaa.getAttribute("src") =="/CentroTuristicosDeChaguillo/img/la-iglesia-de-sanjavier.png")){
    //     izquierdo.addEventListener("click",()=> {
    //         ijd9e9fnoafaa.removeAttribute("src","")
    //         ijd9e9fnoafaa.setAttribute("src","/CentroTuristicosDeChaguillo/img/la-batalla-de-chaguillo.jpg")
    //     })
    // }



















//    const valueIglesia =  ijd9e9fnoafaa.getAttribute("src")


    // if(){
    //     Derecha.addEventListener("click",()=> {
    //         ijd9e9fnoafaa.removeAttribute("src","")
    //         ijd9e9fnoafaa.setAttribute("src","/CentroTuristicosDeChaguillo/img/la-iglesia-de-sanjavier.png")
    // }
