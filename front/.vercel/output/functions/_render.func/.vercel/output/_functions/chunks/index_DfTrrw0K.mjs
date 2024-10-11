/* empty css                        */
import { l as createComponent, m as renderTemplate, p as renderHead, t as renderSlot, n as maybeRenderHead, q as renderComponent, k as createAstro, o as addAttribute } from './astro/server_Cixpw2VF.mjs';
import 'kleur/colors';
import { $ as $$DefaultLayout } from './DefaultLayout_C1inHrnV.mjs';
import 'clsx';
/* empty css                         */
/* empty css                         */
import { $ as $$Separator } from './Separator_DaxyLVQN.mjs';
import { $ as $$LoadingScreen } from './LoadingScreen_G72WZtmo.mjs';

const $$Hero = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`<html lang="en" data-astro-cid-bbe6dxrz> <head><meta charset="UTF-8"><meta http-equiv="X-UA-Compatible" content="IE=edge"><meta name="viewport" content="width=device-width, initial-scale=1.0"><link href="https://fonts.googleapis.com/css2?family=Raleway:ital,wght@0,100..900;1,100..900&display=swap" rel="stylesheet">${renderHead()}</head> <body data-astro-cid-bbe6dxrz> <div class="container_all" id="container__all" data-astro-cid-bbe6dxrz> <div class="cover" data-astro-cid-bbe6dxrz> <!--INICIO WAVE--> <div class="bg_color" data-astro-cid-bbe6dxrz></div> <div class="wave w1" data-astro-cid-bbe6dxrz></div> <div class="wave w2" data-astro-cid-bbe6dxrz></div> <!--FINAL WAVE--> <div class="container__cover" data-astro-cid-bbe6dxrz> <div class="container__info" data-astro-cid-bbe6dxrz> <h1 data-astro-cid-bbe6dxrz>Elevamos tus Proyectos al</h1> <h2 data-astro-cid-bbe6dxrz>Siguiente Nivel</h2> <p data-astro-cid-bbe6dxrz>En un mundo de constante cambio, necesitas un aliado estratégico. En Krea te ofrecemos las herramientas y conocimientos necesarios para superar desafíos y maximizar el rendimiento de tus proyectos.</p> <a href="/nosotros" data-astro-cid-bbe6dxrz>Conócenos</a> </div> <div class="container__vector" data-astro-cid-bbe6dxrz> <img src="/Resources/rocket.svg" alt="rocket" data-astro-cid-bbe6dxrz> </div> </div> </div> </div> </body></html>`;
}, "C:/Users/Jesus/Documents/KREA/deploy-to-vec/front/src/components/Hero.astro", void 0);

const $$Main = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`<html lang="en" data-astro-cid-ivdev4kk> <head><meta name="viewport" content="width=device-width, initial-scale=1.0"><link rel="stylesheet" href="./Styles/GlobalCss.css">${renderHead()}</head> <body data-astro-cid-ivdev4kk> <div class="content-estadisticas" data-astro-cid-ivdev4kk> <div class="estadisticas" data-aos="fade-right" data-aos-delay="300" data-astro-cid-ivdev4kk> <i class="fa-solid fa-check-double icon" data-astro-cid-ivdev4kk></i> <h2 data-astro-cid-ivdev4kk>Encuentra un aspecto diferenciador</h2> </div> <div class="estadisticas" data-aos="fade-down" data-aos-delay="300" data-astro-cid-ivdev4kk> <i class="fa-solid fa-sack-dollar icon" data-astro-cid-ivdev4kk></i> <h2 data-astro-cid-ivdev4kk>Accede a beneficios tributarios y regalías</h2> </div> <div class="estadisticas" data-aos="fade-left" data-aos-delay="300" data-astro-cid-ivdev4kk> <i class="fa-solid fa-award icon" data-astro-cid-ivdev4kk></i> <h2 data-astro-cid-ivdev4kk>Potencia el éxito de tu empresa</h2> </div> </div>  </body> </html>`;
}, "C:/Users/Jesus/Documents/KREA/deploy-to-vec/front/src/components/Main.astro", void 0);

