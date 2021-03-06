<template>
  <q-virtual-scroll class="following-list" :items="testData">
    <template v-slot="{ item }">
      <q-item clickable>
        <q-item-section avatar>
          <q-avatar rounded>
            <img :src="item.imageSrc" />
          </q-avatar>
        </q-item-section>
        <q-item-section>
          <div class="row justify-between">
            <span>{{ item.name }}</span>
            <q-icon name="more_vert" size="sm">
              <q-menu>
                <q-list>
                  <q-item>
                    <q-item-section>
                      <div class="text-subtitle1">5 New Posts</div>
                      <div class="text-caption">Last Updated 03/05/2020</div>
                    </q-item-section>
                  </q-item>
                  <q-separator />
                  <q-item clickable v-close-popup>
                    <q-item-section>Go to Profile</q-item-section>
                  </q-item>
                  <q-item clickable v-close-popup>
                    <q-item-section>Contact</q-item-section>
                  </q-item>
                  <div v-if="isActiveUser">
                    <q-item clickable v-close-popup>
                      <q-item-section>Collaborate</q-item-section>
                    </q-item>
                    <q-separator />
                    <q-item clickable v-close-popup>
                      <q-item-section>Unfollow</q-item-section>
                    </q-item>
                  </div>
                  <div v-else>
                    <q-separator />
                    <q-item clickable v-close-popup>
                      <q-item-section>Follow</q-item-section>
                    </q-item>
                  </div>
                </q-list>
              </q-menu>
            </q-icon>
          </div>
        </q-item-section>
      </q-item>
    </template>
  </q-virtual-scroll>
</template>

<script>
import { computed } from "vue";
import { useStore } from "vuex";
import { useRoute } from "vue-router";

export default {
  setup() {
    const store = useStore();
    const route = useRoute();

    const testData = getData();
    const isActiveUser = computed(function () {
      return store.getters.userId === route.params.id;
    });

    return {
      testData,
      isActiveUser,
    };
  },
};

function getData() {
  let data = [];
  for (let i = 0; i < 4; i++) {
    data.splice(
      0,
      0,
      ...[
        {
          name: "Woodworker",
          imageSrc: "https://picsum.photos/id/345/600/400",
        },
        {
          name: "Brewer",
          imageSrc: "https://picsum.photos/id/987/600/400",
        },
      ]
    );
  }

  return data;
}
</script>

<style scoped>
.following-list {
  height: 90%;
}
</style>