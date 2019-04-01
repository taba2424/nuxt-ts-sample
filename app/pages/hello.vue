<template>
  <div>
    <h1>Hello {{ message }}!!</h1>

    <input v-model="message" type="text">
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
