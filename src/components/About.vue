<template>
  <div>about {{text}} {{msg}}</div>
</template>

<script>
const fetchInitialData = ({ store }) => {
   return store.dispatch('index/fetchBar')
  }
export default {
  asyncData: fetchInitialData,
  
  data() {
    return {
      text: '1'
    }
  },
  mounted() {
    let store = this.$store
    fetchInitialData({ store })
  },
  computed: {
    msg() {
      return this.$store.state.index.bar;
    }
  },
  methods: {
    aData() {
      return new Promise((reslove, reject) => {
        setTimeout(() => {
          this.text = 2
          reslove()
        }, 3000)
      })
    }
  }
}
</script>