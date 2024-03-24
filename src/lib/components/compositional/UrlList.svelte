<script>
    import List from "$lib/components/compositional/List.svelte";
    import {base} from "$app/paths";

    export let data = [];
    export let className;
    export let external = false;
</script>

<List {className}>
    {#each data as item}
        <li>
            <a href="{external ? item.link : base + item.link}" target="{external ? '_blank' : '_self'}">
                {item.prompt}
            </a>
        </li>
    {/each}
</List>

<style>
    a {
        color: #fff;
    }

    a:hover {
        color: cyan;
    }

    a:focus {
        color: rebeccapurple;
        outline: none;
    }

    ul.contacts {
        width: max-content;
    }
</style>