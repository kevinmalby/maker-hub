<template>
  <div class="row">
    <div class="col-3">
      <q-scroll-area class="message-list">
        <message-list></message-list>
      </q-scroll-area>
    </div>
    <div class="col-9">
      <message-content></message-content>
    </div>
  </div>
</template>

<script>
import MessageList from "../modules/user-inbox/components/MessageList";
import MessageContent from "../modules/user-inbox/components/MessageContent";
export default {
  components: {
    MessageList,
    MessageContent,
  },
};
</script>

<style scoped>
.message-list {
  height: calc(100vh - 50px);
}
</style>