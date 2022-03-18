import { defineClientAppEnhance } from '@vuepress/client';
import GiscusComment from './GiscusComment.vue';
export default defineClientAppEnhance(function (_a) {
    var app = _a.app;
    app.component("GiscusComment", GiscusComment);
});
//# sourceMappingURL=index.js.map