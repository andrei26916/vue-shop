<template>
  <div>
    <div class="content">
      <UserInformationComponent/>
    </div>
  </div>
</template>

<script>
  import UserInformationComponent from '@/components/ProfileComponent';
  export default {
    name: "Settings",
    components: {
      UserInformationComponent
    }
  }
</script>

<style scoped>
  div{
    width: 100%;
  }
</style>