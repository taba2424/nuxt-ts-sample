<template>
  <div>
    <p>クリック回数: {{ count }}</p>

    <button @click="handleClick">
      カウントを増やす
    </button>
  </div>
</template>

<script lang="ts">
import { Component, Vue, Prop, Emit } from 'vue-property-decorator'

@Component({})

export default class TheCount extends Vue {
  /* props */
  @Prop() count: number = 0

  /* emit */
  @Emit('click')
  clickButton(): void {}

  /* mounted */
  mounted(): void {
    console.log('log', 'mounted')
  }

  /* methods */
  handleClick(): void {
    this.clickButton()
  }
}
</script>
