"use strict";
exports.__esModule = true;
var giscusCommentPlugin = function (options, app) {
    return {
        name: 'vuepress-plugin-giscus-comment',
        define: {
            __GISCUS_COMMENT_OPTIONS__: options
        }
    };
};
exports["default"] = giscusCommentPlugin;
