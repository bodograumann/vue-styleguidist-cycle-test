<template>
  <Component2 />
</template>

<script>
export default {
  components: {
    Component2: () => import("../Component2/Component2.vue")
  }
};
</script>
