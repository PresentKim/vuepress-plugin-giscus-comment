import type {Plugin, PluginObject} from '@vuepress/core';
import {path} from '@vuepress/utils';
import {GiscusCommentPluginOptions} from "../shared";

let __GISCUS_COMMENT_OPTIONS__: Partial<GiscusCommentPluginOptions> = {};

export class GiscusCommentPlugin implements PluginObject {
    readonly name: string = 'vuepress-plugin-giscus-comment';

    constructor(options: typeof __GISCUS_COMMENT_OPTIONS__) {
        __GISCUS_COMMENT_OPTIONS__ = options;
    }

    define() {
        return {__GISCUS_COMMENT_OPTIONS__};
    }

    clientAppEnhanceFiles() {
        return path.resolve(__dirname, '../client');
    }
}

const plugin: Plugin<GiscusCommentPluginOptions> = (options, app) => {
    return new GiscusCommentPlugin(options);
};
export default plugin;
