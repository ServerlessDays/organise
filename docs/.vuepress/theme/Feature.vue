<template>
  <div class="feature">
    <h2>{{ feature.title }}</h2>
    <p>{{ feature.details }}</p>
  </div>
</template>
<script>
export default {
  props: {
    feature: {
      require: true
    }
  }
};
</script>
<style lang="stylus" scoped>
@import './styles/config.styl';

.feature {
  flex-grow: 1;
  flex-basis: 30%;
  max-width: 30%;

  h2 {
    font-size: 1.4rem;
    font-weight: 500;
    border-bottom: none;
    padding-bottom: 0;
    color: lighten($textColor, 10%);
  }

  p {
    color: lighten($textColor, 25%);
  }
}

@media (max-width: $MQMobile) {
  .feature {
    max-width: 100%;
    padding: 0 2.5rem;
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
