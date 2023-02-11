<template>
  <v-app>
    <AppHeader />
    <AppSidebar />
  </v-app>
</template>
<script>
import AppHeader from '@/components/AppHeader.vue'
import AppSidebar from '@/components/AppSidebar.vue'
export default {
  name: 'DefaultLayout',
  components: {
    AppHeader,
    AppSidebar,
  },
}
</script>