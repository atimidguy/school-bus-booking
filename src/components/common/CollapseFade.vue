<template>
  <transition name="CollapseFade">
    <slot />
  </transition>
</template>

<script>
export default {
  name: 'CollapseFade',
};
</script>

<style lang="scss" scoped>
.collapse-fade-enter-active,
.collapse-fade-leave-active {
  transition: all 0.3s;
  max-height: 2.4rem;
}

.collapse-fade-enter,
.collapse-fade-leave-to {
  max-height: 0;
  padding-top: 0;
  padding-bottom: 0;
}
</style>
