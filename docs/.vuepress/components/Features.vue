<template>
  <div class="features" v-if="featuresData && featuresData.length">
    <div v-for="feature in featuresData">
      <div class="feature">
        <h2>{{ feature.title }}</h2>
        <p>{{ feature.details }}</p>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  props: {
    featureSet: {
      required: true
    }
  },
  computed: {
    featuresData() {
      return this.$page.frontmatter.features;
    }
  }
};
</script>

<style lang="stylus" scoped>
@import '../theme/styles/config.styl';

.features {
  padding: 1rem 0;
  margin-top: 1rem;
  display: flex;
  flex-wrap: wrap;
  align-items: flex-start;
  align-content: stretch;
  justify-content: space-between;
  max-width: 100%;
}

@media (max-width: $MQMobile) {
  .features {
    flex-direction: column;
  }
}

.feature {
  max-width: 15rem;

  h2 {
    font-size: 1.4rem;
    font-weight: 500;
    border-bottom: none;
    color: lighten($textColor, 10%);
  }

  p {
    color: lighten($textColor, 25%);
  }
}

@media (max-width: $MQMobile) {
  .feature {
    max-width: 100%;
    padding: 0 0rem;
  }
}

@media (max-width: $MQMobileNarrow) {
  .feature {
    h2 {
      font-size: 1.25rem;
    }
  }
}
</style>

