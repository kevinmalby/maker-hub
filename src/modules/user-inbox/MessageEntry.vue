<template>
  <div class="q-pa-sm row justify-center items-center message-input-container">
    <q-input
      class="message-input"
      color="teal"
      outlined
      v-model="text"
      autogrow
      placeholder="Enter Message"
      input-style="max-height: 6em"
    >
      <template v-slot:after>
        <q-btn round dense flat icon="send" />
      </template>
    </q-input>
  </div>
</template>

<style scoped>
.message-input {
  width: 50%;
}

.message-input-container {
  height: 100%;
}
</style>

