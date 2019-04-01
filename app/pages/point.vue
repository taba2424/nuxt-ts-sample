<template>
  <div>
    <p>X: {{ halfPoint.x }}</p>
    <p>Y: {{ halfPoint.y }}</p>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'

@Component({})

export default class extends Vue {
  /* data */
  width: number = 800
  height: number = 600

  /* computed */
  get halfWidth(): number {
    return this.width / 2
  }

  get halfHeight(): number {
    return this.height / 2
  }

  get halfPoint(): { x: number, y: number } {
    return {
      x: this.halfWidth,
      y: this.halfHeight
    }
  }
}
</script>
