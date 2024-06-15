// Create a serve.ts file
import { serve } from "https://deno.land/x/esbuild_serve/mod.ts";

serve({
    pages: {
        "index": "mod.ts",
    },
    extraLoaders: {
        ".jpeg": "file",
    },
    assets: {
        "/poster.png": "poster.png",
        "/smallspeaker.svg": "smallspeaker.svg",
        "/djmichi.png": "djmichi.png",
        "/event1.webp": "event1.webp",
        "/event2.webp": "event2.webp",
    },
    defaultTemplate: createTemplate,
});

function createTemplate(name: string, path: string) {
    return `
<!DOCTYPE html>
<html lang="en">
<head>
    <title>Interstellar Sound Kollektiv</title>
    <link rel="manifest" href="/app.webmanifest">
    <meta charset='UTF-8'>
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <meta name='theme-color' content='black'>
    <meta name="apple-mobile-web-app-capable" content="yes">
    <meta name="apple-mobile-web-app-status-bar-style" content="black">
    <meta name="google" content="notranslate"/>
    <link rel="apple-touch-icon" href="/images/apple.png">
    <link rel="stylesheet" href="${name}.css">
    <script defer data-domain="bbn.one" src="https://pl.bbn.one/js/script.js"></script>
</head>

<body>
    <script src="${name}.js" type="module"></script>
</body>

</html>
    `.trim();
}
