<template>
  <project-banner
    :description="description"
    projectName="Test Name"
  ></project-banner>
  <div class="row justify-between">
    <div class="col-7">
      <project-detail></project-detail>
    </div>
    <div class="col-5">
      <div class="column summary-info">
        <div class="col-10">
          <q-tabs
            v-model="currentSummaryTab"
            align="left"
            dense
            class="bg-blue-4 text-white shadow-2"
          >
            <q-tab name="summary" label="Summary" />
            <q-tab name="materials" label="Materials" />
            <q-tab name="equipment" label="Equipment" />
          </q-tabs>
          <q-separator />
          <q-tab-panels v-model="currentSummaryTab" animated>
            <q-tab-panel name="summary">
              <project-summary></project-summary>
            </q-tab-panel>

            <q-tab-panel name="materials">
              <project-materials></project-materials>
            </q-tab-panel>

            <q-tab-panel name="equipment">
              <project-equipment></project-equipment>
            </q-tab-panel>
          </q-tab-panels>
        </div>
        <div class="col-2">
          <project-appreciations></project-appreciations>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import ProjectBanner from "../modules/maker-project/components/ProjectBanner";
import ProjectDetail from "../modules/maker-project/components/ProjectDetail";
import ProjectSummary from "../modules/maker-project/components/ProjectSummary";
import ProjectMaterials from "../modules/maker-project/components/ProjectMaterials";
import ProjectEquipment from "../modules/maker-project/components/ProjectEquipment";
import ProjectAppreciations from "../modules/maker-project/components/ProjectAppreciations";

import { ref } from "vue";
export default {
  components: {
    ProjectBanner,
    ProjectDetail,
    ProjectSummary,
    ProjectMaterials,
    ProjectEquipment,
    ProjectAppreciations,
  },
  setup() {
    const description = ref(
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum"
    );

    const currentSummaryTab = ref("summary");

    return {
      description,
      currentSummaryTab,
    };
  },
};
</script>

<style scoped>
.summary-info {
  height: 75vh;
}
</style>