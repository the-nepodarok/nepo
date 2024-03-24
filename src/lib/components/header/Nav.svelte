<script>
    import UrlList from "$lib/components/compositional/UrlList.svelte";

    export let ru = false;

    let contactLinks = [
        {
            prompt: 'on GitHub',
            link: 'https://github.com/the-nepodarok/'
        },
        {
            prompt: 'via e-mail',
            link: 'mailto:orange.loot@inbox.ru',
        }
    ];
    $: navRoutes = [
        {
            prompt: ru ? 'Главная' : 'Main page',
            link: '/' + (ru ? 'ru' : '')
        },
        {
            prompt: ru ? 'Мои проекты' : 'My projects',
            link: (ru ? '/ru' : '') + '/projects'
        },
        {
            prompt: ru ? 'Моя музыка' : 'My music',
            link: '/music'
        }
    ];
</script>

<p><i>
    {ru ? 'Связь со мной' : 'Contact me'}:
</i></p>
<UrlList data="{contactLinks}" className="contacts" external />
<nav class="nav-list">
    <UrlList data="{navRoutes}" />
</nav>

<style>
    .nav-list {
        width: max-content;
    }
</style>