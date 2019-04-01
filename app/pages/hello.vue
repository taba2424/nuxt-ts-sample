<template>
  <div>
    <h1>Hello {{ message }}!!</h1>

    <input type="text" v-model="message">
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'

@Component({})

export default class extends Vue {
  /* data */
  message: string = 'World'
}
</script>
