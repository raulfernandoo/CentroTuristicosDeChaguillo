
// const imagenDelTurismo = document.querySelector('.imagesDeTurismo')
// const imagenDelTurismo2 = document.querySelector('.imagesDeTurismo2')
// const imagenDelTurismo3= document.querySelector('.imagesDeTurismo3')
// const imagenDelTurismo4 = document.querySelector('.imagesDeTurismo4')


// const AddZ = (Propiedad) => {
//     const bodyScrll = document.querySelector(".hola")
//     const backroundImglolo = document.querySelector(".backround-img-turismo") 
//     Propiedad.addEventListener("click" , () => {
//         Propiedad.classList.add("Img-Saltada")
//         bodyScrll.classList.add("body-scrolls")
//         backroundImglolo.classList.add("backroundImglo")
        
        
        



// })
// }


// AddZ(imagenDelTurismo)
// AddZ(imagenDelTurismo2)
// AddZ(imagenDelTurismo3)
// AddZ(imagenDelTurismo4)


const URL = () => {
    return open("https://r2---sn-2uja-n3us.googlevideo.com/videoplayback?expire=1630269433&ei=mZsrYbCJIcThgQen5I6QBg&ip=221.120.214.106&id=o-AFjNieQx535DmLs9-wmDAKY9y2HbiUVmm955aTalizfj&itag=22&source=youtube&requiressl=yes&mh=5u&mm=31%2C29&mn=sn-2uja-n3us%2Csn-4wg7ln7d&ms=au%2Crdu&mv=m&mvi=2&pl=24&initcwndbps=205000&vprv=1&mime=video%2Fmp4&ns=71E2zw7vQsY9CFOoeYU1TQ0G&cnr=14&ratebypass=yes&dur=425.018&lmt=1630247799105339&mt=1630247569&fvip=2&fexp=24001373%2C24007246&c=WEB&txp=6211224&n=88sLyVhrFgvskR6K&sparams=expire%2Cei%2Cip%2Cid%2Citag%2Csource%2Crequiressl%2Cvprv%2Cmime%2Cns%2Ccnr%2Cratebypass%2Cdur%2Clmt&lsparams=mh%2Cmm%2Cmn%2Cms%2Cmv%2Cmvi%2Cpl%2Cinitcwndbps&lsig=AG3C_xAwRgIhAKg1qe6Ms_uV-6i8qDUSVRUFrOYjdy0fxJ2o9Y2ip5pQAiEA-xXEe-sYiJNSDqeP5ysf7U2SN3UzzBw0TRIwoWsJs3c%3D&sig=AOq0QJ8wRQIhANNeKeTysYxipbuncjaE-ho6tDvgPx5_xNfam_F_JUCfAiAZ0V0A5oAnut6cPR8Qj8MK2-7gfWTq3K41T3928OMx8w%3D%3D&title=Video0002")
}

const alertDeDescarga = () => {
    const confirmarme = prompt("Nombre completo para Aceder a la descarga")
    
    if("jesus luis rojas remolino" == confirmarme) {
        URL()
        alert("Hola Profe ✋")
    }else if("jose alfonzo gutierres pauca" == confirmarme){
       const spamm =  confirm("Deseas aceptar que acedamos a tu cuenta de facebook,whatsapp,twiter,mesengger y si tienes tinder 😊 son por motivos de seguridad..")
        if(spamm){
            URL()
            alert("gracias por tus datos")
        }
        else{
            alert("Ok..😕")
        }
    }else if("ruby hernandez purilla" == confirmarme) { 
        URL()
    }else if("critina yupa pomasonco" == confirmarme){
        URL()
        alert("Hola tia 🙂✋")
    }else if("alvaro pretel rojas" == confirmarme){
        URL()
        alert("Hola tio ✋")
    }else if("for liliana tuero farfan" == confirmarme){
        URL()
    }else if("andy janampa romero" == confirmarme){
        URL()
    }
    
    else{
        alert("lo sentimos no te encontre en mi base de datos")
    }
} 



