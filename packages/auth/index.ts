import { defineNuxtModule, createResolver, addImportsDir } from '@nuxt/kit'

export default defineNuxtModule({
    setup() {
        const { resolve } = createResolver(import.meta.url)
        addImportsDir(resolve('stores'));
    },
})