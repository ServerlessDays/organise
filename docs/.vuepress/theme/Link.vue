<template>
  <div class="link">
    <a :href="activeLink">
      <h2>{{ link.title }}</h2>
      <p>{{ link.details }}</p>
    </a>
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
  margin-left: 3rem;
  margin-right: 3rem;
  border-style: solid;
  border-width: 0.075rem;
  border-radius: 0.25rem;
  border-color: transparent;
  box-shadow: 4px 4px 8px 0px rgba(0, 0, 0, 0.2);

  h2 {
    font-size: 1.4rem;
    font-weight: 500;
    border-bottom: none;
    padding-bottom: 0.125rem;
    padding-left: 1rem;
    padding-right: 1rem;
    color: lighten($textColor, 10%);
  }

  p {
    color: lighten($textColor, 25%);
    padding-left: 1rem;
    padding-right: 1rem;
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
