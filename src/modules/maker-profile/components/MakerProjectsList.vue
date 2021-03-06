<template>
  <div class="row">
    <entity-card
      class="col-md-3 col-lg-2 q-ma-md"
      v-for="project in testData"
      :key="project.id"
      :imageSrc="project.imageSrc"
      :title="project.title"
      :subtitle="project.subtitle"
      :rating="project.rating"
      :to="getProjectRoute(project.id)"
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
        imageSrc: getRandomImageUrl(),
        title: "Test Title",
        subtitle: "Here is some description text",
        rating: 87,
      },
      {
        id: 2,
        imageSrc: getRandomImageUrl(),
        title: "Test Title",
        subtitle: "Here is some description text",
      },
      {
        id: 3,
        imageSrc: getRandomImageUrl(),
        title: "Test Title",
        subtitle: "Here is some description text",
        rating: 95,
      },
      {
        id: 4,
        imageSrc: getRandomImageUrl(),
        title: "Test Title",
        subtitle: "Here is some description text",
      },
      {
        id: 5,
        imageSrc: getRandomImageUrl(),
        title: "Test Title",
        subtitle: "Here is some description text",
        rating: 73,
      },
      {
        id: 6,
        imageSrc: getRandomImageUrl(),
        title: "Test Title",
        subtitle: "Here is some description text",
      },
      {
        id: 7,
        imageSrc: getRandomImageUrl(),
        title: "Test Title",
        subtitle: "Here is some description text",
      },
      {
        id: 8,
        imageSrc: getRandomImageUrl(),
        title: "Test Title",
        subtitle: "Here is some description text",
      },
      {
        id: 9,
        imageSrc: getRandomImageUrl(),
        title: "Test Title",
        subtitle: "Here is some description text",
      },
      {
        id: 10,
        imageSrc: getRandomImageUrl(),
        title: "Test Title",
        subtitle: "Here is some description text",
      },
    ];

    const getProjectRoute = ( projectId ) => `/projects/${projectId}`;

    return {
      testData,
      getProjectRoute
    };
  },
};

function getRandomImageUrl() {
  return `https://picsum.photos/id/${getRandomInt(0, 1000)}/600/400`;
}

function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}
</script>

<style scoped>
</style>