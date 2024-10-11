import { l as createComponent, m as renderTemplate, q as renderComponent, p as renderHead, t as renderSlot } from './astro/server_Cixpw2VF.mjs';
import 'kleur/colors';
/* empty css                        */
import 'clsx';
/* empty css                         */

var __freeze$1 = Object.freeze;
var __defProp$1 = Object.defineProperty;
var __template$1 = (cooked, raw) => __freeze$1(__defProp$1(cooked, "raw", { value: __freeze$1(cooked.slice()) }));
var _a$1;
const $$Bar = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate(_a$1 || (_a$1 = __template$1(['<html data-astro-cid-acafmfjx> <head><meta charset="UTF-8"><meta name="viewport" content="width=device-width, initial-scale=1.0"><!-- FONTS --><link href="https://fonts.googleapis.com/css2?family=Raleway:ital,wght@0,100..900;1,100..900&display=swap" rel="stylesheet"><script type="module" src="https://unpkg.com/ionicons@7.1.0/dist/ionicons/ionicons.esm.js"><\/script><script nomodule src="https://unpkg.com/ionicons@7.1.0/dist/ionicons/ionicons.js"><\/script>', '</head> <body class="font-[Raleway]" data-astro-cid-acafmfjx> <header id="Header" data-astro-cid-acafmfjx> <a href="/" data-astro-cid-acafmfjx> <img class="logo" src="/KREA.png" alt="Logo Krea" data-astro-cid-acafmfjx> </a> ', ` <ul class="menu" id="navMenu" data-astro-cid-acafmfjx> <li data-astro-cid-acafmfjx> <a class="item" href="/nosotros" data-astro-cid-acafmfjx>Nosotros</a> </li> <li data-astro-cid-acafmfjx> <a class="item" href="/servicios" data-astro-cid-acafmfjx>Servicios</a> </li> <li data-astro-cid-acafmfjx> <a class="item" href="/convocatorias" data-astro-cid-acafmfjx>Convocatorias</a> </li> <li data-astro-cid-acafmfjx> <a class="item" href="/blog" data-astro-cid-acafmfjx>Blog</a> </li> <li data-astro-cid-acafmfjx> <a class="contacto" href="/contacto" data-astro-cid-acafmfjx>Contacto</a> </li> </ul> </header> <script client:load>
        document.addEventListener('DOMContentLoaded', () => {
            const menuIcon = document.getElementById('menuIcon');
            const navMenu = document.getElementById('navMenu');
            const header = document.getElementById('Header');

            menuIcon.addEventListener('click', () => {
                navMenu.classList.toggle('show');
                menuIcon.name = menuIcon.name === 'menu-outline' ? 'close-outline' : 'menu-outline';
            });

            window.addEventListener('scroll', () => {
                if (window.scrollY > 0) {
                    header.style.boxShadow = '1px 1px 15px rgba(0, 0, 0, 0.3)';
                } else {
                    header.style.boxShadow = 'none';
                }
            });

            document.addEventListener('click', (event) => {
                const isClickInsideMenu = navMenu.contains(event.target) || menuIcon.contains(event.target);
                if (!isClickInsideMenu && navMenu.classList.contains('show')) {
                    navMenu.classList.remove('show');
                    menuIcon.name = 'menu-outline';
                }
            });
        });
    <\/script> </body> </html>`])), renderHead(), renderComponent($$result, "ion-icon", "ion-icon", { "id": "menuIcon", "name": "menu-outline", "class": "text-3xl cursor-pointer text-white", "data-astro-cid-acafmfjx": true }));
}, "C:/Users/Jesus/Documents/KREA/deploy-to-vec/front/src/components/Bar.astro", void 0);

var __freeze = Object.freeze;
var __defProp = Object.defineProperty;
var __template = (cooked, raw) => __freeze(__defProp(cooked, "raw", { value: __freeze(cooked.slice()) }));
var _a;
const $$Footer = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate(_a || (_a = __template(['<html lang="en" data-astro-cid-sz7xmlte> <head><meta charset="UTF-8"><meta http-equiv="X-UA-Compatible" content="IE=edge"><meta name="viewport" content="width=device-width, initial-scale=1.0"><link href="https://fonts.googleapis.com/css2?family=Raleway:ital,wght@0,100..900;1,100..900&display=swap" rel="stylesheet"><script src="https://kit.fontawesome.com/41bcea2ae3.js" crossorigin="anonymous"><\/script>', '</head> <body data-astro-cid-sz7xmlte> <footer data-astro-cid-sz7xmlte> <div class="container__footer" data-astro-cid-sz7xmlte> <div class="box__footer" data-astro-cid-sz7xmlte> <div class="logo" data-astro-cid-sz7xmlte> <img class="logo" src="/KREA.png" alt="Logo Krea" data-astro-cid-sz7xmlte> </div> <div class="terms" data-astro-cid-sz7xmlte>\n+57 316 4898500<br data-astro-cid-sz7xmlte>\nCarrera 11 #146-75, Bogot\xE1, Colombia<br data-astro-cid-sz7xmlte>\ninfo@kreaproyectos.com\n</div> </div> <div class="box__footer" data-astro-cid-sz7xmlte> <h2 data-astro-cid-sz7xmlte>Enlaces de inter\xE9s</h2> <a href="/convocatorias" data-astro-cid-sz7xmlte>Convocatorias</a> <a href="/blog" data-astro-cid-sz7xmlte>Blog</a> <a href="/contacto" data-astro-cid-sz7xmlte>Contacto</a> </div> <div class="box__footer" data-astro-cid-sz7xmlte> <h2 data-astro-cid-sz7xmlte>Redes Sociales</h2> <a href="https://x.com/kreaproyectos1" target="_blank" data-astro-cid-sz7xmlte><i class="fa-brands fa-square-x-twitter" data-astro-cid-sz7xmlte></i> X</a> <a href="https://www.linkedin.com/company/kreaproyectos/" target="_blank" data-astro-cid-sz7xmlte><i class="fab fa-linkedin" data-astro-cid-sz7xmlte></i> LinkedIn</a> <a href="https://www.instagram.com/kreaproyectos?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==" target="_blank" data-astro-cid-sz7xmlte><i class="fab fa-instagram-square" data-astro-cid-sz7xmlte></i> Instagram</a> </div> </div> <div class="box__copyright" data-astro-cid-sz7xmlte> <hr data-astro-cid-sz7xmlte> <p data-astro-cid-sz7xmlte>Todos los derechos reservados \xA9 2024 <b data-astro-cid-sz7xmlte>Krea Proyectos</b></p> </div> </footer> </body></html>'])), renderHead());
}, "C:/Users/Jesus/Documents/KREA/deploy-to-vec/front/src/components/Footer.astro", void 0);

const $$DefaultLayout = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`<html lang="es"> <head><meta charset="utf-8"><meta name="viewport" content="width=device-width, initial-scale=1">${renderHead()}</head> <body> ${renderComponent($$result, "Bar", $$Bar, {})} ${renderSlot($$result, $$slots["default"])} ${renderComponent($$result, "Footer", $$Footer, {})} </body></html>`;
}, "C:/Users/Jesus/Documents/KREA/deploy-to-vec/front/src/layouts/DefaultLayout.astro", void 0);

export { $$DefaultLayout as $ };
