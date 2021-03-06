<template>
  <section>
    <header>
      <div class="text-h4">{{ projectName }}</div>
    </header>
    <div class="row justify-between">
      <p class="col">{{ description }}</p>
      <div class="col col-md-auto">
        <q-list>
          <q-item><rating-card :rating="87"></rating-card></q-item>
          <q-item><q-btn>Rate</q-btn></q-item>
        </q-list>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  props: ["description", "projectName"],
};
</script>

<style scoped>
section {
    border: 1px solid black;
}
</style>