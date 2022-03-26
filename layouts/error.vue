<template>
    <div>
        <h1 v-if="error.statusCode === 404">Page not found</h1>
        {{error.statusCode}}
    </div>
</template>
<script>
export default {
    name: 'ErrorPage',
    layout: 'error',
    props: {
        error: {
            type: Object,
            default: null,
        },
    },
}
</script>