<template>
  <div>
    <p>クリック回数: {{ count }}</p>

    <button @click="increment">
      カウントを増やす
    </button>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'

@Component({})

export default class extends Vue {
  /* data */
  count: number = 0

  /* method */
  increment(): void {
    this.count += 1
  }
}
</script>
