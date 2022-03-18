import type {Plugin} from '@vuepress/core';
import {GiscusCommentPluginOptions} from "../shared";

const giscusCommentPlugin: Plugin<GiscusCommentPluginOptions> = (options, app) => {
    return {
        name: 'vuepress-plugin-giscus-comment',
        define: {
            __GISCUS_COMMENT_OPTIONS__: options
        }
    }
};
export default giscusCommentPlugin;