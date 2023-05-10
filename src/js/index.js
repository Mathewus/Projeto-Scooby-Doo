// ======= Declaração de variáveis, que podem ser tanto constantes "const" como também podem ser "var" =======



const botaoMenu = document.querySelector(".nav-bar");

const subMenu = document.getElementById("sub-menu");

const body = document.querySelector(".corpo");

const fecharM = document.querySelector('.fechar-menu');


// ======= Uma forma que pode ser usada para abrir e fechar menus: =======


botaoMenu.addEventListener("click", () => {

    subMenu.classList.add("aberto");
    body.classList.add("scroll");
    fecharM.classList.add("ativado");
});


fecharM.addEventListener("click", () => {

    subMenu.classList.remove("aberto");
    body.classList.remove("scroll");
    fecharM.classList.remove("ativado");

 });


 // ======= Outra forma que também pode ser usada para abrir e fechar menus, logo abaixo: =======


//  document.querySelector('.nav-bar').addEventListener('click', () => {

//     document.getElementById('sub-menu').classList.add('aberto');
//     document.querySelector('.corpo').classList.add("scroll");
//     document.querySelector('.fechar-menu').classList.add('ativado');

//   });

//  document.querySelector('.fechar-menu').addEventListener('click', () => {

//     document.getElementById('sub-menu').classList.remove('aberto');
//     document.querySelector('.corpo').classList.remove("scroll");
//     document.querySelector('.fechar-menu').classList.remove('ativado');

//   });