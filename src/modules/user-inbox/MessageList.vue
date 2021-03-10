<template>
  <q-list bordered>
    <message-list-item
      v-for="message in messages"
      :key="message.id"
    ></message-list-item>
  </q-list>
</template>

<script>
import { ref } from "vue";
import MessageListItem from "./MessageListItem";
export default {
  components: {
    MessageListItem,
  },
  setup() {
    const messages = ref(
      [...Array(30).keys()].map((k) => {
        return { id: k };
      })
    );
    return {
      messages,
    };
  },
};
</script>