<template>
  <div class="column home-content-container">
    <div class="col-4">
      <div style="height: 100%">
        <div class="text-h4">Featured</div>
        <div class="row justify-evenly">
          <featured-activity-card class="col-3"></featured-activity-card>
          <featured-activity-card class="col-3"></featured-activity-card>
          <featured-activity-card class="col-3"></featured-activity-card>
        </div>
      </div>
    </div>
    <div class="col-3">
      <div style="height: 100%">
        <div class="text-h4">Following</div>
        <div style="height: calc(100% - 40px)">
          <q-scroll-area style="width: 100%; height: 100%">
            <div class="row no-wrap">
              <user-activity-card class="col-2"></user-activity-card>
              <user-activity-card class="col-2"></user-activity-card>
              <user-activity-card class="col-2"></user-activity-card>
              <user-activity-card class="col-2"></user-activity-card>
              <user-activity-card class="col-2"></user-activity-card>
              <user-activity-card class="col-2"></user-activity-card>
              <user-activity-card class="col-2"></user-activity-card>
              <user-activity-card class="col-2"></user-activity-card>
              <user-activity-card class="col-2"></user-activity-card>
            </div>
          </q-scroll-area>
        </div>
      </div>
    </div>
    <div class="col-3">
      <div style="height: 100%">
        <div class="text-h4">Popular</div>
        <div style="height: calc(100% - 40px)">
          <q-scroll-area style="width: 100%; height: 100%">
            <div class="row no-wrap">
              <user-activity-card class="col-2"></user-activity-card>
              <user-activity-card class="col-2"></user-activity-card>
              <user-activity-card class="col-2"></user-activity-card>
            </div>
          </q-scroll-area>
        </div>
      </div>
    </div>
    <div class="col-2">Users you are following</div>
  </div>
</template>

<script>
import FeaturedActivityCard from "../modules/home-page/components/FeaturedActivityCard";
import UserActivityCard from "../modules/home-page/components/UserActivityCard";
export default {
  components: {
    FeaturedActivityCard,
    UserActivityCard,
  },
};
</script>

<style scoped>
.home-content-container {
  height: 100%;
}
</style>