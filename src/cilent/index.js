"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const client_1 = require("@vuepress/client");
const GiscusComment_vue_1 = __importDefault(require("./GiscusComment.vue"));
exports.default = (0, client_1.defineClientAppEnhance)(({ app }) => {
    app.component("GiscusComment", GiscusComment_vue_1.default);
});
//# sourceMappingURL=index.js.map