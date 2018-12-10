<template>
  <div class="link">
    <router-link :to="activeLink">
      <a>
        <h2>{{ link.title }}</h2>
        <p>{{ link.details }}</p>
      </a>
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
  flex-grow: 1;
  flex-basis: 30%;
  width: 16rem;
  margin-left: 2rem;
  margin-right: 2rem;
  margin-top: 1rem;
  margin-bottom: 1rem;
  background: #2C3043;
  border-style: solid;
  border-width: 0.075rem;
  border-radius: 0.25rem;
  border-color: transparent;

  h2 {
    font-size: 1.25rem;
    font-weight: 800;
    border-bottom: none;
    margin-bottom: 0;
    padding-bottom: 0.125rem;
    padding-left: 0.875rem;
    padding-right: 0.875rem;
    color: lighten($textColor, 10%);
  }

  p {
    color: lighten($textColor, 25%);
    font-size: 0.875;
    font-weight: 400;
    padding-left: 0.875rem;
    padding-right: 0.25rem;
  }
}

@media (max-width: $MQMobile) {
  .link {
    max-width: 100%;
    padding: 0 2.5rem;
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
