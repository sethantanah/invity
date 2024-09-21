// // const slider = document.querySelector('.gallery');
// // const carouselTags = document.querySelector('.js-carousel-list');
const slides = document.querySelector('.slides');
const gallery = document.querySelector('.gallery');
const gallery2 = document.querySelector('.gallery2');
let images = [];
for (let index = 1; index <= 13; index++) {
    try{
        const path = `/assets/gallery/${index}.jpg`;
        images.push(path)
    
        slides.innerHTML += `<div class="hidden duration-700 ease-in-out object-contain" data-carousel-item>
                                <img src="${path}"
                                    class="block absolute object-contain md:object-cover md:h-[500px] top-1/2 left-1/2 w-full -translate-x-1/2 -translate-y-1/2"
                                    alt="..." loading="lazy">
                            </div>`;
    
        gallery.innerHTML += `<img src="${path}" alt="" loading="lazy" />`
        gallery2.innerHTML += `<div class="relative"><img src="${path}" loading="lazy" alt="" class="w-full h-100 object-cover  shadow-lg cursor-pointer"></div>`;
    }catch(error){

    }
}

// Fullscreen view logic
const fullscreenModal = document.getElementById('fullscreenModal');
const fullscreenImage = document.getElementById('fullscreenImage');
const closeModal = document.getElementById('closeModal');

gallery2.addEventListener('click', function(e) {
    if (e.target.tagName === 'IMG') {
        fullscreenImage.src = e.target.src;
        fullscreenModal.style.display = 'flex';
    }
});

closeModal.addEventListener('click', function() {
    fullscreenModal.style.display = 'none';
});


// const text1_options = [
//     "On June 3, 1975, Vivian and I met, and our love story began.",
//     "On that unforgettable day, we realized how laughter can keep us together through anything.",
//     "On a quiet evening, we sat by the fire and reflected on the beautiful moments that shaped our lives.",
//     "On a warm summer day, we promised to grow and learn together, hand in hand, through every challenge."
//   ];
  
//   const text2_options = [
//     "1 min. read",
//     "1 min. read",
//     "2 min. read",
//     "1 min. read"
//   ];
//   const color_options = ["#EBB9D2", "#FE9968", "#7FE0EB", "#6CE5B1"];
//   const image_options = [
//     'assets/gallery/1.jpg',
//     'assets/gallery/1.jpg',
//     'assets/gallery/1.jpg',
//     'assets/gallery/1.jpg'
//   ];
//   var i = 0;
//   const currentOptionText1 = document.getElementById("current-option-text1");
//   const currentOptionText2 = document.getElementById("current-option-text2");
//   const currentOptionImage = document.getElementById("image");
//   const carousel = document.getElementById("carousel-wrapper");
//   const mainMenu = document.getElementById("menu");
//   const optionPrevious = document.getElementById("previous-option");
//   const optionNext = document.getElementById("next-option");
  
  
//   currentOptionText1.innerText = text1_options[i];
//   currentOptionText2.innerText = text2_options[i];
//   currentOptionImage.style.backgroundImage = "url(" + image_options[i] + ")";
//   mainMenu.style.background = color_options[i];
  
//   optionNext.onclick = function () {
//     i = i + 1;
//     i = i % text1_options.length;
//     currentOptionText1.dataset.nextText = text1_options[i];
  
//     currentOptionText2.dataset.nextText = text2_options[i];
  
//     mainMenu.style.background = color_options[i];
//     carousel.classList.add("anim-next");
    
//     setTimeout(() => {
//       currentOptionImage.style.backgroundImage = "url(" + image_options[i] + ")";
//     }, 455);
    
//     setTimeout(() => {
//       currentOptionText1.innerText = text1_options[i];
//       currentOptionText2.innerText = text2_options[i];
//       carousel.classList.remove("anim-next");
//     }, 650);
//   };
  
//   optionPrevious.onclick = function () {
//     if (i === 0) {
//       i = text1_options.length;
//     }
//     i = i - 1;
//     currentOptionText1.dataset.previousText = text1_options[i];
  
//     currentOptionText2.dataset.previousText = text2_options[i];
  
//     mainMenu.style.background = color_options[i];
//     carousel.classList.add("anim-previous");
  
//     setTimeout(() => {
//       currentOptionImage.style.backgroundImage = "url(" + image_options[i] + ")";
//     }, 455);
    
//     setTimeout(() => {
//       currentOptionText1.innerText = text1_options[i];
//       currentOptionText2.innerText = text2_options[i];
//       carousel.classList.remove("anim-previous");
//     }, 650);
//   };











// const cardsContainer = document.querySelector(".card-carousel");
// const cardsController = document.querySelector(".card-carousel + .card-controller")

// class DraggingEvent {
//   constructor(target = undefined) {
//     this.target = target;
//   }
  
//   event(callback) {
//     let handler;
    
