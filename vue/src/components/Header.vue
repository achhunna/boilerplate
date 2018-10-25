<template>
    <div class="header">
        <slot>Default Header</slot>
    </div>
</template>

<script>
export default {
    name: 'my-header'
};
</script>

<style lang="scss" scoped>
.header {
    font-size: 48px;
}
</style>

