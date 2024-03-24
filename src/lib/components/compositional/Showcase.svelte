<script>
    import ShowcaseCard from "$lib/components/compositional/ShowcaseCard.svelte";

    const projects = {
        pigs: {
            title: 'Домик для бездомных поросят',
            img: 'pigs',
            description: 'Сайт для волонтёрского проекта по оказанию помощи морским свинкам',
            details: 'Весь дизайн сайта (картинки для дизайна генерировал нейросетями), ' +
                'половина фронта (сделано на SvelteKit) и большая часть бэкенда (REST на Yii2). ' +
                'После Laravel в Yii уже не хватало некоторых вещей,' +
                ' но также благодаря Laravel написать REST на Yii и ' +
                'заставить его работать с SQLite (который практически не поддерживается фреймворком) оказалось плёвым делом. ' +
                'В ходе работы над проектом использовал подход DRY, написал парочку своих хелперов, ' +
                'оптимизировал запросы к БД, получил небольшой опыт администрирования.',
            href: 'https://domiksvinok.ru/',
        }, readme: {
            title: 'readme',
            img: 'readme',
            description: 'Учебный проект на PHP, который я сам переделал полностью на Laravel и задеплоил на хостинг',
            details: 'При самостоятельном переносе столкнулся с задачами, которые выходят за рамки просто учебного проекта: ' +
                'фоновые задачи (Laravel Queues), скоупы моделей, Laravel компоненты, средства локализации, middlewares и вообще много всего интересного. ' +
                'Для демонстрации можно авторизоваться через "demo@demo.demo" / "demo"',
            href: 'http://nepo.lovestoblog.com/public'
        }
    };
</script>

<ul class="showcase">
    <ShowcaseCard content="{projects.pigs}">
        <p class="coop">
            Работал над проектом в паре с <a class="github-link" href="https://github.com/whatevernumber" target="_blank"> whatevernumber
        </a>
        </p>

        <p class="repository-github">
            <a class="github-link" href="https://github.com/the-nepodarok/pigs" target="_blank">Репозиторий</a>
        </p>
    </ShowcaseCard>

    <ShowcaseCard content="{projects.readme}">

    </ShowcaseCard>
</ul>

<style>
    .showcase {
        display: flex;
        flex-direction: row;
        flex-wrap: wrap;
        justify-content: center;
        list-style-type: none;
        padding: 2%;
        column-gap: 5%;
        row-gap: 25px;
    }

    .github-link {
        display: inline-flex;
        align-items: center;
        vertical-align: middle;
        color: #517375;
    }

    .github-link:hover {
        color: #c97e3c;
    }

    .github-link:visited {
        color: #515f6e;
    }

    .github-link::before {
        content: "";
        width: 25px;
        height: 25px;
        margin: 0 3px;
        background-image: url("/img/github.gif");
        background-size: contain;
    }
</style>