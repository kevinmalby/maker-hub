<template>
  <div class="row justify-between">
    <entity-card class="col-3"
      :imageSrc="imageSrc"
      title="Test Title"
      subtitle="This is a description"
    ></entity-card>
    <entity-card class="col-3"
      :imageSrc="imageSrc"
      title="Test Title"
      subtitle="This is a description"
    ></entity-card>
    <entity-card class="col-3"
      :imageSrc="imageSrc"
      title="Test Title"
      subtitle="This is a description"
    ></entity-card>
  </div>
</template>

<script>
export default {
  setup() {
    const testData = [
      {
        imageSrc: "",
        title: "Test Title",
        subtitle: "Here is some description text",
      },
    ];

    const imageSrc = "https://cdn.quasar.dev/img/parallax2.jpg";

    return {
      testData,
      imageSrc,
    };
  },
};
</script>