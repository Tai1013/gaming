<template>
    <Tutorial />
</template>

<script>
export default {
    
    name: 'IndexPage',
    asyncData(context) {
        context.$axios.post('/api/login', {
            fullname: '1231',
        }).then(res => {
            // console.log(res.data)
        })
    }
}
</script>
