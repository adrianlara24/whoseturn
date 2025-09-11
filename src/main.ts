import { meet } from "@googleworkspace/meet-addons/meet.addons";

import "./style.css";
import typescriptLogo from "./typescript.svg";
import viteLogo from "/vite.svg";
import { setupCounter } from "./counter.ts";

const CLOUD_PROJECT_NUMBER = "564187822400";
const MAIN_STAGE_URL = "https://adrianlara24.github.io/whoseturn/";

const session = await meet.addon.createAddonSession({
  cloudProjectNumber: CLOUD_PROJECT_NUMBER,
});
const sidePanelClient = await session.createSidePanelClient();
await sidePanelClient.startActivity({
  mainStageUrl: MAIN_STAGE_URL,
});

document.querySelector<HTMLDivElement>("#app")!.innerHTML = `
  <div>
    <a href="https://vite.dev" target="_blank">
      <img src="${viteLogo}" class="logo" alt="Vite logo" />
    </a>
    <a href="https://www.typescriptlang.org/" target="_blank">
      <img src="${typescriptLogo}" class="logo vanilla" alt="TypeScript logo" />
    </a>
    <h1>Vite + TypeScript</h1>
    <div class="card">
      <button id="counter" type="button"></button>
    </div>
    <p class="read-the-docs">
      Click on the Vite and TypeScript logos to learn more
    </p>
  </div>
`;

setupCounter(document.querySelector<HTMLButtonElement>("#counter")!);