var __freeze$1 = Object.freeze;
var __defProp$1 = Object.defineProperty;
var __template$1 = (cooked, raw) => __freeze$1(__defProp$1(cooked, "raw", { value: __freeze$1(cooked.slice()) }));
var _a$1;
const $$CardsContainer = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate(_a$1 || (_a$1 = __template$1(["", '<body data-astro-cid-mzwocygm> <div class="flex justify-center items-center main-cont" data-astro-cid-mzwocygm> <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2" data-astro-cid-mzwocygm> ', ' </div> </div>  <link href="https://unpkg.com/aos@2.3.1/dist/aos.css" rel="stylesheet"> <script src="https://unpkg.com/aos@2.3.1/dist/aos.js" onload="AOS.init()"><\/script> </body> '])), maybeRenderHead(), renderSlot($$result, $$slots["default"]));
}, "C:/Users/Jesus/Documents/KREA/deploy-to-vec/front/src/components/CardsContainer.astro", void 0);

const $$Card = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<body data-astro-cid-dohjnao5> <div data-aos="flip-left" class="flip-card lg:flip-card-lg" data-astro-cid-dohjnao5> <div data-aos="flip-left" class="flip-card-inner" data-astro-cid-dohjnao5> <div class="flip-card-front bg-white text-black" data-astro-cid-dohjnao5> ${renderSlot($$result, $$slots["front"])} </div> <div class="flip-card-back bg-white text-white rotate" data-astro-cid-dohjnao5> ${renderSlot($$result, $$slots["back"])} </div> </div> </div>  </body> `;
}, "C:/Users/Jesus/Documents/KREA/deploy-to-vec/front/src/components/Card.astro", void 0);

const $$MainCards = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<body class="overflow-x-hidden" data-astro-cid-vtxpp4vz> <div class="flex flex-col items-center mb-8" data-astro-cid-vtxpp4vz> <h1 data-aos="fade-right" class="text-center mb-4 font-bold custom-font custom-title" data-astro-cid-vtxpp4vz>Las cifras ratifican nuestro éxito</h1> ${renderComponent($$result, "CardsContainer", $$CardsContainer, { "data-astro-cid-vtxpp4vz": true }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "Card", $$Card, { "data-astro-cid-vtxpp4vz": true }, { "back": ($$result3) => renderTemplate`<div data-astro-cid-vtxpp4vz> <p class="text-white text-center p-4" data-astro-cid-vtxpp4vz>Hemos asistido a más de 3000 empresas en diversos sectores, brindándoles soluciones personalizadas que han permitido optimizar sus procesos, incrementar su productividad y alcanzar sus objetivos.</p> </div>`, "front": ($$result3) => renderTemplate`<div data-astro-cid-vtxpp4vz> <h1 class="text-center mb-4 font-bold custom-text-color custom-font-card" data-astro-cid-vtxpp4vz>12</h1> <h2 class="text-center mb-4 font-bold custom-font-subcard" data-astro-cid-vtxpp4vz>Años de experiencia</h2> </div>` })} ${renderComponent($$result2, "Card", $$Card, { "data-astro-cid-vtxpp4vz": true }, { "back": ($$result3) => renderTemplate`<div data-astro-cid-vtxpp4vz> <p class="text-white text-center p-4" data-astro-cid-vtxpp4vz>Contamos con una tasa de ejecución del 90% en todos los proyectos que hemos gestionado. Esto se traduce en una implementación eficiente y efectiva de las estrategias propuestas.</p> </div>`, "front": ($$result3) => renderTemplate`<div data-astro-cid-vtxpp4vz> <h1 class="text-center mb-4 font-bold custom-text-color custom-font-card" data-astro-cid-vtxpp4vz>90%</h1> <h2 class="text-center mb-4 font-bold custom-font-subcard" data-astro-cid-vtxpp4vz>Ejecución</h2> </div>` })} ${renderComponent($$result2, "Card", $$Card, { "data-astro-cid-vtxpp4vz": true }, { "back": ($$result3) => renderTemplate`<div data-astro-cid-vtxpp4vz> <p class="text-white text-center p-4" data-astro-cid-vtxpp4vz>Han sido aprobados más de 40 mil millones en financiamientos para proyectos innovadores y expansiones empresariales que impulsan el desarrollo y la sostenibilidad.</p> </div>`, "front": ($$result3) => renderTemplate`<div data-astro-cid-vtxpp4vz> <h1 class="text-center mb-4 font-bold custom-text-color custom-font-card" data-astro-cid-vtxpp4vz>+40</h1> <h2 class="text-center mb-4 font-bold custom-font-subcard" data-astro-cid-vtxpp4vz>Mil millones aprobados</h2> </div>` })} ` })} </div>  </body> `;
}, "C:/Users/Jesus/Documents/KREA/deploy-to-vec/front/src/components/MainCards.astro", void 0);

var __freeze = Object.freeze;
var __defProp = Object.defineProperty;
var __template = (cooked, raw) => __freeze(__defProp(cooked, "raw", { value: __freeze(cooked.slice()) }));
var _a;
const $$Astro = createAstro("https://cegallardo0405.github.io");
const $$ContentMedia = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$ContentMedia;
  const { imgSrc, reverseImg = false } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<section class="my-64" data-astro-cid-lonfrjqf> <link rel="stylesheet" href="./Styles/GlobalCss.css"> <div class="container" data-astro-cid-lonfrjqf> <div class="grid grid-cols-1 gap-6 md:grid-cols-2 items-center" data-astro-cid-lonfrjqf> ${!reverseImg ? renderTemplate(_a || (_a = __template(['<div class="img-container" data-aos="fade-right" data-aos-delay="500" data-astro-cid-lonfrjqf> <script src="https://unpkg.com/@dotlottie/player-component@latest/dist/dotlottie-player.mjs" type="module"><\/script> ', " </div>"])), renderComponent($$result, "dotlottie-player", "dotlottie-player", { "src": "https://lottie.host/d671f312-1922-4516-bd90-9f572b170eef/xe7f5x0NwJ.lottie", "background": "transparent", "speed": "1", "style": "width: 300px; height: 300px;", "loop": true, "autoplay": true, "data-astro-cid-lonfrjqf": true })) : ""} <div class="space-content flex flex-col justify-center p-4" data-astro-cid-lonfrjqf> ${renderSlot($$result, $$slots["default"])} </div> ${reverseImg ? renderTemplate`<div class="img-container" data-astro-cid-lonfrjqf> ${renderComponent($$result, "lottie-player", "lottie-player", { "src": "https://lottie.host/3e533933-c279-4a51-9844-bbc0bd9dec1f/qR87KWkTrM.json", "background": "##fff", "speed": "1", "style": "width: 300px; height: 300px", "loop": true, "controls": true, "autoplay": true, "direction": "1", "mode": "normal", "data-astro-cid-lonfrjqf": true })} </div>` : ""} </div> </div> </section>  `;
}, "C:/Users/Jesus/Documents/KREA/deploy-to-vec/front/src/components/ContentMedia.astro", void 0);

