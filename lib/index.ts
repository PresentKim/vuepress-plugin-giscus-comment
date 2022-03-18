interface RequiredOptions {
    repo: String,
    repoId: String,
    category: String,
    categoryId: String
}

interface OptionalOptions {
    reactionsEnabled: Boolean,
    emitMetadata: Boolean,
    theme: String,
    inputPosition: 'top' | 'bottom' | 'left' | 'right',
    lang: 'de' | 'en' | 'es' | 'fr' | 'gsw' | 'id' | 'it' | 'ja' | 'ko' | 'pl' | 'ro' | 'ru' | 'tr' | 'vi' | 'zh-CN' | 'zh-TW',
    crossOrigin: '' | 'anonymous' | 'use-credentials',
    async: Boolean
}

type CommonMappingType = 'url' | 'title' | 'og:title' | 'pathname';
type SpecificMappingType = 'specific';
type NumberMappingType = 'number';
type MappingType = CommonMappingType | SpecificMappingType | NumberMappingType;

interface BasePluginOptions extends RequiredOptions, Partial<OptionalOptions> {
}

interface CommonMappingPluginOption extends BasePluginOptions {
    mapping?: CommonMappingType
}

interface SpecificMappingPluginOption extends BasePluginOptions {
    mapping: SpecificMappingType,
    term: String
}

interface NumberMappingPluginOptions extends BasePluginOptions {
    mapping: NumberMappingType,
    term: Number
}

export type GiscusCommentPluginOptions = SpecificMappingPluginOption | NumberMappingPluginOptions | CommonMappingPluginOption;

export interface GiscusAttributes extends RequiredOptions, OptionalOptions {
    mapping: MappingType
    term?: String | Number
}

export const DEFAULT_GISCUS_ATTRIBUTES: GiscusAttributes = {
    repo: '',
    repoId: '',
    category: '',
    categoryId: '',
    mapping: 'pathname',
    reactionsEnabled: true,
    emitMetadata: false,
    inputPosition: 'bottom',
    theme: 'light',
    lang: 'en',
    crossOrigin: '',
    async: true,
}