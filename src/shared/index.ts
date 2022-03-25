/**
 * All interfaces and types defined here are used for giscus script elements.
 * It may change with Giscus updates.
 *
 * P.S.
 * If the value of an attribute is complex to get,
 * you can easily get it from Giscus main page
 *
 * @url https://giscus.app/
 */
import {PluginOptions} from "@vuepress/core";

interface RequiredOptions extends PluginOptions {
    /** @description The repository path that pass to giscus */
    repo: string;

    /** @description The repository id that pass to giscus */
    repoId: string;
}

interface OptionalOptions extends PluginOptions {
    /**
     * @description Whether to enable reactions for main post
     * @default true
     */
    reactionsEnabled: boolean;

    /**
     * @description Whether to enable emit discussion metadata
     * @default false
     */
    emitMetadata: boolean;

    /**
     * @description The theme name or custom theme css path that apply to giscus
     * @default 'light'
     */
    theme:
        'light' | 'light_high_contrast' | 'light_protanopia' |
        'dark' | 'dark_high_contrast' | 'dark_protanopia' | 'dark_dimmed' |
        'transparent_dark' | 'preferred_color_scheme' |
        `${string}.css` | `https://${string}`;

    /**
     * @description The location of comment box
     * @default 'bottom'
     */
    inputPosition: 'top' | 'bottom';

    /**
     * @description The language name that apply to giscus
     * @default 'en'
     */
    lang:
        'de' | 'en' | 'es' | 'fr' | 'gsw' | 'id' | 'it' | 'ja' |
        'ko' | 'pl' | 'ro' | 'ru' | 'tr' | 'vi' | 'zh-CN' | 'zh-TW';

    /**
     * @description Whether to load the comments lazily
     * @default true
     */
    lazyLoading: boolean;
}

interface CategoryOptions extends PluginOptions {
    /** @description The discussion category name of repository that pass to giscus */
    category: string;

    /** @description The discussion category id of repository that pass to giscus */
    categoryId: string;
}

interface CommonMappingOptions extends CategoryOptions, PluginOptions {
    /**
     * @description The mapping method between the embedding page and the embedded discussion
     * @default 'pathname'
     */
    mapping: 'url' | 'title' | 'og:title' | 'pathname';

    /** @description Not required by Common mapping method */
    term?: undefined;
}

interface NumberMappingOptions extends CategoryOptions, PluginOptions {
    /**
     * @description The mapping method between the embedding page and the embedded discussion
     * @default 'pathname'
     */
    mapping: 'number';

    /** @description The number to be used for discussion searches */
    term: number;
}

interface SpecificMappingOptions extends PluginOptions {
    /**
     * @description The mapping method between the embedding page and the embedded discussion
     * @default 'pathname'
     */
    mapping: 'specific';

    /** @description The term to be used for discussion searches */
    term: string;
}

export type GiscusCommentPluginOptions =
    RequiredOptions
    & Partial<OptionalOptions>
    & (Partial<CommonMappingOptions> | NumberMappingOptions | SpecificMappingOptions);

export type GiscusCommentScriptAttributes =
    RequiredOptions
    & OptionalOptions
    & (CommonMappingOptions | NumberMappingOptions | SpecificMappingOptions);

export type GiscusCommentPluginConfig = ['vuepress-plugin-giscus-comment', GiscusCommentPluginOptions];