/*document.addEventListener("wheel", function (e) {
        console.log(window.scrollY)
        if (window.scrollY > 1) {
            // window.scrollY= document.getElementById("competence").offsetParent;
            window.scrollTo({
                top: document.getElementById("competence").offsetTop,
                behavior: "smooth"
            })
        }
        if (window.scrollY > document.getElementById("competence").offsetTop) {

            window.scrollTo({
                top: document.getElementById("diplome_formation").offsetTop,
                behavior: "smooth"
            })
        }
        if (window.scrollY > document.getElementById("diplome_formation").offsetTop) {

            window.scrollTo({
                top: document.getElementById("professionel").offsetTop,
                behavior: "smooth"
            })
        }
        if (window.scrollY > document.getElementById("professionel").offsetTop) {

            window.scrollTo({
                top: document.getElementById("contac").offsetTop,
                behavior: "smooth"
            })
        }

    }
)*/
// TU appel la fonction scrollTo  de l'objet windows et a cette fonction tu lui passe un param qui est lui même un objet
// document.getElementById("competence").clientTop
console.log(window)

//offset se référe a la position de la div au windows.
//client se refere a la position du container parent.
/*
document.addEventListener("scroll", window.scrollTo({
    top: document.getElementById("competence").offsetTop,
    behavior: "smooth"
}))*/