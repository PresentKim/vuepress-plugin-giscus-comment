<template>
  <div class="giscus"/>
</template>
<script lang="ts">
import {GiscusCommentPluginOptions, GiscusCommentScriptAttributes} from '../shared';
import {defineComponent} from 'vue';

declare const __GISCUS_COMMENT_OPTIONS__: GiscusCommentPluginOptions;
const DEFAULT_GISCUS_ATTRIBUTES: GiscusCommentScriptAttributes = {
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
  lazyLoding: true,
};
const options: GiscusCommentScriptAttributes = Object.assign(DEFAULT_GISCUS_ATTRIBUTES, __GISCUS_COMMENT_OPTIONS__);

export default defineComponent({
  props: {
    reactionsEnabled: {type: Boolean, default: options.reactionsEnabled},
    theme: {type: String, default: options.theme},
    inputPosition: {type: String, default: options.inputPosition},
    lang: {type: String, default: options.lang},
    term: {type: String, default: options.term + '', required: ['specific', 'number'].includes(options.mapping)},
  },
  data() {
    return {
      scriptElement: this.getScriptElement()
    }
  },
  methods: {
    getScriptElement() {
      const element = document.createElement('script');
      element.setAttribute('src', 'https://giscus.app/client.js');
      element.setAttribute('data-repo', options.repo);
      element.setAttribute('data-repo-id', options.repoId);
      element.setAttribute('data-mapping', options.mapping);
      switch (options.mapping) {
        case 'specific': //'specific' mapping does not require a category value
          element.setAttribute('data-term', this.term);
          break;
        case 'number':
          element.setAttribute('data-term', this.term);
          // noinspection FallThroughInSwitchStatementJS
        default:
          element.setAttribute('data-category', options.category);
          element.setAttribute('data-category-id', options.categoryId);
          break;
      }
      element.setAttribute('data-reactions-enabled', this.reactionsEnabled ? '1' : '0');
      element.setAttribute('data-emit-metadata', options.emitMetadata ? '1' : '0');
      element.setAttribute('data-input-position', this.inputPosition);
      element.setAttribute('data-theme', this.theme);
      element.setAttribute('data-lang', this.lang);
      if (options.lazyLoading) {
        element.setAttribute('data-loading', 'lazy');
      }
      element.setAttribute('crossorigin', 'anonymous');
      element.toggleAttribute('async');
      return element;
    },
  },
  mounted() {
    document.head.append(this.scriptElement);
  },
  unmount() {
    document.head.removeChild(this.scriptElement);
  }
});
</script>