<script>
    import {base} from "$app/paths";

    export let content = {};
</script>

<li class="showcase-card">
    <a class="showcase-card-link" href="{content.href}" target="_blank">
        <img src="{base}/img/{content.img}-screen.png" alt="Скриншот веб-страницы">
        <h2 class="card-title">
            {content.title}
        </h2>
    </a>
    <h3>Что из себя представляет:</h3>
    <p class="card_text">
        {content.description}
    </p>
    <h3>Чем занимался:</h3>
    <ul class="card-details">
    {#each content.details.split('. ').filter(i => i) as task}
            <li>
                {task}
            </li>
    {/each}
    </ul>
    <slot />
</li>

<style>
    img {
        max-width: 100%;
    }

    .showcase-card {
        display: flex;
        flex-direction: column;
        align-items: flex-end;
        width: 450px;
        padding: 15px;
        border: 6px dotted #c97e3c;
        outline: 6px dotted #517375;
        font-family: Bahnschrift, "Roboto Light", sans-serif;
        font-size: 16px;
        line-height: 1.5;
        text-align: justify;
    }

    .card-title {
        line-height: 1;
    }

    h2, h3 {
        margin: 0.5em 0;
    }

    h3 {
        color: #517375;
        font-size: 16px;
        align-self: flex-start;
    }

    :global(.showcase-card p) {
        margin: 0 0 3%;
    }

    .card_text {
        font-style: italic;
    }

    .card-details {
        color: #333333;
        margin-bottom: 3%;
        padding: 0 20px;
    }

    .showcase-card-link {
        color: #515f6e;
        transition-duration: 0.2s;
    }

    .showcase-card-link:hover {
        color: #c97e3c;
        transform: rotate3d(30, 30, 30, 2deg);
    }

    .showcase-card-link:active {
        color: #517375;
    }

    .showcase-card-link:visited {

    }
</style>