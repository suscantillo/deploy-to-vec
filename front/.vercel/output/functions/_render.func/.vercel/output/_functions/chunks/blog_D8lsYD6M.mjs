/* empty css                        */
import { l as createComponent, m as renderTemplate, n as maybeRenderHead, o as addAttribute, p as renderHead, q as renderComponent } from './astro/server_Cixpw2VF.mjs';
import 'kleur/colors';
import { $ as $$DefaultLayout } from './DefaultLayout_C1inHrnV.mjs';
import 'clsx';
/* empty css                        */
import { $ as $$LoadingScreen } from './LoadingScreen_G72WZtmo.mjs';

const $$Blogs = createComponent(async ($$result, $$props, $$slots) => {
  const STRAPI_URL = "https://krea-back-repo-production.up.railway.app";
  function getImageUrl(imageObject) {
    if (!imageObject || !imageObject.data || !imageObject.data.attributes || !imageObject.data.attributes.url) {
      return "https://via.placeholder.com/300x200";
    }
    const imageUrl = imageObject.data.attributes.url;
    return `${STRAPI_URL}${imageUrl}`;
  }
  async function getPosts() {
    try {
      const apiUrl = new URL("https://krea-back-repo-production.up.railway.app/api/posts?populate=*&filters[category][Name][$eq]=Blogs");
      const response = await fetch(apiUrl.toString(), { cache: "no-store" });
      const { data } = await response.json();
      return data;
    } catch (error) {
      console.error("Error fetching posts:", error);
      return [];
    }
  }
  const posts = await getPosts();
  console.log("blogpost", posts);
  return renderTemplate`${maybeRenderHead()}<body data-astro-cid-4lhuo7md> <section class="opportunities-section" data-astro-cid-4lhuo7md> <div class="container" data-astro-cid-4lhuo7md> <div class="column divider-column sup" data-astro-cid-4lhuo7md> <div class="divider" data-astro-cid-4lhuo7md></div> </div> <div class="column title-column" data-astro-cid-4lhuo7md> <h3 data-astro-cid-4lhuo7md>Entérate y accede a nuevas oportunidades </h3> </div> <div class="column divider-column inf" data-astro-cid-4lhuo7md> <div class="divider" data-astro-cid-4lhuo7md></div> </div> </div> <div class="content" data-astro-cid-4lhuo7md> <p data-astro-cid-4lhuo7md>Descubre oportunidades innovadoras en el Sistema de Ciencia, Tecnología e Innovación del país. Participa en emocionantes convocatorias para dar vida a tus proyectos. ¡Sé parte del movimiento que está transformando el futuro!</p> </div> </section> <div class="cards-container" data-astro-cid-4lhuo7md> ${posts.map((post) => renderTemplate`<div class="card" data-astro-cid-4lhuo7md> <a${addAttribute(`/convocatorias/${post.attributes.slug}`, "href")}${addAttribute(post.attributes.title, "title")} data-astro-cid-4lhuo7md> <img${addAttribute(getImageUrl(post.attributes.featuredimage), "src")}${addAttribute(post.attributes.title, "alt")} data-astro-cid-4lhuo7md> </a> <span class="category" data-astro-cid-4lhuo7md> <a href="#" data-astro-cid-4lhuo7md>${post.attributes.category?.data?.attributes?.Name || "Sin categor\xEDa"}</a> </span> <div class="details" data-astro-cid-4lhuo7md> <h3 data-astro-cid-4lhuo7md> <a${addAttribute(`/convocatorias/${post.attributes.slug}`, "href")} data-astro-cid-4lhuo7md>${post.attributes.title}</a> </h3> <p data-astro-cid-4lhuo7md>${post.attributes.excerpt || "No hay resumen disponible"}</p> <div class="meta" data-astro-cid-4lhuo7md> <span class="author" data-astro-cid-4lhuo7md> <i class="fa fa-user" aria-hidden="true" data-astro-cid-4lhuo7md></i> By
<a href="#" data-astro-cid-4lhuo7md>${post.attributes.author?.data?.attributes?.Name || "Autor Desconocido"}</a> </span> <span class="date" data-astro-cid-4lhuo7md> <i class="fa fa-calendar-alt" aria-hidden="true" data-astro-cid-4lhuo7md></i> ${new Date(post.attributes.publishedAt).toLocaleDateString()} </span> </div> </div> </div>`)} </div> </body>`;
}, "C:/Users/Jesus/Documents/KREA/deploy-to-vec/front/src/components/Blogs.astro", void 0);

const $$Blog = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`<html lang="es"> <head><meta charset="UTF-8"><meta name="viewport" content="width=device-width, initial-scale=1.0"><title>Krea Proyectos - Blog</title>${renderHead()}</head> ${renderComponent($$result, "DefaultLayout", $$DefaultLayout, {}, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "LoadingScreen", $$LoadingScreen, {})} ${renderComponent($$result2, "Blog", $$Blogs, {})} ` })} </html>`;
}, "C:/Users/Jesus/Documents/KREA/deploy-to-vec/front/src/pages/blog.astro", void 0);

const $$file = "C:/Users/Jesus/Documents/KREA/deploy-to-vec/front/src/pages/blog.astro";
const $$url = "/blog";

export { $$Blog as default, $$file as file, $$url as url };
