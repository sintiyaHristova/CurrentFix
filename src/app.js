import page from "./lib/page.mjs";
import { render } from "./lib/lit-html.js";

import { funcPricelist } from "./views/pricelist.js";
import { funcProjects } from "./views/projects.js";
import { funcServices } from "./views/catalog.js";
import { funcDetails } from "./views/details.js";
import { funcHome } from "./views/home.js";
import { funcProjectsDetails } from "./views/projectsDetails.js";
import { funcContact } from "./views/contact.js";
import { funcTerms } from "./views/terms.js";
import { funcPrivacyPolicy } from "./views/privacyPolicy.js";

page("/", (ctx) => {
  info(ctx, funcHome);
});
page("/catalog", (ctx) => {
  info(ctx, funcServices);
});
page("/catalog/:id", (ctx) => {
  info(ctx, funcDetails);
});
page("/projects", (ctx) => {
  info(ctx, funcProjects);
});
page("/projects/:id", (ctx) => {
  info(ctx, funcProjectsDetails);
});
page("/pricelist", (ctx) => {
  info(ctx, funcPricelist);
});
page("/contact", (ctx) => {
  info(ctx, funcContact);
});
page("/terms", (ctx) => {
  info(ctx, funcTerms);
});
page("/privacyPolicy", (ctx) => {
  info(ctx, funcPrivacyPolicy);
});

page.start();

function info(ctx, next) {
  ctx.render = (el) => render(el, document.querySelector("main"));
  next(ctx);
}
