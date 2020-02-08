<template>
    <div class="items">{{ works }}</div>
</template>

<script>
export default {
    name: "PortfolioWorks",
    props: {
        works: {
            type: String,
            default: 'No Heading',
            required: true
        }
    }
}
</script>

<style scoped>
    .items {
        height: 100%;
        width: 100%;
        margin: 1rem;
        display: flex;
        justify-content: center;
        align-items: center;
        border-radius: 8px;
        border: 3px solid #ccc;
        background-color: #ddd;
    }
</style>