<template>
  <div class="row">
    <entity-card
      class="col-md-3 col-lg-2 q-ma-md"
      v-for="project in testData"
      :key="project.id"
      :imageSrc="project.imageSrc"
      :title="project.title"
      :subtitle="project.subtitle"
    >
    </entity-card>
  </div>
</template>

<script>
export default {
  setup() {
    const testData = [
      {
        id: 1,
        imageSrc: "https://cdn.quasar.dev/img/parallax2.jpg",
        title: "Test Title",
        subtitle: "Here is some description text",
      },
      {
        id: 2,
        imageSrc: "https://cdn.quasar.dev/img/parallax2.jpg",
        title: "Test Title",
        subtitle: "Here is some description text",
      },
      {
        id: 3,
        imageSrc: "https://cdn.quasar.dev/img/parallax2.jpg",
        title: "Test Title",
        subtitle: "Here is some description text",
      },
      {
        id: 4,
        imageSrc: "https://cdn.quasar.dev/img/parallax2.jpg",
        title: "Test Title",
        subtitle: "Here is some description text",
      },
      {
        id: 5,
        imageSrc: "https://cdn.quasar.dev/img/parallax2.jpg",
        title: "Test Title",
        subtitle: "Here is some description text",
      },
      {
        id: 6,
        imageSrc: "https://cdn.quasar.dev/img/parallax2.jpg",
        title: "Test Title",
        subtitle: "Here is some description text",
      },
      {
        id: 7,
        imageSrc: "https://cdn.quasar.dev/img/parallax2.jpg",
        title: "Test Title",
        subtitle: "Here is some description text",
      },
      {
        id: 8,
        imageSrc: "https://cdn.quasar.dev/img/parallax2.jpg",
        title: "Test Title",
        subtitle: "Here is some description text",
      },
      {
        id: 9,
        imageSrc: "https://cdn.quasar.dev/img/parallax2.jpg",
        title: "Test Title",
        subtitle: "Here is some description text",
      },
      {
        id: 10,
        imageSrc: "https://cdn.quasar.dev/img/parallax2.jpg",
        title: "Test Title",
        subtitle: "Here is some description text",
      },
    ];

    return {
      testData
    };
  },
};
</script>

<style scoped>

</style>