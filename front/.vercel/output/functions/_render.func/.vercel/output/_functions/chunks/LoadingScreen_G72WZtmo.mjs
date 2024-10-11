import { l as createComponent, m as renderTemplate, n as maybeRenderHead } from './astro/server_Cixpw2VF.mjs';
import 'kleur/colors';
import 'clsx';
/* empty css                        */

var __freeze = Object.freeze;
var __defProp = Object.defineProperty;
var __template = (cooked, raw) => __freeze(__defProp(cooked, "raw", { value: __freeze(cooked.slice()) }));
var _a;
const $$LoadingScreen = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate(_a || (_a = __template(["", `<div id="loading-screen" class="loading-screen" data-astro-cid-g2nbzz2z> <img src="/KREA.png" alt="Logo de la empresa" class="logo" data-astro-cid-g2nbzz2z> <div class="loading-bar" data-astro-cid-g2nbzz2z> <div id="loading-progress" class="loading-progress" data-astro-cid-g2nbzz2z></div> </div> </div>  <script client:load>
  function simulateLoading() {
    const loadingScreen = document.getElementById('loading-screen');
    const progressBar = document.getElementById('loading-progress');
    let width = 0;
    const interval = setInterval(() => {
      if (width >= 200) {
        clearInterval(interval);
        loadingScreen.classList.add('hidden');
      } else {
        width += 2;
        progressBar.style.width = width + '%';
      }
    }, 20);
  }

  document.addEventListener('DOMContentLoaded', simulateLoading);
<\/script>`])), maybeRenderHead());
}, "C:/Users/Jesus/Documents/KREA/deploy-to-vec/front/src/components/LoadingScreen.astro", void 0);

export { $$LoadingScreen as $ };
