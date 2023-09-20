/* --------------------------- simpleLitBox setup --------------------------- */

function changeSection(sectionNumber) {

  const Buttons = document.querySelectorAll('.button-row .newbutton');

  const buttons = document.querySelectorAll('.button-row .newbutton');

  buttons.forEach(button => {
    button.style.backgroundColor = 'black';
  });


  Buttons[sectionNumber -1].style.background = "#279eff";

  const sections = document.querySelectorAll('.section');
  sections.forEach(section => {
    section.classList.remove('active');
  });
  document.getElementById(`section${sectionNumber}`).classList.add('active');

  initializeSimpleLightbox(`#masonry-${sectionNumber}`);
}

function initializeSimpleLightbox(masonryId) {
  
  $(masonryId + ' .item a').simpleLightbox({
    'showCounter': false,
    'closeText': '<i class="fa fa-times" aria-hidden="true"></i>',
    'navText': ['<i class="fa fa-chevron-left" aria-hidden="true"></i>', '<i class="fa fa-chevron-right" aria-hidden="true"></i>'],
    'captions': true, // Abilita le didascalie
    'captionSelector': 'img',
    'captionsData': 'alt',
    'fileExt': 'webp',
    'animationSpeed': 100,
    'loop': true,
  });

}


/* ------------ Funzione per aggiungere le immagini alla griglia ------------ */
function populateGrid(data, section) {
  const grid = section.querySelector(".masonry");

  data.forEach(imagePath => {
    const item = document.createElement("div");
    item.className = "item";

    const link = document.createElement("a");
    link.href = imagePath;

    const img = document.createElement("img");
    img.setAttribute('src', imagePath); //per il lazy load, questo diventa data-src
    img.className = "img-responsive"; //questo invece img-responsive lazyload, ricorda di decommentare anche la libreria nel Gallery.html

    link.appendChild(img);
    item.appendChild(link);
    grid.appendChild(item);
  });
}

function initScrollToEnd(){
  document.getElementById('scroll-to-end').addEventListener('click', function(event) {
    event.preventDefault(); // Evita l'azione di default del link
    
    // Ottieni l'altezza totale della pagina
  
    // Utilizza l'animazione dello smooth scroll per scorrere verso la posizione desiderata
  
    function scrollToSmoothly(targetPosition, duration) {
      const startPosition = window.scrollY;
      const startTime = performance.now();
    
      function scrollAnimation(currentTime) {
        const elapsedTime = currentTime - startTime;
        if (elapsedTime < duration) {
          window.scrollTo(0, easeInOutQuad(startPosition, targetPosition, elapsedTime, duration));
          requestAnimationFrame(scrollAnimation);
        } else {
          window.scrollTo(0, targetPosition);
        }
      }
    
      requestAnimationFrame(scrollAnimation);
    }
    
    // Esempio di utilizzo:
    const endPosition = document.body.scrollHeight; // Sostituisci con la posizione finale desiderata
    const animationDuration = 2000; // Durata in millisecondi (2 secondi in questo caso)
    scrollToSmoothly(endPosition, animationDuration);
    
    // Funzione per l'interpolazione (easing) quadratico
    function easeInOutQuad(start, end, currentTime, duration) {
      currentTime /= duration / 2;
      if (currentTime < 1) return (end / 2) * currentTime * currentTime + start;
      currentTime--;
      return (-end / 2) * (currentTime * (currentTime - 2) - 1) + start;
    }
    
  
  
  })
}

