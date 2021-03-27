<template>
  <router-link to="/profiles/1/projects">
    <template v-slot="{ navigate }">
      <div class="entity-card cursor-pointer" @click="navigate">
        <q-card class="q-mx-md cursor-pointer">
          <q-item>
            <q-item-section>
              <div class="row">
                <div class="col">
                  <q-item-label>User</q-item-label>
                  <q-item-label caption>Project Title</q-item-label>
                </div>
                <div class="col-auto">
                  <q-btn color="secondary" round flat icon="view_in_ar" />
                </div>
              </div>
            </q-item-section>
          </q-item>
          <q-video
            v-if="hasVideo"
            src="https://player.vimeo.com/video/89009039"
          ></q-video>
          <img
            v-else
            src="https://cdn.quasar.dev/img/parallax2.jpg"
            style="height: 120px"
          />
        </q-card>
      </div>
    </template>
  </router-link>
</template>

<script>
export default {
  props: ["hasVideo"],
};
</script>