<template>
<div class="entity-card">
  <q-card>
    <q-img :src="imageSrc"> </q-img>
    <q-card-section>
      <div class="text-h6">{{ title }}</div>
      <div class="text-subtitle2">{{ subtitle }}</div>
    </q-card-section>
  </q-card>
  </div>
</template>

<script>
export default {
  props: ["imageSrc", "title", "subtitle"],
};
</script>

<style scoped>
.entity-card {
  /* max-width: 350px;
  max-height: 200px; */
}
</style>