//     this.target.addEventListener("mousedown", e => {
//       e.preventDefault()
      
//       handler = callback(e)
      
//       window.addEventListener("mousemove", handler)
      
//       document.addEventListener("mouseleave", clearDraggingEvent)
      
//       window.addEventListener("mouseup", clearDraggingEvent)
      
//       function clearDraggingEvent() {
//         window.removeEventListener("mousemove", handler)
//         window.removeEventListener("mouseup", clearDraggingEvent)
      
//         document.removeEventListener("mouseleave", clearDraggingEvent)
        
//         handler(null)
//       }
//     })
    
//     this.target.addEventListener("touchstart", e => {
//       handler = callback(e)
      
//       window.addEventListener("touchmove", handler)
      
//       window.addEventListener("touchend", clearDraggingEvent)
      
//       document.body.addEventListener("mouseleave", clearDraggingEvent)
      
//       function clearDraggingEvent() {
//         window.removeEventListener("touchmove", handler)
//         window.removeEventListener("touchend", clearDraggingEvent)
        
//         handler(null)
//       }
//     })
//   }
  
//   // Get the distance that the user has dragged
//   getDistance(callback) {
//     function distanceInit(e1) {
//       let startingX, startingY;
      
//       if ("touches" in e1) {
//         startingX = e1.touches[0].clientX
//         startingY = e1.touches[0].clientY
//       } else {
//         startingX = e1.clientX
//         startingY = e1.clientY
//       }
      

//       return function(e2) {
//         if (e2 === null) {
//           return callback(null)
//         } else {
          
//           if ("touches" in e2) {
//             return callback({
//               x: e2.touches[0].clientX - startingX,
//               y: e2.touches[0].clientY - startingY
//             })
//           } else {
//             return callback({
//               x: e2.clientX - startingX,
//               y: e2.clientY - startingY
//             })
//           }
//         }
//       }
//     }
    
//     this.event(distanceInit)
//   }
// }


// class CardCarousel extends DraggingEvent {
//   constructor(container, controller = undefined) {
//     super(container)
    
//     // DOM elements
//     this.container = container
//     this.controllerElement = controller
//     this.cards = container.querySelectorAll(".card")
    
//     // Carousel data
//     this.centerIndex = (this.cards.length - 1) / 2;
//     this.cardWidth = this.cards[0].offsetWidth / this.container.offsetWidth * 100
//     this.xScale = {};
    
//     // Resizing
//     window.addEventListener("resize", this.updateCardWidth.bind(this))
    
//     if (this.controllerElement) {
//       this.controllerElement.addEventListener("keydown", this.controller.bind(this))      
//     }

    
//     // Initializers
//     this.build()
    
//     // Bind dragging event
//     super.getDistance(this.moveCards.bind(this))
//   }
  
//   updateCardWidth() {
//     this.cardWidth = this.cards[0].offsetWidth / this.container.offsetWidth * 100
    
//     this.build()
//   }
  
//   build(fix = 0) {
//     for (let i = 0; i < this.cards.length; i++) {
//       const x = i -  this.centerIndex;
//       const scale = this.calcScale(x)
//       const scale2 = this.calcScale2(x)
//       const zIndex = -(Math.abs(i - this.centerIndex))
      
//       const leftPos = this.calcPos(x, scale2)
     
      
//       this.xScale[x] = this.cards[i]
      
//       this.updateCards(this.cards[i], {
//         x: x,
//         scale: scale,
//         leftPos: leftPos,
//         zIndex: zIndex
//       })
//     }
//   }
  
  
//   controller(e) {
//     const temp = {...this.xScale};
      
//       if (e.keyCode === 39) {
//         // Left arrow
//         for (let x in this.xScale) {
//           const newX = (parseInt(x) - 1 < -this.centerIndex) ? this.centerIndex : parseInt(x) - 1;

//           temp[newX] = this.xScale[x]
//         }
//       }
      
//       if (e.keyCode == 37) {
//         // Right arrow
//         for (let x in this.xScale) {
//           const newX = (parseInt(x) + 1 > this.centerIndex) ? -this.centerIndex : parseInt(x) + 1;

//           temp[newX] = this.xScale[x]
//         }
//       }
      
//       this.xScale = temp;
      
//       for (let x in temp) {
//         const scale = this.calcScale(x),
//               scale2 = this.calcScale2(x),
//               leftPos = this.calcPos(x, scale2),
//               zIndex = -Math.abs(x)

//         this.updateCards(this.xScale[x], {
//           x: x,
//           scale: scale,
//           leftPos: leftPos,
//           zIndex: zIndex
//         })
//       }
//   }
  
//   calcPos(x, scale) {
//     let formula;
    
//     if (x < 0) {
//       formula = (scale * 100 - this.cardWidth) / 2
      
//       return formula

