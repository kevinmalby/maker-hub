<template>
    <div square class="rating-card">
        <div v-if="!!rating" class="text-h5 text-weight-medium q-mx-auto">{{rating}}</div>
    </div>
</template>

<script>
export default {
    props: ['rating']
}
</script>

<style scoped>
.rating-card {
    border: 1px solid black;
    padding: 0.35rem;
}
</style>