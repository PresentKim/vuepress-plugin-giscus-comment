<template>
  <div class="giscus"/>
</template>
<script lang="ts">
import {GiscusAttributes, GiscusCommentPluginOptions} from "../shared";
import {defineComponent} from "vue";

declare const __GISCUS_COMMENT_OPTIONS__: GiscusCommentPluginOptions;
const DEFAULT_GISCUS_ATTRIBUTES: GiscusAttributes = {
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
};
const options: GiscusAttributes = Object.assign(DEFAULT_GISCUS_ATTRIBUTES, __GISCUS_COMMENT_OPTIONS__);

export default defineComponent({
  props: {
    reactionsEnabled: {type: Boolean, default: options.reactionsEnabled},
    theme: {type: String, default: options.theme},
    inputPosition: {type: String, default: options.inputPosition},
    lang: {type: String, default: options.lang}
  },
  data() {
    return {
      scriptElement: this.getScriptElement()
    }
  },
  methods: {
    getScriptElement() {
      const element = document.createElement("script");
      element.setAttribute("src", "https://giscus.app/client.js");
      element.setAttribute("data-repo", options.repo);
      element.setAttribute("data-repo-id", options.repoId);
      element.setAttribute("data-category", options.category);
      element.setAttribute("data-category-id", options.categoryId);
      element.setAttribute("data-mapping", options.mapping);
      element.setAttribute("data-reactions-enabled", this.reactionsEnabled ? "1" : "0");
      element.setAttribute("data-emit-metadata", options.emitMetadata ? "1" : "0");
      element.setAttribute("data-input-position", this.inputPosition);
      element.setAttribute("data-theme", this.theme);
      element.setAttribute("data-lang", this.lang);
      element.setAttribute("crossorigin", options.crossOrigin);
      element.setAttribute("async", "true");
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