const dialogBox = document.getElementById('box--choose');
const tabs = document.querySelectorAll('[data-tab]');

const bttnAdd = document.getElementById('add');
const bttns = document.querySelectorAll('.choose__tab__bttn');

hideTabs = () => {
    tabs.forEach(tab => {
        tab.classList.add('hide');
        tab.classList.remove('active');
    });
};

bttnAdd.onclick = () => {
    dialogBox.classList.remove('hide');
    hideTabs();
    tabs[0].classList.remove('hide');
};

activateTab = (value) => {
    const targetTab = document.querySelectorAll(`[data-tab="${value}"]`);

    targetTab.forEach(tab => tab.classList.remove('hide'));
    targetTab.forEach(tab => tab.classList.add('active'));
}

tabs.forEach(() => {
    bttns.forEach(btn => {
        const dataValue = btn.dataset.btn;
        btn.addEventListener('click', () => {
            tabs.forEach(tab => tab.classList.add('hide'));
            if(dataValue === "front-btn"){
                hideTabs();
                activateTab("tech-front"); 
            } 
            else if (dataValue === "back-btn"){
                hideTabs();
                activateTab("tech-back");
            } else {
                null;
            }
        })
    });
});

const langs = document.querySelectorAll('.bttn--lang');
const ul = document.querySelectorAll('ul');

createLi = (text) => {
    const elementLi = document.createElement('li');
    elementLi.textContent = text;
    return elementLi;
}

dialgFunction = (lang) => {
    const lis = document.querySelectorAll('li');

    if (![...lis].some((li) => li.innerHTML === lang.innerHTML)) {
        const currentTab = document.querySelector('.choose__tab.active');

        tabDist = (text) => {
            if (currentTab.dataset.tab === "tech-front") {
                ul[0].insertAdjacentElement('beforeend', createLi(text));
                lisRemoval();
            } 
            else if (currentTab.dataset.tab === "tech-back") {
                ul[1].insertAdjacentElement('beforeend', createLi(text));
                lisRemoval();
            }
        }

        tabDist(lang.innerHTML);


        confirmation = () => {

            if (confirm("Tem mais alguma tecnologia que você gostaria de aprender?")) {
                const quest = prompt("Deseja seguir se especializando na área escolhida ou seguir se desenvolvendo para se tornar Fullstack?", "Especializar/Desenvolver");
                if (quest !== null) {
                    const normalQuest = quest.trim().toUpperCase();
                    
                    if (normalQuest.toUpperCase() === "DESENVOLVER"){
                        hideTabs();
                        activateTab("areas");

                    } 
                    else if (normalQuest.toUpperCase() === "ESPECIALIZAR"){
                        hideTabs();
                        activateTab(currentTab.dataset.tab);

                    } else {   //normalQuest should be either "DESENVOLVER" || "ESPECIALIZAR"
                        console.log(normalQuest);
                        alert('Erro. Escreva uma das palavras-chaves válidas.');

                    }
                } else {

                    dialogBox.classList.add('hide');
                }
            } else {

                dialogBox.classList.add('hide');
            }
        }
        confirmation();

    } else {
        alert('você já tem esse língua!');
        dialogBox.classList.add('hide');
    }
}

langs.forEach((lang) => {
    lang.onclick = () => {
    dialgFunction(lang);
    };
});

lisRemoval = () => {
    const lis = document.querySelectorAll('li');
    lis.forEach((list) => {
        list.onclick = () => {
            console.log(list);
            list.remove();
        }
    });
}