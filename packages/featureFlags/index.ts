import { addPlugin, defineNuxtModule, createResolver, addImportsDir } from '@nuxt/kit'

export default defineNuxtModule({
  setup() {
    const { resolve } = createResolver(import.meta.url)
    addPlugin(resolve('plugins/firebase.client.ts'))
    addImportsDir(resolve('stores'));
  },
})