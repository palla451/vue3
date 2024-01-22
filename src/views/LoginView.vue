<template>
  <LoginComponent title="Login" />
</template>

<script>

import {defineComponent} from "vue";
import LoginComponent from "@/components/LoginComponent.vue";

export default defineComponent({
  name: 'LoginView',
  components: {LoginComponent}
})
</script>

<style scoped lang="scss">

</style>