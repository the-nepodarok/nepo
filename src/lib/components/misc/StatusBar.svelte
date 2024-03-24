<script>
    import {base} from "$app/paths";

    export let className = '';
    export let text = 'your status here';
</script>

<div class="{className} status-bar">
    <span class="status_text">{text}</span>
    <span class="emoticon">
        <img class="heart" src="{base}/img/heart.svg" width="20" height="20" alt="heart emoticon">
    </span>
</div>

<style>
    .status-bar {
        margin: 0;
        padding: 12px 32px 16px;
        border-radius: 32px 0;
        font-size: 16px;
        line-height: 24px;
        font-style: italic;
        color: #333333;
        background-color: #ffffff;

        display: flex;
        flex-direction: row;
        place-items: center;
        justify-content: center;
        column-gap: 15px;
    }

    .status_text {
        font-style: italic;
    }

    .emoticon {
        display: flex;
        justify-content: space-around;
    }
</style>