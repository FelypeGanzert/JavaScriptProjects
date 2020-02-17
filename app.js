// Data of the projects
const projectsData = 
[
    {
        name: 'Verificador Idades',
        img: 'verificadorIdade',
        url: './VerificadorIdades/idades.html'
    },
    {
        name: 'Contador',
        img: 'contador',
        url: './Contador/contador.html'
    },
    {
        name: 'Tabuada',
        img: 'tabuada',
        url: './Tabuada/tabuada.html'
    },
    {
        name: 'Slide Show Test',
        img: 'slideShow',
        url: './slideShowTest/index.html'
    },
    {
        name: 'Loan Calculator',
        img: 'loanCalculator',
        url: './LoanCalculator/index.html'
    },
    {
        name: 'Task List',
        img: 'taskList',
        url: './Task_List/index.html'
    },
    {
        name: 'Book List',
        img: 'book-List',
        url: './BookList/index.html'
    },
    {
        name: 'Formulário com Validação',
        img: 'formularioValidacao',
        url: './FormValidation/index.html'
    },
    {
        name: 'Profile Scrooler',
        img: 'profileScrooler',
        url: './ProfileScroller/index.html'
    },
    {
        name: 'Music Lyric API',
        img: 'lyricSearch',
        url: './MusicLyricAPI/index.html'
    },
    {
        name: 'Tracalorie',
        img: 'tracalorie',
        url: './TracalorieProject1/index.html'
    },
    {
        name: 'CSS Form',
        img: 'CSSForm',
        url: './FormOnlyCSSStyle/form.html'
    },
];

document.addEventListener('DOMContentLoaded', addProjects);

function addProjects(){
    UIprojects = document.getElementById('projects');
    projectsData.forEach(p => {
        let output = `
            <div class="project">
                  <a href="${p.url}">
                    <img src="./imgs/${p.img}.png">
                    ${p.name}
                </a>
            </div>
        `;
        UIprojects.innerHTML += output;
    })  
}
