<script>
    import List from "$lib/components/compositional/List.svelte";

    export let data = [];
    export let className;
</script>

<List {className}>
        {#each data as item}
    <li>
        <i>{item}</i>
    </li>
        {/each}
</List>
