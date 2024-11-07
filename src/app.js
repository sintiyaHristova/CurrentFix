import page from "./lib/page.mjs";
import { render } from "./lib/lit-html.js";

import { funcPricelist } from "./views/pricelist.js";
import { funcProjects } from "./views/projects.js";
import { funcServices } from "./views/catalog.js";
import { funcDetails } from "./views/details.js";
import { funcHome } from "./views/home.js";
import { funcProjectsDetails } from "./views/projectsDetails.js";
import { funcContact } from "./views/contact.js";

page(info);
page("/", funcHome);
page("/catalog", funcServices);
page("/catalog/:id", funcDetails);
page("/projects", funcProjects);
page("/projects/:id", funcProjectsDetails);
page("/pricelist", funcPricelist);
page("/contact", funcContact);

page.start();

function info(е, funcA) {
  е.render = (еl) => render(еl, document.querySelector("main"));
  funcA();
}
