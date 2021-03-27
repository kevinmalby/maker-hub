<template>
  <router-link :to="to">
    <template v-slot="{ navigate }">
      <div class="entity-card cursor-pointer" @click="navigate">
        <slot></slot>
      </div>
    </template>
  </router-link>
</template>

<script>
export default {
  props: ["to"],
};
</script>