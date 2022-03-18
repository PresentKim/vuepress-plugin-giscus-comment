interface RequiredOptions {
    repo: string,
    repoId: string,
    category: string,
    categoryId: string
}

interface OptionalOptions {
    reactionsEnabled: boolean,
    emitMetadata: boolean,
    theme: string,
    inputPosition: 'top' | 'bottom' | 'left' | 'right',
    lang: 'de' | 'en' | 'es' | 'fr' | 'gsw' | 'id' | 'it' | 'ja' | 'ko' | 'pl' | 'ro' | 'ru' | 'tr' | 'vi' | 'zh-CN' | 'zh-TW',
    crossOrigin: '' | 'anonymous' | 'use-credentials',
    async: boolean
}

type CommonMappingType = 'url' | 'title' | 'og:title' | 'pathname';
type SpecificMappingType = 'specific';
type numberMappingType = 'number';
type MappingType = CommonMappingType | SpecificMappingType | numberMappingType;

interface BasePluginOptions extends RequiredOptions, Partial<OptionalOptions> {
}

interface CommonMappingPluginOption extends BasePluginOptions {
    mapping?: CommonMappingType
}

interface SpecificMappingPluginOption extends BasePluginOptions {
    mapping: SpecificMappingType,
    term: string
}

interface NumberMappingPluginOptions extends BasePluginOptions {
    mapping: numberMappingType,
    term: number
}

export type GiscusCommentPluginOptions = SpecificMappingPluginOption | NumberMappingPluginOptions | CommonMappingPluginOption;

export interface GiscusAttributes extends RequiredOptions, OptionalOptions {
    mapping: MappingType
    term?: string | number
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