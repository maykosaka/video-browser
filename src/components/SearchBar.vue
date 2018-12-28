<template>
    <div>
        <ul>
            <li>Video Crawler</li>
            <li><input @input="onInput" /></li>
        </ul>
    </div>
</template>

<script>
export default {
    name: 'SearchBar',
    methods: {
        onInput: function(event) {
            this.$emit('termChange', event.target.value);
        }
    }
};
</script>

<style scoped>
    input {
        width: 75%;
    }

    div {
        text-align: center;
        margin: 20px;
    }

    ul {
        list-style-type: none
    }

    li {
        margin: 10px;
    }
</style>