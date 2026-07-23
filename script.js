let nota = 0;


const estrelas = document.querySelectorAll("#estrelas span");


estrelas.forEach(estrela=>{

estrela.addEventListener("click",()=>{

nota = estrela.dataset.star;


estrelas.forEach(e=>{

e.classList.remove("ativa");

});


for(let i=0;i<nota;i++){

estrelas[i].classList.add("ativa");

}

});

});



function enviarFeedback(){


let nome=document.getElementById("nome").value;

let mensagem=document.getElementById("mensagem").value;


if(nome==="" || mensagem==="" || nota==0){

alert("Preencha todos os campos e escolha uma avaliação!");

return;

}


let feedback={

nome:nome,
mensagem:mensagem,
nota:nota

};


let lista=JSON.parse(localStorage.getItem("feedbacks")) || [];


lista.push(feedback);


localStorage.setItem("feedbacks",JSON.stringify(lista));


mostrarFeedbacks();


document.getElementById("nome").value="";
document.getElementById("mensagem").value="";


}



function mostrarFeedbacks(){


let area=document.getElementById("listaFeedbacks");


area.innerHTML="";


let lista=JSON.parse(localStorage.getItem("feedbacks")) || [];


lista.reverse().forEach(f=>{


area.innerHTML += `

<div class="feedback-card">

<h3>${f.nome}</h3>

<div class="nota">

${"★".repeat(f.nota)}

</div>


<p>${f.mensagem}</p>


</div>

`;

});


}


mostrarFeedbacks();// ===============================
// ANIMAÇÕES DO SITE BRUNA SOUZA
// ===============================

// Animação ao rolar a página
const elementos = document.querySelectorAll(
".section, .card, .galeria img, .cta"
);

const aparecer = new IntersectionObserver((entries) => {

    entries.forEach((entry)=>{

        if(entry.isIntersecting){

            entry.target.style.opacity = "1";
            entry.target.style.transform = "translateY(0px)";

        }

    });

},{
    threshold:0.15
});

elementos.forEach((el)=>{

    el.style.opacity="0";
    el.style.transform="translateY(50px)";
    el.style.transition=".8s";

    aparecer.observe(el);

});

// ===============================
// MENU MUDA DE COR
// ===============================

const nav = document.querySelector("nav");

window.addEventListener("scroll",()=>{

    if(window.scrollY > 80){

        nav.style.background="#5e3d33";
        nav.style.boxShadow="0 10px 25px rgba(0,0,0,.25)";

    }

    else{

        nav.style.background="rgba(80,55,48,.55)";
        nav.style.boxShadow="none";

    }

});

// ===============================
// BOTÕES PULSANDO
// ===============================

const botoes=document.querySelectorAll(".btn");

setInterval(()=>{

    botoes.forEach((botao)=>{

        botao.animate([

            {transform:"scale(1)"},
            {transform:"scale(1.05)"},
            {transform:"scale(1)"}

        ],{

            duration:1500

        });

    });

},4000);

// ===============================
// CARDS
// ===============================

const cards=document.querySelectorAll(".card");

cards.forEach((card)=>{

    card.addEventListener("mousemove",(e)=>{

        const x=e.offsetX;
        const y=e.offsetY;

        card.style.background=
`radial-gradient(circle at ${x}px ${y}px,#ffcad4,#e79db0)`;

    });

    card.addEventListener("mouseleave",()=>{

        card.style.background="white";

    });

});

// ===============================
// EFEITO NAS IMAGENS
// ===============================

const imagens=document.querySelectorAll(".galeria img");

imagens.forEach((img)=>{

    img.addEventListener("mouseenter",()=>{

        img.style.filter="brightness(110%)";

    });

    img.addEventListener("mouseleave",()=>{

        img.style.filter="brightness(100%)";

    });

});

// ===============================
// TÍTULO DA PÁGINA
// ===============================

let tituloOriginal=document.title;

let piscar;

window.addEventListener("blur",()=>{

    piscar=setInterval(()=>{

        document.title="✨ Agende seu horário!";

        setTimeout(()=>{

            document.title=tituloOriginal;

        },1000);

    },2000);

});

window.addEventListener("focus",()=>{

    clearInterval(piscar);

    document.title=tituloOriginal;

});

// ===============================
// MENSAGEM NO CONSOLE
// ===============================

console.log("✨ Site desenvolvido para Bruna Souza ✨");