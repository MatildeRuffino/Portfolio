function initLoader(){const o=["Prima frase","Seconda frase","Terza frase","quarta frase","quinta frase"];let i=0;!function t(){$("#phrase").text(o[i]);let e=1==(i=(i+1)%o.length)?500:150;0===i&&(e=3e3),setTimeout(t,e)}(),gsap.timeline().set("#loader",{top:0}).to("#loader",{duration:.8,top:"-100%",ease:"Power4.easeInOut",delay:1.45}).to("#phrase-container",{duration:.8,opacity:0,ease:"Power4.easeInOut"},"<").to("#loader .rounded-div",{duration:1.2,height:"0vh",ease:"Power4.easeInOut"},"=-.8").set("html",{cursor:"auto"},"=-.8")}let showAnim;function initHeader(){showAnim=gsap.from("header",{yPercent:-100,paused:!0,duration:.2}).progress(1),ScrollTrigger.create({start:"top top",end:99999,onUpdate:t=>{-1===t.direction?showAnim.play():showAnim.reverse()}})}function initSocialButton(){function t(){gsap.to($("#SocialButton, #SocialButton .MagneticChild"),1.5,{x:0,y:0,ease:"elastic.out(1, 0.3)",duration:.5}),$("#SocialButton").removeClass("magnetic").css({height:"300px",width:"200px",borderRadius:"30px"}),$("#card-photo").css("transform","scale(0.36) translate(176px, 165px)"),$("#card-socials").css({height:"35px",opacity:"1"})}$("#SocialButton").on("mouseleave",function(){setTimeout(function(){$("#card-photo").css("transform","scale(0.3) translate(220px, 230px)")},300),$(this).addClass("magnetic").css({height:"60px",width:"60px"})}),$("#SocialButton").on("click",t),$("#Social-icon").on("click",()=>{$("#SocialButton").hasClass("magnetic")||($("#SocialButton").off("click"),setTimeout(function(){$("#card-photo").css("transform","scale(0.3) translate(220px, 230px)"),$("#SocialButton").on("click",t)},300),$("#SocialButton").addClass("magnetic"),$("#SocialButton").css({height:"60px",width:"60px "}))})}let animationExecuted=!1;function initChangeSection(){var t=document.querySelectorAll('input[type="radio"]');const e=document.querySelector(".background1"),o=document.querySelector(".background2"),i=document.querySelector(".tab"),n=(t.forEach(function(t){t.addEventListener("change",function(){"radio-2"===this.id&&this.checked?(e.style.opacity=0,o.style.opacity=1,i.style.color="white"):(e.style.opacity=1,o.style.opacity=0,i.style.color="black")})}),100),a=$("#overlay");let r=!1;function c(e){var t,o;r||(r=!0,(t=$(".content.active")).length&&((o=t).css({opacity:0}),$("footer").css({opacity:0}),setTimeout(function(){o.hide()},n),t.removeClass("active")),a.css("z-index",1),a.css({opacity:1,pointerEvents:"auto"}),setTimeout(function(){a.css({opacity:0,pointerEvents:"none"});var t=$("#"+e);t.css({display:"flex",opacity:1}),$("footer").css({opacity:1}),t.addClass("active"),animationExecuted||(InitDivisorAnim(),animationExecuted=!0),r=!1,setTimeout(function(){a.css("z-index",-1)},300)},300))}$('input[name="tabsSelection"]').on("change",function(){$(".ScrollDots").css("position","absolute"),c(this.id.replace("radio","content")),setTimeout(function(){history.scrollRestoration="manual",window.scrollTo(0,0)},50)});document.getElementById("changeSectionManual2").addEventListener("click",function(){showAnim.play(),setTimeout(()=>{document.getElementById("radio-2").checked=!0,c("content-2"),e.style.opacity=0,o.style.opacity=1,i.style.color="white"},300)}),window.location.href;"Section2"===new URLSearchParams(window.location.search).get("source")&&(showAnim.play(),setTimeout(()=>{document.getElementById("radio-2").checked=!0,c("content-2"),e.style.opacity=0,o.style.opacity=1,i.style.color="white"},300)),document.getElementById("changeSectionManual1").addEventListener("click",function(){showAnim.play(),setTimeout(()=>{document.getElementById("radio-1").checked=!0,c("content-1"),e.style.opacity=1,o.style.opacity=0,i.style.color="black"},300)})}function initMenuButton(){function t(){gsap.to([$("#MenuButton"),$("#MenuButton").find(".MagneticChild")],1.5,{x:0,y:0,ease:"elastic.out(1, 0.3)",duration:.5}),document.querySelector("lord-icon").style.marginBottom="auto",document.querySelector("lord-icon").style.marginTop="auto",document.querySelector("lord-icon").style.marginBottom="-10%",document.querySelector("lord-icon").style.marginTop="-10%",$("#MenuButton").removeClass("magnetic").css({height:"300px",width:"200px",borderRadius:"30px"})}$("#MenuButton").on("mouseleave",function(){document.querySelector("lord-icon").style.marginBottom="0",document.querySelector("lord-icon").style.marginTop="0",$("#MenuButton").addClass("magnetic").css({height:"60px",width:"60px"})}),$("#MenuButton").on("click",t),$("#MenuButton-icon").on("click",()=>{$("#MenuButton").hasClass("magnetic")||($("#MenuButton").off("click"),setTimeout(function(){$("#MenuButton").on("click",t)},300),$("#MenuButton").addClass("magnetic"),$("#MenuButton").css({height:"60px",width:"60px "}))})}function initWelcomeSlider(){gsap.to(".OverlaySlider",{x:"0%",ease:"Linear.out",scrollTrigger:{trigger:".WelcomeSlider",start:"center center",end:"300% center",scrub:!0,pin:!0}})}function initParallax(){var i;$.fn.is_on_screen=function(){var t=$(window),e={top:t.scrollTop(),left:t.scrollLeft()},t=(e.bottom=e.top+t.height(),this.offset());return t.bottom=t.top+this.outerHeight(),!(e.bottom<t.top||e.top>t.bottom)},$(window).scroll(function(t){i=$(this).scrollTop(),$(window).scrollTop(),$(".parallax ").each(function(){var t,e,o;$(this).is_on_screen()&&(e=$(this).offset().top,t=$(this).find("img"),e=.3*(e-i),o=parseFloat(t.css("transform").split(",")[3]),t.css({transform:"translate3d(0, "+-e+"px, 0) scale("+o+","+o+")"}))})})}function InitParagraphAnim(){gsap.utils.toArray(".animateP").forEach(t=>{gsap.set(t,{autoAlpha:0}),ScrollTrigger.create({trigger:t,start:"top 100%",end:"bottom 20%",animation:gsap.fromTo(t,{y:100,autoAlpha:0},{duration:1,delay:.3,y:0,autoAlpha:1,ease:"expo",overwrite:"auto"}),toggleActions:"play none none reverse",scrub:.5})})}function InitImageAnimation(){var t=document.querySelector(".FirstWrapper img:nth-child(3)"),t=(gsap.fromTo(t,{x:"10%"},{x:"0%",ease:"cubic-bezier(0.68, -0.55, 0.265, 1.55)",scrollTrigger:{trigger:t,start:"top center",end:"bottom center",scrub:!0}}),document.querySelector(".SecondWrapper img:nth-child(1)"));gsap.fromTo(t,{x:"-10%"},{x:"0%",ease:"cubic-bezier(0.68, -0.55, 0.265, 1.55)",scrollTrigger:{trigger:t,start:"top center",end:"bottom center",scrub:!0}})}function InitCitAnimation(){gsap.registerPlugin(ScrollTrigger),gsap.set(".about_text_p",{autoAlpha:0,yPercent:200});{var t=document.querySelector(".about_text_pWrap").textContent.split("\n").filter(t=>""!==t.trim());const i=document.querySelector(".about_text");for(;i.firstChild;)i.removeChild(i.firstChild);t.forEach(t=>{var e=document.createElement("div"),o=(e.className="about_text_pWrap",document.createElement("div"));o.className="about_text_p",o.textContent=t,e.appendChild(o),i.appendChild(e)})}setTimeout(()=>{ScrollTrigger.batch(".about_text",{onEnter:t=>{t.forEach((t,e)=>{gsap.to(t.querySelectorAll(".about_text_p"),{autoAlpha:1,transform:"translateY(0%)",duration:.6,ease:"power1.inOut",stagger:.1,delay:0})})},onLeaveBack:t=>{t.forEach(t=>{gsap.to(t.querySelectorAll(".about_text_p"),{autoAlpha:0,transform:"translateY(200%)",duration:.3,ease:"power1.inOut"})})},start:"top 95%",end:"bottom 55%"})},1e3)}function initsimpleLightbox(){$(".zoomItem a").simpleLightbox({closeText:'<i class="fa fa-times" aria-hidden="true"></i>',navText:['<i class="fa fa-chevron-left" aria-hidden="true"></i>','<i class="fa fa-chevron-right" aria-hidden="true"></i>'],captions:!0,captionSelector:"img",captionsData:"alt",fileExt:"webp",animationSpeed:200,loop:!0}),$(".zoomItemCartoon a").simpleLightbox({closeText:'<i class="fa fa-times" aria-hidden="true"></i>',navText:['<i class="fa fa-chevron-left" aria-hidden="true"></i>','<i class="fa fa-chevron-right" aria-hidden="true"></i>'],captions:!0,captionSelector:"img",captionsData:"alt",animationSpeed:200,disableScroll:!0,fileExt:"webp",loop:!0}),$(".zoomItemSketch a").simpleLightbox({closeText:'<i class="fa fa-times" aria-hidden="true"></i>',navText:['<i class="fa fa-chevron-left" aria-hidden="true"></i>','<i class="fa fa-chevron-right" aria-hidden="true"></i>'],captions:!0,captionSelector:"img",captionsData:"alt",fileExt:"webp",animationSpeed:200,disableScroll:!0,loop:!0}),$(".zoomItemIll a").simpleLightbox({closeText:'<i class="fa fa-times" aria-hidden="true"></i>',navText:['<i class="fa fa-chevron-left" aria-hidden="true"></i>','<i class="fa fa-chevron-right" aria-hidden="true"></i>'],captions:!0,captionSelector:"img",captionsData:"alt",animationSpeed:200,fileExt:"webp",disableScroll:!0,loop:!0}),$(".zoomItemAnim a").simpleLightbox({closeText:'<i class="fa fa-times" aria-hidden="true"></i>',navText:['<i class="fa fa-chevron-left" aria-hidden="true"></i>','<i class="fa fa-chevron-right" aria-hidden="true"></i>'],captions:!0,captionSelector:"img",captionsData:"alt",animationSpeed:200,fileExt:"webp",disableScroll:!0,loop:!0})}function initMagneticButtons(){function e(t){var e=$(this).find(".magnetic"),o=e.find(".MagneticChild"),i=e[0].getBoundingClientRect(),n=parseInt(e.data("strength"),10);gsap.to([e,o],1.5,{x:((t.clientX-i.left)/e.width()-.5)*n,y:((t.clientY-i.top)/e.height()-.5)*n,rotate:"0.001deg",ease:"power4.out"})}function o(t){var e=$(this).find(".magnetic"),o=e.find(".MagneticChild");gsap.to([e,o],1.5,{x:0,y:0,ease:"elastic.out(1, 0.3)"})}$(".magnetic").each(function(){var t=$(this).closest(".OuterMagneticRange");t.on("mousemove",e),t.on("mouseleave",o)})}function initLinks(){document.querySelectorAll(".link").forEach(t=>{var e,o;t.innerHTML="<div><span>"+t.textContent.trim().split("").join("</span><span>")+"</span></div>",t.querySelectorAll("span").forEach(t=>t.innerHTML=" "==t.textContent?"&nbsp;":t.textContent),t.insertAdjacentHTML("beforeend",'<div><svg preserveAspectRatio="none" viewBox="0 0 192 5"><path d="M191.246 4H129C129 4 127.781 4.00674 127 4C114.767 3.89447 108.233 1 96 1C83.7669 1 77.2327 3.89447 65 4C64.219 4.00674 63 4 63 4H0.751923" /></svg></div>'),e=".OtherTextWrapper .link div span:nth-child(n)",o=.01,t.querySelectorAll(e).forEach((t,e)=>{t.style.transitionDelay=(e+1)*o+"s"})})}function InitDivisorAnim(){const o=document.querySelectorAll(".LabelDivisore");var t=document.querySelectorAll(".divisore");o.forEach(t=>{var e=gsap.timeline();e.from(t,{opacity:0,y:30,duration:.2,ease:"power2.inOut"}),ScrollTrigger.create({trigger:t,start:"top 80%",end:"bottom 80%",animation:e,toggleActions:"play none none reverse"})}),t.forEach((t,e)=>{e=o[e];gsap.timeline({scrollTrigger:{trigger:e,start:"top 80%",end:"bottom 80%",toggleActions:"play none none reverse"}}).fromTo(t,{width:"0px"},{width:"100%",duration:.5,ease:"power2.inOut"})})}document.getElementById("scroll-to-end").addEventListener("click",function(t){t.preventDefault();t=document.body.scrollHeight;{var n=t,a=2e3;const r=window.scrollY,c=performance.now();requestAnimationFrame(function t(e){var o,i,e=e-c;e<a?(window.scrollTo(0,(o=r,i=n,(e/=a/2)<1?i/2*e*e+o:-i/2*(--e*(e-2)-1)+o)),requestAnimationFrame(t)):window.scrollTo(0,n)})}}),$(document).ready(function(){initWelcomeSlider(),initHeader(),initSocialButton(),initChangeSection(),initMenuButton(),InitImageAnimation(),initsimpleLightbox(),InitDivisorAnim(),InitParagraphAnim(),768<window.innerWidth&&(InitCitAnimation(),initMagneticButtons(),initLinks(),initParallax())}),$(window).on("beforeunload",()=>window.scrollTo(0,0)),$(window).on("unload",()=>document.getElementById("radio-1").checked=!0);
