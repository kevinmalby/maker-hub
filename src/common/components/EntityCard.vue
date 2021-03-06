<template>
  <router-link :to="to">
    <template v-slot="{ navigate }">
      <div class="entity-card cursor-pointer" @click="navigate">
        <q-card v-ripple square class="full-height">
          <q-img :src="imageSrc">
            <!-- <template v-slot:error>
          <q-img src="https://picsum.photos/600/400"></q-img>
        </template> -->
          </q-img>
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
  </router-link>
</template>

<script>
import { computed } from "vue";
export default {
  props: ["imageSrc", "title", "subtitle", "rating", "to"],
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