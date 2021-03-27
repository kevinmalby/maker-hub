<template>
  <q-item :to="route" exact>
    <q-item-section avatar>
      <q-icon :name="icon"></q-icon>
    </q-item-section>
    <q-item-section>
      {{ label }}
    </q-item-section>
  </q-item>
  <q-separator v-if="hasSeparator"></q-separator>
</template>

<script>
export default {
  props: ["route", "icon", "label", "hasSeparator"],
};
</script>