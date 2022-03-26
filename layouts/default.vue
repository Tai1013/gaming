<template>
    <div id="app" :class="{dark: dark}" class="m-4">
        <Nuxt />
    </div>
</template>
<script>
import { mapGetters } from 'vuex'

export default {
    name: 'DefaultPage',
    computed: {
        ...mapGetters(['dark']),
    },
}
</script>