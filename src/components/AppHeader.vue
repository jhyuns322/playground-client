<template>
  <v-app-bar prominent class="app-bar" :elevation="1">
    <v-app-bar-nav-icon variant="text"></v-app-bar-nav-icon>
    <v-app-bar-title>{{ $t('app_header.title') }}</v-app-bar-title>
    <div class="select-box">
      <v-select
        :label="$t('app_header.select.label')"
        v-model="language"
        :items="items"
        item-title="text"
        item-value="value"
        variant="underlined"
      ></v-select>
    </div>
  </v-app-bar>
</template>
<script>
export default {
  name: 'AppHeader',
  data () {
    return {
      language: { text: 'KO', value: 'ko' },
    }
  },
  setup() {
    return {
      items: [
        { text: 'KO', value: 'ko' },
        { text: 'EN', value: 'en' },
      ],
    }
  },
  watch: {
    language: function(x) {
      (x === 'ko') ? this.$i18n.locale = 'ko' : this.$i18n.locale = 'en'
    }
  }
}
</script>
<style>
.select-box {
  width: 55px;
  margin-top: 20px;
  margin-right: 20px;
}
.app-bar {
  text-align: center;
}
</style>

