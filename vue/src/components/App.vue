<template>
    <div class="container">
        <my-header>My App</my-header>
    </div>
</template>

<script>
import Header from './Header';

export default {
    name: 'app',
    components: {
        'my-header': Header
    }
};
</script>

<style lang="scss" scoped>
.container {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
}
</style>

