<template>
  <div class="column message-content-container">
    <q-toolbar class="bg-secondary text-white shadow-2">
      <q-btn flat round dense icon="menu" class="q-mr-sm" />

      <q-space />

      <q-btn round dense flat icon="send" />
    </q-toolbar>
    <div class="col">
      <q-scroll-area class="chat-area">
        <div class="q-pa-md row justify-center">
          <div>
            <q-chat-message
              name="You"
              avatar="https://cdn.quasar.dev/img/avatar4.jpg"
              :text="['hey, how are you?']"
              sent
              stamp="7 minutes ago"
            />
            <q-chat-message
              name="Christina"
              avatar="https://cdn.quasar.dev/img/avatar3.jpg"
              :text="[
                'doing fine, how are you? What if we let this message get really long, will it expand to accommodate or just line break?',
              ]"
              stamp="4 minutes ago"
            />
            <q-chat-message
              name="You"
              avatar="https://cdn.quasar.dev/img/avatar4.jpg"
              :text="['hey, how are you?']"
              sent
              stamp="7 minutes ago"
            />
            <q-chat-message
              name="Christina"
              avatar="https://cdn.quasar.dev/img/avatar3.jpg"
              :text="[
                'doing fine, how are you? What if we let this message get really long, will it expand to accommodate or just line break?',
              ]"
              stamp="4 minutes ago"
            />
            <q-chat-message
              name="You"
              avatar="https://cdn.quasar.dev/img/avatar4.jpg"
              :text="['hey, how are you?']"
              sent
              stamp="7 minutes ago"
            />
            <q-chat-message
              name="Christina"
              avatar="https://cdn.quasar.dev/img/avatar3.jpg"
              :text="[
                'doing fine, how are you? What if we let this message get really long, will it expand to accommodate or just line break?',
              ]"
              stamp="4 minutes ago"
            />
            <q-chat-message
              name="You"
              avatar="https://cdn.quasar.dev/img/avatar4.jpg"
              :text="['hey, how are you?']"
              sent
              stamp="7 minutes ago"
            />
            <q-chat-message
              name="Christina"
              avatar="https://cdn.quasar.dev/img/avatar3.jpg"
              :text="[
                'doing fine, how are you? What if we let this message get really long, will it expand to accommodate or just line break?',
              ]"
              stamp="4 minutes ago"
            />
            <q-chat-message
              name="You"
              avatar="https://cdn.quasar.dev/img/avatar4.jpg"
              :text="['hey, how are you?']"
              sent
              stamp="7 minutes ago"
            />
            <q-chat-message
              name="Christina"
              avatar="https://cdn.quasar.dev/img/avatar3.jpg"
              :text="[
                'doing fine, how are you? What if we let this message get really long, will it expand to accommodate or just line break?',
              ]"
              stamp="4 minutes ago"
            />
            <q-chat-message
              name="You"
              avatar="https://cdn.quasar.dev/img/avatar4.jpg"
              :text="['hey, how are you?']"
              sent
              stamp="7 minutes ago"
            />
            <q-chat-message
              name="Christina"
              avatar="https://cdn.quasar.dev/img/avatar3.jpg"
              :text="[
                'doing fine, how are you? What if we let this message get really long, will it expand to accommodate or just line break?',
              ]"
              stamp="4 minutes ago"
            />
            <q-chat-message
              name="You"
              avatar="https://cdn.quasar.dev/img/avatar4.jpg"
              :text="['hey, how are you?']"
              sent
              stamp="7 minutes ago"
            />
            <q-chat-message
              name="Christina"
              avatar="https://cdn.quasar.dev/img/avatar3.jpg"
              :text="[
                'doing fine, how are you? What if we let this message get really long, will it expand to accommodate or just line break?',
              ]"
              stamp="4 minutes ago"
            />
            <q-chat-message
              name="You"
              avatar="https://cdn.quasar.dev/img/avatar4.jpg"
              :text="['hey, how are you?']"
              sent
              stamp="7 minutes ago"
            />
            <q-chat-message
              name="Christina"
              avatar="https://cdn.quasar.dev/img/avatar3.jpg"
              :text="[
                'doing fine, how are you? What if we let this message get really long, will it expand to accommodate or just line break?',
              ]"
              stamp="4 minutes ago"
            />
          </div>
        </div>
      </q-scroll-area>
    </div>
    <div class="col-2">
      <message-entry></message-entry>
    </div>
  </div>
</template>

<script>
import MessageEntry from "./MessageEntry";
export default {
  components: {
    MessageEntry,
  },
};
</script>

<style scoped>
.message-content-container {
  height: 100%;
}
.chat-area {
  width: 100%;
  height: 100%;
}
</style>