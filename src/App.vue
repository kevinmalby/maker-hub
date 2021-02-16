<template>
 <div id="app">
    <component :is="this.$route.meta.layout || 'LayoutPrimary'">
      <router-view />
    </component>
  </div>
</template>

<script>
export default {
  name: 'App'
};
</script>

<style>

</style>
