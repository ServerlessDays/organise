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
  margin-top: 1rem;
  float: left;
  width: 100%;
}

@media (max-width: $MQMobile) {
  .links {
    flex-direction: column;
  }
}
</style>

