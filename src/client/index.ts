import {defineClientAppEnhance} from '@vuepress/client';
import GiscusComment from './GiscusComment.vue';

export default defineClientAppEnhance(({app}) => {
    app.component("GiscusComment", GiscusComment);
});