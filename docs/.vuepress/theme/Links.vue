<template>
  <div class="links" v-if="linksData && linksData.length">
    <div v-for="link in linksData">
      <Link :link="link"/>
    </div>
  </div>
</template>
<script>
import Link from "./Link.vue";

export default {
  components: { Link },
  props: {
    linkSet: {
      required: true
    }
  },
  computed: {
    linksData() {
      return this.linkSet;
    }
  }
};
</script>

<style lang="stylus" scoped>
@import './styles/config.styl';

.links {
  padding: 1rem 0;
  margin-top: 2.5rem;
  display: flex;
  flex-wrap: wrap;
  align-items: flex-start;
  align-content: stretch;
  justify-content: space-between;
}

@media (max-width: $MQMobile) {
  .links {
    flex-direction: column;
  }
}
</style>

