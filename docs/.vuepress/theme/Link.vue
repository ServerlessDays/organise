<template>
  <div class="link">
    <router-link class="row" :to="activeLink">
      <h2>{{ link.title }}</h2>
      <span>{{ link.details }}</span>
    </router-link>
  </div>
</template>
<script>
export default {
  props: {
    link: {
      require: true
    }
  },
  computed: {
    activeLink() {
      return this.$route.path + this.link.link;
    }
  }
};
</script>
<style lang="stylus" scoped>
@import './styles/config.styl';

.link {
  width: 80%;
  padding: 1rem 0rem 1rem 1rem;
  background: $softHighlight;
  margin: 1rem 0rem 1rem 0rem;

  .cell {
    display: table-cell;
  }

  h2 {
    font-size: 1.25rem;
    font-weight: 800;
    padding: 0 0 0.125rem 0;
    margin: 0 0 0 0;
    color: $textColor;
    border-bottom: 0 solid transparent;
    text-decoration: none;
    vertical-align: middle;
  }

  span {
    color: lighten($textColor, 25%);
    font-size: 0.75;
    font-weight: 400;
    vertical-align: middle;
    width: 70%;
  }
}

@media (max-width: $MQMobile) {
  .link {
    width: 90%;
    padding: 0.5rem 1rem 0.5rem 1rem;
  }
}

@media (max-width: $MQMobileNarrow) {
  .link {
    h2 {
      font-size: 1.25rem;
    }
  }
}
</style>
