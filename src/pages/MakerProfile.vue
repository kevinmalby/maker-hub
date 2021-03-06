<template>
  <maker-banner :description="description" makerName="Test Name"></maker-banner>
  <div>
    <router-link to="/profiles/1/projects">
      <template v-slot="props">
        <q-btn v-bind="{ label: 'Projects', to: props.href, flat: true }" />
      </template>
    </router-link>
    <q-btn flat to="/profiles/1/videos">Videos</q-btn>
    <q-btn flat>Stories</q-btn>
    <q-btn flat>Support</q-btn>
  </div>

  <div class="row justify-between">
    <router-view class="col-10"></router-view>
    <div class="col-2">
      <div class="text-subtitle2 text-center text-bold">Following</div>
      <following-list></following-list>
    </div>
  </div>
</template>

<script>
import { ref } from "vue";
import MakerBanner from "../modules/maker-profile/components/MakerBanner";
import FollowingList from '../common/components/FollowingList';

export default {
  components: {
    MakerBanner,
    FollowingList
  },
  setup() {
    const description = ref(
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum"
    );

    const buttonProps = function ({ href, route, isActive, isExactActive }) {
      const props = {
        color: "black",
        noCaps: true,
        label: `To "${route.fullPath}"`,
        outline: true,
        to: href,
      };

      if (isActive === true) {
        props.color = isExactActive === true ? "primary" : "amber-9";
      } else {
        props.color = "black";
      }

      return props;
    };

    return {
      description,
      buttonProps,
    };
  },
};
</script>

<style scoped>
/* .router-link-exact-active > a span span {
  text-decoration: underline;
} */ /* Only works when not scoped */
</style>