//     } else if (x > 0) {
//       formula = 100 - (scale * 100 + this.cardWidth) / 2
      
//       return formula
//     } else {
//       formula = 100 - (scale * 100 + this.cardWidth) / 2
      
//       return formula
//     }
//   }
  
//   updateCards(card, data) {
//     if (data.x || data.x == 0) {
//       card.setAttribute("data-x", data.x)
//     }
    
//     if (data.scale || data.scale == 0) {
//       card.style.transform = `scale(${data.scale})`

//       if (data.scale == 0) {
//         card.style.opacity = data.scale
//       } else {
//         card.style.opacity = 1;
//       }
//     }
   
//     if (data.leftPos) {
//       card.style.left = `${data.leftPos}%`        
//     }
    
//     if (data.zIndex || data.zIndex == 0) {
//       if (data.zIndex == 0) {
//         card.classList.add("highlight")
//       } else {
//         card.classList.remove("highlight")
//       }
      
//       card.style.zIndex = data.zIndex  
//     }
//   }
  
//   calcScale2(x) {
//     let formula;
   
//     if (x <= 0) {
//       formula = 1 - -1 / 5 * x
      
//       return formula
//     } else if (x > 0) {
//       formula = 1 - 1 / 5 * x
      
//       return formula
//     }
//   }
  
//   calcScale(x) {
//     const formula = 1 - 1 / 5 * Math.pow(x, 2)
    
//     if (formula <= 0) {
//       return 0 
//     } else {
//       return formula      
//     }
//   }
  
//   checkOrdering(card, x, xDist) {    
//     const original = parseInt(card.dataset.x)
//     const rounded = Math.round(xDist)
//     let newX = x
    
//     if (x !== x + rounded) {
//       if (x + rounded > original) {
//         if (x + rounded > this.centerIndex) {
          
//           newX = ((x + rounded - 1) - this.centerIndex) - rounded + -this.centerIndex
//         }
//       } else if (x + rounded < original) {
//         if (x + rounded < -this.centerIndex) {
          
//           newX = ((x + rounded + 1) + this.centerIndex) - rounded + this.centerIndex
//         }
//       }
      
//       this.xScale[newX + rounded] = card;
//     }
    
//     const temp = -Math.abs(newX + rounded)
    
//     this.updateCards(card, {zIndex: temp})

//     return newX;
//   }
  
//   moveCards(data) {
//     let xDist;
    
//     if (data != null) {
//       this.container.classList.remove("smooth-return")
//       xDist = data.x / 250;
//     } else {

      
//       this.container.classList.add("smooth-return")
//       xDist = 0;

//       for (let x in this.xScale) {
//         this.updateCards(this.xScale[x], {
//           x: x,
//           zIndex: Math.abs(Math.abs(x) - this.centerIndex)
//         })
//       }
//     }

//     for (let i = 0; i < this.cards.length; i++) {
//       const x = this.checkOrdering(this.cards[i], parseInt(this.cards[i].dataset.x), xDist),
//             scale = this.calcScale(x + xDist),
//             scale2 = this.calcScale2(x + xDist),
//             leftPos = this.calcPos(x + xDist, scale2)
      
      
//       this.updateCards(this.cards[i], {
//         scale: scale,
//         leftPos: leftPos
//       })
//     }
//   }
// }


// const text4_options = [
//     "On June 3, 1975, Vivian and I met, and our love story began.",
//     "On that unforgettable day, we realized how laughter can keep us together through anything.",
//     "On a quiet evening, we sat by the fire and reflected on the beautiful moments that shaped our lives.",
//     "On a warm summer day, we promised to grow and learn together, hand in hand, through every challenge."
//   ];
  

//   const image_options4 = [
//     'assets/gallery/1.jpg',
//     'assets/gallery/2.jpg',
//     'assets/gallery/3.jpg',
//     'assets/gallery/4.jpg',
//   ];


// const cardCarousel = document.querySelector('.card-carousel');

// image_options4.forEach((image, index) => {
//     const cardItem = document.createElement('div');
//     cardItem.className = 'card';
//     cardItem.id = `${index + 1}`;

//     // Create the image container
//     const imageContainer = document.createElement('div');
//     imageContainer.className = 'image-container';
//     imageContainer.style.backgroundImage = `url(${image})`;

//     // Create the text paragraph
//     const textParagraph = document.createElement('p');
//     textParagraph.textContent = (index + 1) +  '. ' + text4_options[index];

//     // Append the image container and paragraph to the card
//     cardItem.appendChild(imageContainer);
//     cardItem.appendChild(textParagraph);

//     // Append the card to the cardCarousel
//     cardCarousel.appendChild(cardItem);

//     if((index+1) === image_options.length){
//         const carousel2 = new CardCarousel(cardsContainer);
//         document.querySelector('.story-end').classList.add('hidden');
//     }
// });



