<template>
  <the-count :count="count" @click="increment" />
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'

import TheCount from '~/components/TheCount.vue'

@Component({
  components: {
    TheCount
  }
})

export default class extends Vue {
  /* data */
  count: number = 0

  /* method */
  increment(): void {
    this.count += 1
  }
}
</script>
