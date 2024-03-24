<script>
    import Section from "$lib/components/compositional/Section.svelte";
    import {base} from "$app/paths";
    export let alt = false;
    export let ru = false;

    const svelteFancify = (evt) => {
        evt.target.style.color = "salmon";
        evt.target.style.backgroundColor = "ghostwhite"
    }

    const backToNormal = (evt) => {
        evt.target.style.backgroundColor = null;
        evt.target.style.color = '#ffffff';
    }
</script>

<footer class="page-footer" class:alt>
    <Section>
        <p>&rarrlp; <span class="nickname" class:alt>the_nepodarok</span> ©</p>
        <p>
            <a class="langru" href="{ base + (ru ? '' : '/ru')}">
                {ru ? 'English, plz' : 'А на русском можно?'}
            </a>
        </p>
        <p>
            <button class="button" on:click={() => alt = !alt}>
                {ru ? 'Немного реактивности' : 'Some reactivity'}
            </button>
        </p>
        <p>Made with <a href="https://kit.svelte.dev/"
                        on:mouseover={svelteFancify}
                        on:mouseleave={backToNormal}>
            SvelteKit</a> <span class="year" class:alt>2023</span> &larrlp;</p>
    </Section>
</footer>

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

    .page-footer p {
        margin: 0;
        padding: 0;
        text-align: center;
        width: 25%;
    }

    .page-footer {
        margin-top: auto;
        color: #ffffff;
        background-color: #c97e3c;
    }

    .page-footer :global(section) {
        width: 50vw;
    }

    .page-footer.alt {
        background-color: #517375;
    }

    .page-footer :global(section) {
        display: flex;
        align-items: center;
        justify-content: space-between;
        width: 100%;
        padding: 12px 5% 14px;
    }

    .button {
        border: none;
        background-color: transparent;
        font: inherit;
        color: inherit;
        cursor: pointer;
    }

    .button:hover {
        color: cyan;
    }

    .button:active {
        color: #6e3cc9;
    }

    .nickname {
        font-weight: bold;
        transition: 600ms;
        color: #517375;
    }

    .nickname.alt {
        transition: 600ms;
        color: #c97e3c;
    }
</style>