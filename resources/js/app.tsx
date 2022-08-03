import React from "react";
import { render } from "react-dom";
import { createInertiaApp } from "@inertiajs/inertia-react";

const app = document.getElementById("app");
const page = JSON.parse(String(app?.dataset.page));
// console.log("🚀 ~ file: app.tsx ~ line 7 ~ app", JSON.parse(app?.dataset.page)); //!uncomment to debug page

createInertiaApp({
    resolve: async (name) => import(`./Pages/${name}.tsx`),
    page,
    setup({ el, App, props }) {
        render(<App {...props} />, el);
    },
});
