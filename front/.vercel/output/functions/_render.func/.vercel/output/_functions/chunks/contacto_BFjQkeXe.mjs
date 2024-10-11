/* empty css                        */
import { l as createComponent, m as renderTemplate, p as renderHead, q as renderComponent } from './astro/server_Cixpw2VF.mjs';
import 'kleur/colors';
import { $ as $$DefaultLayout } from './DefaultLayout_C1inHrnV.mjs';
import 'clsx';
/* empty css                            */

var __freeze = Object.freeze;
var __defProp = Object.defineProperty;
var __template = (cooked, raw) => __freeze(__defProp(cooked, "raw", { value: __freeze(cooked.slice()) }));
var _a;
const $$Contact = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate(_a || (_a = __template(['<html data-astro-cid-xmivup5a> <head><meta charset="UTF-8"><meta http-equiv="X-UA-Compatible" content="IE=edge"><meta name="viewport" content="width=device-width, initial-scale=1.0"><link href="https://fonts.googleapis.com/css2?family=Raleway:ital,wght@0,100..900;1,100..900&display=swap" rel="stylesheet"><script src="https://kit.fontawesome.com/41bcea2ae3.js" crossorigin="anonymous"><\/script>', '</head> <body data-astro-cid-xmivup5a> <div class="container-contact" data-astro-cid-xmivup5a> <div class="contact-in" data-astro-cid-xmivup5a> <div class="contact-form" data-astro-cid-xmivup5a> <h1 data-astro-cid-xmivup5a>Habla con nosotros</h1> <form action="contact.php" method="post" data-astro-cid-xmivup5a> <label for="nombre" data-astro-cid-xmivup5a>Nombre</label> <input type="text" name="nombre" placeholder="Ingrese su nombre completo" required class="contact-form-txt" data-astro-cid-xmivup5a> <label for="correo" data-astro-cid-xmivup5a>Correo eletr\xF3nico</label> <input type="email" name="correo" placeholder="Ingrese un correo eletr\xF3nico de contacto" required class="contact-form-txt" data-astro-cid-xmivup5a> <label for="celular" data-astro-cid-xmivup5a>Celular</label> <input type="text" name="celular" placeholder="+57 (XXX)-(XXX)-(XXXX)" required class="contact-form-txt" data-astro-cid-xmivup5a> <label for="empresa" data-astro-cid-xmivup5a>Empresa</label> <input type="text" name="empresa" placeholder="Ingrese el nombre de la empresa" required class="contact-form-txt" data-astro-cid-xmivup5a> <label for="mensaje" data-astro-cid-xmivup5a>\xBFEn qu\xE9 podemos ayudarte?</label> <textarea name="mensaje" placeholder="Describa su petici\xF3n" required class="contact-form-textarea" maxlength="500" data-astro-cid-xmivup5a></textarea> <p class="tratamiento-datos" data-astro-cid-xmivup5a>Al presionar enviar est\xE1s aceptando nuestra <a href="https://drive.google.com/file/d/1bQJ8-E4s8Y_2n_p9OtM4C9tbGJFybYK-/view?usp=sharing" data-astro-cid-xmivup5a>pol\xEDtica de privacidad.</a></p> <button type="submit" name="boton-enviar" class="contact-form-btn" data-astro-cid-xmivup5a>Enviar</button> </form> </div> <div class="contact-map" data-astro-cid-xmivup5a> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3976.25718865413!2d-74.0332586!3d4.7253298!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8e3f855e2bf3df4b%3A0x1bd0a41224d043!2sCra.%2011%20%23146-75%2C%20Bogot%C3%A1!5e0!3m2!1ses-419!2sco!4v1719168651734!5m2!1ses-419!2sco" width="100%" height="100%" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade" data-astro-cid-xmivup5a></iframe> </div> </div> </div> </body> </html>'])), renderHead());
}, "C:/Users/Jesus/Documents/KREA/deploy-to-vec/front/src/components/Contact.astro", void 0);

const $$Contacto = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "DefaultLayout", $$DefaultLayout, {}, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "Contact", $$Contact, {})} ` })}`;
}, "C:/Users/Jesus/Documents/KREA/deploy-to-vec/front/src/pages/contacto.astro", void 0);

const $$file = "C:/Users/Jesus/Documents/KREA/deploy-to-vec/front/src/pages/contacto.astro";
const $$url = "/contacto";

export { $$Contacto as default, $$file as file, $$url as url };
