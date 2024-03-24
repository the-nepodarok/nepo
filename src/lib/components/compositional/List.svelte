<script>
    export let ordered = false;
    export let className;
</script>

    {#if ordered}
<ol class="{className}">
    <slot name="item-slot"/>
</ol>
    {:else}
<ul class="{className}">
    <slot/>
</ul>
    {/if}

<style>
    ul, ol {
        margin-bottom: 0;
        padding-right: 10px;
        list-style: none;
    }

    .contacts {
        width: max-content;
    }

    :global(li) {
        font-size: 15px;
    }

    .skills-list {
        padding-left: 0;
        display: flex;
        flex-direction: column;
        row-gap: 14px;
    }

    .skills-list :global(li::before) {
        display: inline-flex;
        content: "";
        width: 15px;
        height: 15px;
        background: url("/src/lib/img/tick.svg") no-repeat;
        background-size: contain;
        padding-right: 5px;
    }

    .contacts :global(li) {
        padding-left: 12px;
    }
</style>