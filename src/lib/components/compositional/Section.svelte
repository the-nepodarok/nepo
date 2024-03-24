<script>
    export let className;
</script>

<section class="{className}">
    <slot/>
</section>

<style>
    section {
        width: 580px;
        margin: 0 auto;
    }

    section.header-section {
        padding: 1rem 0;
        background-image: url("/src/lib/img/profile1.png");
        background-repeat: no-repeat;
        background-position: center right;
        background-size: 194px 191px;
        position: relative;
    }

    section.about {
        display: flex;
        flex-wrap: wrap;
        justify-content: space-between;
    }
</style>