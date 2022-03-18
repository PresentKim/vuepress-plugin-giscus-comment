"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const utils_1 = require("@vuepress/utils");
const giscusCommentPlugin = (options, app) => {
    return {
        name: 'vuepress-plugin-giscus-comment',
        define: {
            __GISCUS_COMMENT_OPTIONS__: options
        },
        clientAppEnhanceFiles: [
            utils_1.path.resolve(__dirname, '../client')
        ]
    };
};
exports.default = giscusCommentPlugin;
//# sourceMappingURL=index.js.map