const $$SubMain = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`<html data-astro-cid-gu5p6rlr> ${maybeRenderHead()}<body class="overflow-x-hidden" data-astro-cid-gu5p6rlr> <link rel="stylesheet" href="./Styles/GlobalCss.css"> ${renderComponent($$result, "ContentMedia", $$ContentMedia, { "class": "media-c", "data-astro-cid-gu5p6rlr": true }, { "default": ($$result2) => renderTemplate` <h2 class="ml-4 custom-font-title" data-aos="fade-in" data-aos-delay="500" data-astro-cid-gu5p6rlr>Servicios</h2> <ul class="text-left pl-32" data-astro-cid-gu5p6rlr> <li data-aos="fade-in" data-aos-delay="500" data-astro-cid-gu5p6rlr> - Gestión de proyectos</li> <li data-aos="fade-in" data-aos-delay="500" data-astro-cid-gu5p6rlr> - Búsqueda de recursos</li> <li data-aos="fade-in" data-aos-delay="500" data-astro-cid-gu5p6rlr> - Gestión empresarial</li> <li data-aos="fade-in" data-aos-delay="500" data-astro-cid-gu5p6rlr> - Desarrollo web</li> <li data-aos="fade-in" data-aos-delay="500" data-astro-cid-gu5p6rlr> - Asesoría legal coorporativa</li> </ul> ` })}  </body> </html> `;
}, "C:/Users/Jesus/Documents/KREA/deploy-to-vec/front/src/components/SubMain.astro", void 0);

