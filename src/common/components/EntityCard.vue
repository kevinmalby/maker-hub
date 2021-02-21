<template>
  <div class="entity-card">
    <q-card square class="full-height">
      <q-img :src="imageSrc"> </q-img>
      <q-card-section>
        <div class="row justify-between">
          <div class="card-content">
            <div class="text-h6">{{ title }}</div>
            <div class="text-subtitle2">{{ subtitle }}</div>
          </div>
          <div class="self-center">
            <rating-card
              v-if="hasRating"
              class="card-content"
              :rating="rating"
            ></rating-card>
          </div>
        </div>
      </q-card-section>
    </q-card>
  </div>
</template>

<script>
import { computed } from "vue";
export default {
  props: ["imageSrc", "title", "subtitle", "rating"],
  setup(props) {
    const hasRating = computed(function () {
      return props.rating != null;
    });

    return {
      hasRating,
    };
  },
};
</script>

<style scoped>
.card-content:not(:last-child) {
  margin-right: 0.5rem;
}
</style>