<script>
    import Main from "$lib/components/compositional/Main.svelte";
    import Section from "$lib/components/compositional/Section.svelte";
    import FancyList from "$lib/components/compositional/FancyList.svelte";
    import StatusBar from "$lib/components/misc/StatusBar.svelte";
    import {base} from "$app/paths";

    const be_skills = ['PHP 8+ ❤️', 'Laravel 9+', 'Yii2+', 'MySQL 8+, SQLite', 'REST API', 'Docker'];
    const fe_skills = ['HTML 5, CSS 3', 'JavaScript ES6+', 'Svelte JS ❤️'];
</script>

<Main>
    <Section className="about">
        <h2 class="section-title">Немного обо мне</h2>
        <a href="https://github.com/the-nepodarok/">
            <img class="about-image" src="{base}/img/github.png" width="147" height="147" alt="the_nepodarok">
        </a>
        <div class="about-content">
            <p>
                <q>Everyone is terrible, so we're all gonna be terrible.</q>
<!--                <img class="nepo" src="/src/lib/img/img.gif" alt="the_nepodarok">-->
            </p>
            <p class="greetings">Крутой back-end || full-stack разработчик 😎</p>
        </div>
    </Section>

    <!--    <article><a href="https://mynickname.com/id1272047"><img src="https://mynickname.com/img.php?id=1272047&sert=1" alt="Сертификат на никнейм the_nepodarok, зарегистрирован на Anton Kosov" border="0" /></a>    <br><br></article>-->

    <Section className="status">
        <h2 class="section-title">Current mood:</h2>
        <StatusBar text="#мытутзажжём"/>
    </Section>

    <Section className="skills">
        <h2 class="section-title skills-title">Изучал и работал с:</h2>
        <div class="sub-section">
            <div>
                <h3 class="sub-section-title">Back-End</h3>
                <FancyList data="{be_skills}" className="skills-list"/>
            </div>
            <div>
                <h3 class="sub-section-title">Front-End</h3>
                <FancyList data="{fe_skills}" className="skills-list"/>
            </div>
        </div>
    </Section>
</Main>

<style>
    q {
        font-family: monospace;
        font-size: 14px;
        font-style: italic;
    }

    .greetings {
        font-family: monospace;
        font-size: 14px;
        font-weight: 800;
    }

    .section-title {
        width: 100%;
        margin: 0 0 20px;
        padding: 0;
        font-weight: bold;
        font-size: 18px;
        line-height: 20px;
    }

    .about-image {
        width: 147px;
        height: 147px;
        border-radius: 50%;
    }

    .about-content {
        width: 410px;
        font-size: 14px;
        line-height: 24px;
        margin-top: 14px;
    }

    .about-content i {
        font-size: 16px;
        margin: 0;
        margin-bottom: 12px;
        padding: 0;
    }

    .section-title {
        text-align: center;
    }

    .sub-section {
        display: flex;
        justify-content: space-between;
        align-items: flex-start;
    }

    .nepo {
        padding-top: 11px;
        padding-left: 0;
    }

    h3 {
        margin: 0;
    }

    i,p,h2,h3 {
        cursor: default;
    }
</style>