/* ----------------------------- fire al script ----------------------------- */
document.addEventListener("DOMContentLoaded", () => {
  if(window.innerWidth > 768){
  initMagneticButtons()
  }

  initMenuButton() 

  initScrollToEnd()



  const sections = document.querySelectorAll('.section');

  fetch('ImageData.json')
    .then(response => response.json())
    .then(data => {
      sections.forEach((section, index) => {
        console.log("ciao")
        const sectionNumber = index + 1;
        const sectionData = data[`section${sectionNumber}`];
        populateGrid(sectionData, section);
      });

      // Inizializza SimpleLightbox dopo aver popolato la griglia con le immagini

      
      initializeSimpleLightbox('#masonry-1');
      
 
    })
  
    .catch(error => {
      console.error('Errore nel caricamento dei dati JSON:', error);
    });

    




  /* ---------------- Serve per cambiare sezion in base al link --------------- */
  var currentURL = window.location.href;

  // Estrapola i parametri dall'URL
  var urlParams = new URLSearchParams(window.location.search);

  // Leggi il valore del parametro "source"
  var source = urlParams.get("source");

  // Fai qualcosa in base alla fonte del link
  if (source === "Illustration") {
      document.getElementById(`section1`).classList.add('active')    
  } else if (source === "Cartoon") {
      document.getElementById(`section2`).classList.add('active')
      document.getElementById(`section1`).classList.remove('active')    

      } else if (source === "Sketch") {
          document.getElementById(`section3`).classList.add('active')
          document.getElementById(`section1`).classList.remove('active')    

          }
});

function initMagneticButtons() {
  $(".magnetic").each(function() {
    const OuterMagneticRange = $(this).closest(".OuterMagneticRange");
    OuterMagneticRange.on("mousemove", moveMagnet);
    OuterMagneticRange.on("mouseleave", resetMagnet);
  });

  function moveMagnet(event) {
    const hoverColor = $(this).find(".hovercolor");
    if (hoverColor.length > 0) {
      hoverColor.css({
        height: "100%",
        top: "auto"
      });
    }

    const magnetButton = $(this).find(".magnetic");
    const ButtonText = magnetButton.find(".MagneticChild");
    const bounding = magnetButton[0].getBoundingClientRect();
    const magnetsStrength = parseInt(magnetButton.data("strength"), 10);

    gsap.to([magnetButton, ButtonText], 1.5, {
      x: ((event.clientX - bounding.left) / magnetButton.width() - 0.5) * magnetsStrength,
      y: ((event.clientY - bounding.top) / magnetButton.height() - 0.5) * magnetsStrength,
      rotate: "0.001deg",
      ease: "power4.out"
    });
  }

  function resetMagnet(event) {
    const hoverColor = $(this).find(".hovercolor");
    if (hoverColor.length > 0) {
      hoverColor.css({
        height: "0%",
        top: "0%"
      });
    }

    const magnetButton = $(this).find(".magnetic");
    const ButtonText = magnetButton.find(".MagneticChild");

    gsap.to([magnetButton, ButtonText], 1.5, {
      x: 0,
      y: 0,
      ease: "elastic.out(1, 0.3)"
    });
  }
}

function initMenuButton() {

  function Menu() {
    gsap.to([$("#MenuButton"), $("#MenuButton").find(".MagneticChild")], 1.5, {
      x: 0,
      y: 0,
      ease: "elastic.out(1, 0.3)",
      duration: 0.5
    });
    
    document.querySelector("lord-icon").style.marginBottom = "auto";
    document.querySelector("lord-icon").style.marginTop = "auto";

    document.querySelector("lord-icon").style.marginBottom = "-10%";
    document.querySelector("lord-icon").style.marginTop = "-10%";


    $("#MenuButton").removeClass("magnetic")
              .css({ height: "300px", width: "200px", borderRadius: "30px" });
  }

  $("#MenuButton").on("mouseleave", function() {
    document.querySelector("lord-icon").style.marginBottom = "0";
    document.querySelector("lord-icon").style.marginTop = "0";

    $("#MenuButton").addClass("magnetic")
              .css({ height: "60px", width: "60px" });
  });

  $("#MenuButton").on("click", Menu);

  $("#MenuButton-icon").on("click", () => {
      
    if (!$("#MenuButton").hasClass("magnetic")){
      $("#MenuButton").off("click");

      setTimeout(function() {
        $("#MenuButton").on("click", Menu);
      }, 300);

      $("#MenuButton").addClass("magnetic")
      $("#MenuButton").css({ height: "60px", width: "60px "});
    }
  });
}


$(window).on('beforeunload', () => window.scrollTo(0, 0));
