<script>
    import Nav from "$lib/components/header/Nav.svelte";
    import Footer from "$lib/components/footer/Footer.svelte";
    import Section from "$lib/components/compositional/Section.svelte";
    import {page} from "$app/stores";
    import {base} from "$app/paths";

    let alt = false;
    let ru;

    $: ru = !!$page.url.href.includes('ru');
</script>

<header class="page-header" class:alt>
    <Section className="header-section">
        <h1 class="page-title">nepo here!</h1>
        <img class="cool-glasses" src="{base}/img/glasses.png">
        <Nav {ru} />
    </Section>
</header>

<slot></slot>

<Footer bind:alt {ru} />

<style>
    .page-header {
        color: #333333;
        background-color: #c97e3c;
        box-shadow: 0 2px 2px rgba(0, 0, 0, 0.2);
        position: relative;
    }

    .page-header.alt {
        background-color: #517375;
    }

    .page-header a {
        font-size: 16px;
        line-height: 24px;
    }

    .page-header a:hover {
        color: #fff;
        border-color: #eae9f2;
        background-color: transparent;
        transition: 500ms, background-color 500ms;
    }

    .page-title {
        margin: 0;
        margin-bottom: 4px;
        padding: 0;
        font-weight: bold;
        font-size: 36px;
        line-height: 48px;
    }

    .cool-glasses {
        width: 70px;
        position: absolute;
        bottom: 1320px;
        right: 40px;
        rotate: 7deg;
        animation: glasses;
        animation-delay: 5s;
        animation-duration: 10s;
        animation-fill-mode: forwards;
    }

    @keyframes glasses {
        from {
            display: block;
            bottom: 2000px;
        }

        to {
            display: block;
            bottom: 93px;
        }
    }
</style>