const $$CallToAction = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<body class="overflow-x-hidden" data-astro-cid-balv45lp>  <section data-astro-cid-balv45lp> <div class="flex flex-col md:flex-row items-center justify-between max-w-6xl mx-auto overflow-x-hidden" data-astro-cid-balv45lp> <div class="w-full md:w-3/5 mb-6 md:mb-0" data-astro-cid-balv45lp> <h1 data-aos="fade-in" data-aos-delay="500" class="mb-4 custom-title" data-astro-cid-balv45lp>Entérate de todo lo que Krea está logrando</h1> <a href="/convocatorias" data-aos="zoom-in" data-aos-delay="500" class="bg-teal-500 text-white text-l py-2 px-4 rounded-[20px] py-3 px-6 hover:bg-[#369b96]" data-astro-cid-balv45lp>Conoce más aquí</a> </div> <div class="w-full md:w-2/5 flex justify-center items-center" data-aos="fade-left" data-aos-delay="500" data-astro-cid-balv45lp> ${renderComponent($$result, "dotlottie-player", "dotlottie-player", { "src": "https://lottie.host/badb6687-b59b-488e-ab7f-506750230556/WJqcMpHQ0e.lottie", "background": "transparent", "speed": "1", "style": "width: 300px; height: 300px;", "loop": true, "autoplay": true, "data-astro-cid-balv45lp": true })} </div> </div> </section>  </body> `;
}, "C:/Users/Jesus/Documents/KREA/deploy-to-vec/front/src/components/CallToAction.astro", void 0);

const $$Achievements = createComponent(async ($$result, $$props, $$slots) => {
  const STRAPI_URL = "https://krea-back-repo-production.up.railway.app";
  function getImageUrl(imageObject) {
    if (!imageObject || !imageObject.data || !imageObject.data.attributes || !imageObject.data.attributes.url) {
      return "https://via.placeholder.com/300x300";
    }
    const imageUrl = imageObject.data.attributes.url;
    return `${STRAPI_URL}${imageUrl}`;
  }
  async function getPosts() {
    try {
      const apiUrl = new URL("https://krea-back-repo-production.up.railway.app/api/posts?populate=*");
      const response = await fetch(apiUrl.toString(), { cache: "no-store" });
      const { data } = await response.json();
      return data.slice(0, 4);
    } catch (error) {
      console.error("Error fetching posts:", error);
      return [];
    }
  }
  const posts = await getPosts();
  return renderTemplate`${maybeRenderHead()}<section class="achievements-section" data-astro-cid-4vgjzdbk> <div class="achievements-grid" data-astro-cid-4vgjzdbk> ${posts.map((post) => renderTemplate`<a${addAttribute(`/convocatorias/${post.attributes.slug}`, "href")} class="achievement-item" data-astro-cid-4vgjzdbk> <img${addAttribute(getImageUrl(post.attributes.featuredimage), "src")}${addAttribute(post.attributes.title, "alt")} data-astro-cid-4vgjzdbk> <div class="achievement-overlay" data-astro-cid-4vgjzdbk> <h3 data-astro-cid-4vgjzdbk>${post.attributes.title}</h3> </div> </a>`)} </div> </section> `;
}, "C:/Users/Jesus/Documents/KREA/deploy-to-vec/front/src/components/Achievements.astro", void 0);

const $$Home = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`<html lang="es" data-astro-cid-xhaoqxbd> <head><meta charset="UTF-8"><meta http-equiv="X-UA-Compatible" content="IE=edge">${renderHead()}</head> <section class="home" data-astro-cid-xhaoqxbd> ${renderComponent($$result, "Hero", $$Hero, { "data-astro-cid-xhaoqxbd": true })} <section class="main-content" data-astro-cid-xhaoqxbd> ${renderComponent($$result, "Main", $$Main, { "data-astro-cid-xhaoqxbd": true })} ${renderComponent($$result, "Separator", $$Separator, { "data-astro-cid-xhaoqxbd": true })} ${renderComponent($$result, "MainCards", $$MainCards, { "data-astro-cid-xhaoqxbd": true })} ${renderComponent($$result, "Separator", $$Separator, { "data-astro-cid-xhaoqxbd": true })} ${renderComponent($$result, "SubMain", $$SubMain, { "data-astro-cid-xhaoqxbd": true })} ${renderComponent($$result, "CallToAction", $$CallToAction, { "data-astro-cid-xhaoqxbd": true })} ${renderComponent($$result, "Achievements", $$Achievements, { "data-astro-cid-xhaoqxbd": true })} </section> </section> </html>`;
}, "C:/Users/Jesus/Documents/KREA/deploy-to-vec/front/src/components/Home.astro", void 0);

const $$Index = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`<html lang="es"> <head><meta charset="UTF-8"><meta name="viewport" content="width=device-width, initial-scale=1.0"><title>Krea Proyectos</title><link rel="icon" type="image/png" href="../../public/Resources/krea-i.png">${renderHead()}</head> <body> ${renderComponent($$result, "LoadingScreen", $$LoadingScreen, {})} ${renderComponent($$result, "DefaultLayout", $$DefaultLayout, {}, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "Home", $$Home, {})} ` })} </body></html>`;
}, "C:/Users/Jesus/Documents/KREA/deploy-to-vec/front/src/pages/index.astro", void 0);

const $$file = "C:/Users/Jesus/Documents/KREA/deploy-to-vec/front/src/pages/index.astro";
const $$url = "";

export { $$Index as default, $$file as file, $$url as url };
