
/*
 * THE BAD IDEA
 * Runtime / browser bridge
 *
 * This file will eventually:
 * 1. Interpret actual Whitespace instructions.
 * 2. Execute Whitespace programs.
 * 3. Pass program output to the browser renderer.
 *
 * Application logic belongs in the esoteric languages.
 */

"use strict";

const BadIdea = {
    version: "0.1.0",

    languages: {
        whitespace: {
            name: "Whitespace",
            extension: ".ws",
            status: "active"
        },

        brainfuck: {
            name: "Brainfuck",
            extension: ".bf",
            status: "planned"
        },

        intercal: {
            name: "INTERCAL",
            extension: ".i",
            status: "planned"
        },

        malbolge: {
            name: "Malbolge",
            extension: ".mb",
            status: "planned"
        }
    },

    init() {
        console.log(
            `%c THE BAD IDEA %c Runtime initialized`,
            "background:#c4f56b;color:#090b09;padding:5px;font-weight:bold",
            "color:#c4f56b"
        );

        console.log("Version:", this.version);
        console.log("Languages:", Object.keys(this.languages));
    }
};

window.addEventListener("DOMContentLoaded", () => {
    BadIdea.init();
});
