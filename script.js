
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


const element = document.getElementById("slide-paginate")
console.log(element.clientWidth)
console.log(element.clientHeight)
console.log(document.body.clientWidth)

new Swiper('.experience-slider', {
    speed: 600,
    loop: true,
    autoplay: {
      delay: 5000,
      disableOnInteraction: false
    },
    slidesPerView: 'auto',
    pagination: {
      el: '.swiper-pagination',
      type: 'bullets',
      clickable: true
    },
    breakpoints: {
      320: {
        slidesPerView: 1,
        spaceBetween: 20
      },

      1200: {
        slidesPerView: 3,
        spaceBetween: 20
      }
    }
  });


