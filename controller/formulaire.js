console.log(document.getElementsByTagName('form'));
console.log(document.getElementById('nom'));
const name= document.getElementById('nom');
const firstName = document.getElementById('prenom')
const mail = document.getElementById('email')
const text = document.getElementById('textarea')

console.log(name.value);
    /*document.addEventListener('click', () =>{
        if ((name.value.trim().length>=1) && (name.value.trim().length<=255))
    {
        name.style.border =" 2px solid green"
    }
    else {
        name.style.border=  "2px solid red";
    let span = document.createElement("div");
    span.innerHTML = "<strong>Le nom n'est pas valide</strong>";
    let msg=document.getElementById("verif_nom");
    msg.appendChild(span);
         }
        }
    )*/
//factoriser les erruer des fonctions:fonction qui sert a supp erreurs
function errorFact(error){
    if(error){
        error.remove()
    }
}
//Pour verifier les conditions d'erreur du champs nom
function myVerifName(){
    let errorName = document.getElementById("errorName")//variable creer pour paramete ma fonction errorFact
    let errorNameCaratere = document.getElementById("errorNameCaractere")
    if ((name.value.trim().length === 0 )) {
        errorFact(errorNameCaratere)
        errorFact(errorName)//appel de la fonction "errorFact" en lui donnant le param a traité
    name.style.border =" 2px solid red"
        let span = document.createElement("div");
        span.id = "errorName";//ajout d'un id pour definir une variable errorName
        span.innerHTML = "<strong>Le nom n'est pas valide</strong>";//Integrer HTML au CDom a l'interieur de l'element ciblé
        let msg = document.getElementById("verif_nom");
        msg.appendChild(span);//Ajouter un enfant a l'element cibler
    } else if(name.value.trim().length > 3) {
        errorFact(errorNameCaratere)
        errorFact(errorName)//appel de la fonction "errorFact" en lui donnant le param a traité
            let error = document.createElement("span");
            error.id = "errorNameCaractere";
            error.innerHTML = "<span>limite de caractére dépassée</span>";
            document.getElementById("verif_nom").appendChild(error);
            name.style.border = "2px solid red"
    } else {
        errorFact(errorNameCaratere)//appel de la fonction "errorFact" en lui donnant le param a traité
        errorFact(errorName)//appel de la fonction "errorFact" en lui donnant le param a traité
        name.style.border = "2px solid green";
        console.log(name.value.trim().length)
    }
}


function myVerifFirstName(){
    let errorFirstName = document.getElementById("errorFirstName");
    let errorFirstNameNumber = document.getElementById("errorFirstNameNumber")
    if ((firstName.value.trim().length === 0 )) {
        errorFact(errorFirstNameNumber)
        errorFact(errorFirstName)
        firstName.style.border =" 2px solid red"
        let span = document.createElement("div");
        span.id = "errorFirstName"
        span.innerHTML = "<strong>Le prénom n'est pas valide</strong>";
        let msg = document.getElementById("verif_pre");
        msg.appendChild(span);
    } else if(firstName.value.trim().length > 3) {
        errorFact(errorFirstName)
        errorFact(errorFirstNameNumber)
        let error = document.createElement("span");
        error.id = "errorFirstNameNumber"
        error.innerHTML = "<span>limite de caractére dépassée</span>";
        document.getElementById("verif_pre").appendChild(error);
        firstName.style.border = "2px solid red"
    } else {
        errorFact(errorFirstName)
        errorFact(errorFirstNameNumber)
        firstName.style.border = "2px solid green";
        console.log(firstName.value.trim().length)
    }
}

function myVerifEmail(){
    let errorEmail = document.getElementById("errorEmail")
    let errorEmailNumb = document.getElementById("errorEmailNumb")
    if ((mail.value.trim().length === 0 )) {
        errorFact(errorEmailNumb)
        errorFact(errorEmail)

        mail.style.border =" 2px solid red"
        let span = document.createElement("div");
        span.id = "errorEmail"
        span.innerHTML = "<strong>L'e-mail n'est pas valide</strong>";
        let msg = document.getElementById("verif_email");
        msg.appendChild(span);

    } else if(mail.value.trim().length > 3) {
        errorFact(errorEmail)
        errorFact(errorEmailNumb)
        let error = document.createElement("span");
        error.id = "errorEmailNumb"
        error.innerHTML = "<span>limite de caractére dépassée</span>";
        document.getElementById("verif_email").appendChild(error);
        mail.style.border = "2px solid red"
    } else {
        errorFact(errorEmailNumb)
        errorFact(errorEmail)
        mail.style.border = "2px solid green";
        console.log(mail.value.trim().length)
    }
}


/*function myVerifText(){
    let errorText = document.getElementById("errorText")
    if ((text.value.trim().length === 0 )) {
        text.style.border =" 2px solid red"
        let span = document.createElement("div");
        span.id = "errorText"
        span.innerHTML = "<strong>Le texte n'est pas valide</strong>";
        let msg = document.getElementById("form_drt");
        msg.appendChild(span);

    } else {
        text.style.border = "2px solid green";
        errorFact(errorText)
        console.log(text.value.trim().length)
    }
}*/
//Je declare une fonct validation qui pren en parametre e l'evenement qui a declencher cette fonct.
function vadilation(e){
    //lancement des fonct de validation préétablie
    myVerifName();
    myVerifFirstName();
    myVerifEmail();
    myVerifText();
    //Si l'une de mes fonct renvoie FALSE alor j'empeche l'événement
    if (myVerifName || myVerifFirstName || myVerifEmail || myVerifText){
        //empéche l'evenement par défault.
        e.preventDefault()

    }

}
document.getElementById("form_type").addEventListener('submit', vadilation);
name.addEventListener("change", myVerifName)
text.addEventListener("change", myVerifText)
mail.addEventListener("change", myVerifEmail)
firstName.addEventListener("change", myVerifFirstName)
