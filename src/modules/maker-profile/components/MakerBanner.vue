<template>
  <section>
    <header>
      <div class="text-h4">{{ makerName }}</div>
    </header>
    <div class="row justify-between">
      <p class="col">{{ description }}</p>
      <div class="col col-md-auto">
        <q-list>
          <q-item><q-btn>Follow</q-btn></q-item>
          <q-item><q-btn>Contact</q-btn></q-item>
          <q-item><q-btn>Patreon</q-btn></q-item>
        </q-list>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  props: ["description", "makerName"],
};
</script>

<style scoped>
section {
    border: 1px solid black;
}
</style>