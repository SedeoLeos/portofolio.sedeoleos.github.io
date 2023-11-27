
class Narcissique {
    contexteDC;
    elementNode;
    contenue;
    objectAnimation = { courantIndex: 0, debug: true, terminer: false, incrementeur: 0 };
    constructor(partial) {
        this.contexteDC = partial.contexteDC;
        this.elementNode = partial.elementNode;
        this.contenue = this.elementNode.textContent;

    }

    autoRunnig(intervale) {
        setInterval(() => {
            if (this.objectAnimation.debug === true && this.objectAnimation.terminer === false) {
                this.elementNode.textContent = this.elementNode.textContent + this.contexteDC[this.objectAnimation.courantIndex].slice(this.objectAnimation.incrementeur, this.objectAnimation.incrementeur + 1)
                this.objectAnimation.incrementeur = this.objectAnimation.incrementeur + 1

            }
            if (this.objectAnimation.terminer === true) {
                this.elementNode.textContent = this.elementNode.textContent.slice(0, this.elementNode.textContent.length - 1);
            }
            if (this.elementNode.textContent === this.contexteDC[this.objectAnimation.courantIndex]) {

                this.objectAnimation.terminer = true;
                this.objectAnimation.debug = false;
                this.objectAnimation.incrementeur = 0
            }
            if (this.elementNode.textContent === "") {
                this.objectAnimation.terminer = false;
                this.objectAnimation.debug = true;
                if (this.contexteDC.length > this.objectAnimation.courantIndex) {
                    this.objectAnimation.courantIndex = this.objectAnimation.courantIndex + 1;

                }
            }
            if (this.objectAnimation.courantIndex > this.contexteDC.length - 1) {
                this.objectAnimation.courantIndex = 0;
                this.objectAnimation.terminer = false;
                this.objectAnimation.debug = true;
                this.objectAnimation.incrementeur = 0
            }
        }, intervale)
    }
}

const narcAnimate = new Narcissique({
    contexteDC: ["Designer", "Front End Developper", "Back End Developper", "Analyst Programmeur", "Concepteur Architecte"],
    elementNode: document.getElementById('apropoInfo'),
})
narcAnimate.autoRunnig(250)



const changeTheme = document.getElementById('theme');
changeTheme.addEventListener('click',(ev)=>{
    if(changeTheme.children[0].classList.contains('bx-sun')){
        changeTheme.children[0].classList.remove('bx-sun')
        changeTheme.children[0].classList.add('bx-moon')
    }else{
        changeTheme.children[0].classList.remove('bx-moon')
        changeTheme.children[0].classList.add('bx-sun')   
    }
})

const drawer = document.getElementById('drawer');
drawer.addEventListener('click',(ev)=>{
    if(drawer.children[0].classList.contains('bx-x')){
        drawer.children[0].classList.remove('bx-x')
        drawer.children[0].classList.add('bx-menu')
        document.getElementsByTagName('body')[0].classList.remove('active')
    }else{
        drawer.children[0].classList.remove('bx-menu')
        drawer.children[0].classList.add('bx-x') 
        // console.log(document.getElementsByName('body'))
        console.log(document.getElementsByTagName('body')[0].classList.add('active'))
        // document.getElementsByTagName('body').classList.remove('active')

    }
})


