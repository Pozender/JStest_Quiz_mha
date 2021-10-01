const output1 = document.getElementById("result1");
const boutons = document.querySelectorAll('.boutons');
const enonce = document.getElementById('enonce');
const play = document.getElementById('play');
const next = document.getElementById('next');
let score = 0;



//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

const question1 = {
    question : "Comment s'appelle l'alter d'All Might ?",
    propositions : ["One for all", "Justice amblem", "All for one", "Tibo inshape instantané"],
    reponse : "One for all"
};
const question2 = {
    question: "Laquelle de ces techniques spéciales est une vrai technique de Dark Shadow ?",
    propositions: ['Le regard du cavalier sombre', "Les ailes de l'ange de l'ombre", 'Les griffes acérées du crépuscule', 'Le bec transcandant des thénèbres'],
    reponse: "Les griffes acérées du crépuscule"
}; 
const question3 = {
    question: "Comment Izuku a t-il eu son Alter ?",
    propositions : ["En buvant une potion magique", "En mageant un cheveu", "En priant la sainte pelle", "De manière naturelle"],
    reponse: "En mageant un cheveu"
}
const question4 = {
    question: "Qui était le Mentor d'All Migth ?",
    propositions : ["Le frère d'All for one", "Grand Torino", "All for one", "Nana Shimura"],
    reponse: "Nana Shimura"
}
const question5 = {
    question: "Comment s'appelle le grand frère de Tenya ?",
    propositions : ["Tanseille", "Tensey" , "Tensai", "Tensei"],
    reponse: "Tensei"
}
const question6 = {
    question: "Combien de frères et soeurs a Shoto Todoroki ?",
    propositions : ["3", "5" , "4", "2"],
    reponse: "3"
}
const question7 = {
    question: "Quelle phrase à double sens All Might va prononcer après son combat avec All for One ?",
    propositions : ["Le prochain est pour toi", "A toi d'jouer" , "Le Prochain ce sera toi", "Se sera bientot ton tour"],
    reponse: "Le Prochain ce sera toi"
}

const question8 = {
    question: "Pourquoi  Shoto a une cicatrice à l'oeil ?",
    propositions : ["Il s'est cogné contre une plaque de cuisson en jouant avec sa soeur", "Son père l'a brulé pour le forcer à utiliser ses flames" , "Sa mère lui a versé de l'eau bouillante sur la figure", "Il s'est brulé en essayant ses propres flames"],
    reponse: "Sa mère lui a versé de l'eau bouillante sur la figure"
}
const question9 = {
    question:"Quels est l'objectif personnel de Mirio Togata",
    propositions: ["Devenir plus connu qu'All Might", "Être meilleur que Deku", "Avoir traversé au moins une fois tous les sols du monde","Sauver un million de personnes"],
    reponse:"Sauver un million de personnes"
}
const question10 = {
    question:"Que fais l'alter de Rikido Sato",
    propositions: ["Le sel le rends plus fort", "Les enchois le rendent invincible (pendant une durée limitée)","Le sucre le rends plus fort","Le chocolat le rends plus énervé"],
    reponse:"Le sucre le rends plus fort"
}
const question11 = {
    question:"Combien il y a t-il de fillières à UA",
    propositions: ["8", "4", "3","6"],
    reponse: "4"
}
const question12 = {
    question:"Comment s'appelle la dernierre attaque d'All Might sur All for one",
    propositions: ["United States of smash","Detroit Smash","Missouri Smash","Alabama Destroy"],
    reponse: "United States of smash"
}
const question13 = {
    question:"Quel était le nombre de points que vallait le robot abatu par Midoria lors de l'admission",
    propositions: ["1","3","200","0"],
    reponse: "0"
}
const question14 = {
    question:"A la remise des prix combien de points récolte Midoria",
    propositions: ["40","59","61","60"],
    reponse: "60"
}
const question15 ={
    question: "Comment s'appelle l'ancien collègue d'All Might",
    propositions: ["Tomura Shigaraki","Night","Eraser Head","Night Eye"],
    reponse: "Night Eye"
}
const question16 ={
    question: "Comment s'appelle la seul fille du groupe des supers vilains",
    propositions: ["Raphaelle", "Ochaco Oraraca", "Himiko Toga", "Axelle"],
    reponse: "Himiko Toga"
}
const question17 = {
    question : "Quelle est la position de Fumikage dans le tournoi de UA",
    propositions: ["1er","2ième","3ième", "4ième"],
    reponse: "3ième"
}
const question18 = {
    question: "Quelle est la motivation de Stain",
    propositions: ["Car ils lui ont pas dis Bonjour", "Car il à une haine des héros", "Eliminer ceux qui ont réussi là ou il a échoué", "Eliminer les héros corompu"],
    reponse: "Eliminer les héros corompu"
}
const question19 = {
    question : "Quel est le nom du groupe mafieux dans la saison 4",
    propositions: ["Les huit préceptes de la mort", "Les seepts préceptes de la morts", "les septs péché capitaux", "Les huits péchés capitaux"],
    reponse: "Les huit préceptes de la mort"
}
const question20 = {
    question: "A la plage combiens de personnes reconnaissent All Might",
    propositions: ["4", "5", "3", "2"],
    reponse: "2",
}

