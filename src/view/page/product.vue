<template>
  <div class="product-page">
     this is product page.
      count: {{count}}
     <button type="button" @click="plus">加加</button>
  </div>
</template>

<script>
/* eslint-disable */
import { mapState, mapMutations } from 'vuex'
export default {
  name: 'Product',
  data() {
    return {
      msg: 'information'
    }
  },
  created(){
    console.log(this)
  },
  methods: {
    ...mapMutations({
        countPlus: 'countPlus'
    }),
    plus() {
      console.log(this.$store)
      // this.countPlus({ amount: 5 })
      this.$store.dispatch('countPlus', { amount: 5 })
    }
  },
  computed: {
    ...mapState({
        count: state => state.count
    })
  }
}
</script>