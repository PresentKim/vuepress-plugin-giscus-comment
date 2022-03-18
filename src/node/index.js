"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const giscusCommentPlugin = (options, app) => {
    return {
        name: 'vuepress-plugin-giscus-comment',
        define: {
            __GISCUS_COMMENT_OPTIONS__: options
        }
    };
};
exports.default = giscusCommentPlugin;
//# sourceMappingURL=index.js.map