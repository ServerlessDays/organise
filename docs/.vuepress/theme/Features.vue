<template>
  <div class="features" v-if="featuresData && featuresData.length">
    <div v-for="feature in featuresData">
      <Feature :feature="feature"/>
    </div>
  </div>
</template>
<script>
import Feature from "./Feature.vue";

export default {
  components: { Feature },
  props: {
    featureSet: {
      required: true
    }
  },
  computed: {
    featuresData() {
      return this.featureSet;
    }
  }
};
</script>

<style lang="stylus" scoped>
@import './styles/config.styl';

.features {
  border-top: 1px solid $borderColor;
  padding: 1rem 0;
  margin-top: 2.5rem;
  display: flex;
  flex-wrap: wrap;
  align-items: flex-start;
  align-content: stretch;
  justify-content: space-between;
}

@media (max-width: $MQMobile) {
  .features {
    flex-direction: column;
  }
}
</style>