const questions = [question1, question2, question3, question4, question5, question6, question7, question8, question9, question10, question11, question12,question13,question14,question15,question16,question17,question18,question19,question20];

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

let i = 0;

////////////////////////////////////////////////////////////////////////////
const quiz = (index_question) =>{                                     // La fonction qui contient tout le quiz
        enonce.innerHTML = questions[index_question].question;
        output1.innerHTML = " ";
        let clicked = false;
        let propales = questions[index_question].propositions;

        console.log(propales.length /2);
        for (let index = 0; index < propales.length /2; index++) {
            let nouvelleProposition = document.createElement('button');
            nouvelleProposition.id = propales[index];
            nouvelleProposition.innerText = propales[index];
            nouvelleProposition.classList.add('propale');
            document.querySelector('.haut').appendChild(nouvelleProposition);
            
        }
        for (let index = propales.length /2 ; index < propales.length; index++) {
            let nouvelleProposition = document.createElement('button');
            nouvelleProposition.id = propales[index];
            nouvelleProposition.innerText = propales[index];
            nouvelleProposition.classList.add('propale');
            document.querySelector('.bas').appendChild(nouvelleProposition);
            
        }
            
        
            
        boutons.forEach((bouton) => {
            bouton.addEventListener('click', (e) =>{
                console.log(questions[index_question].reponse);
                next.style.visibility ="visible";
                if (clicked == false){ //Cette boucle permet de vérifier si le joueur à déjà joué pour qu'il ne puisse pas se rajouter des points artificiellement.
                    if (e.target.textContent == questions[index_question].reponse) {
                        console.log(e.target.id);
                        console.log("Bonne réponse");
                        document.getElementById(e.target.id).classList.add('good');
                        score += 10;
                        output1.innerHTML="GG t'as trouvé";
                        clicked = true;
                    } else if (e.target.textContent !== questions[index_question].reponse) {
                        console.log(e.target.id);
                        console.log("caca");
                        document.getElementById(e.target.id).classList.add('bad');
                        score += 0;
                        output1.innerHTML=`Et non c'était ${questions[index_question].reponse}`;
                        clicked = true;
                    }
            
               } else if (clicked == true) {
                    console.log("Tu as déjà cliqué n'essayes pas de faire augmenter ton score artificiellement");
                    score += 0;
                }
             })
        })
    }
enonce.innerHTML =`Bienveunu dans ce quiz sur My Hero Academia il comporte ${questions.length} questions et le score maximum possible est de ${questions.length * 10}. <br> Bonne chance`;

play.addEventListener('click', () => {
    play.remove()



    quiz(i)
})

next.addEventListener('click', () => {
    next.style.visibility = 'hidden';
    clicked = false;
    output1.innerHTML = " ";
    document.querySelectorAll('.propale').forEach((bouton) =>{
        bouton.remove();
    })
    i++
    if (i < questions.length) {
        
        quiz(i)
    } else {
        enonce.innerHTML=`Ton score est de ${score}. Pour recommencer rafraichis la page`;
    }
        
})



