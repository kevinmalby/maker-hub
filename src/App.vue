<template>
  <component :is="this.$route.meta.layout || 'LayoutPrimary'">
    <router-view />
  </component>
</template>

<script>
import LayoutPrimary from './layouts/LayoutPrimary'
export default {
  name: 'App',
  components: {
    LayoutPrimary
  }
};
</script>