import { k as createAstro, l as createComponent, m as renderTemplate, n as maybeRenderHead, o as addAttribute } from './astro/server_Cixpw2VF.mjs';
import 'kleur/colors';
import 'clsx';
/* empty css                          */

const $$Astro = createAstro("https://cegallardo0405.github.io");
const $$Separator = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Separator;
  const { color = "#b3e5e1", thickness = "2.5px", width = "75%" } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<div class="separator-container" data-astro-cid-jchhmuzl> <hr class="separator"${addAttribute(`border-top: ${thickness} solid ${color}; width: ${width};`, "style")} data-astro-cid-jchhmuzl> </div> `;
}, "C:/Users/Jesus/Documents/KREA/deploy-to-vec/front/src/components/Separator.astro", void 0);

export { $$Separator as $ };
