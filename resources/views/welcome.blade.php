<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <link rel="shortcut icon" href="{{ asset('assets/favicon.ico') }}">
    <title>Chat App React</title>
    @viteReactRefresh
    @vite('resources/js/App.jsx')
</head>

<body>
    <noscript>
        <strong>We're sorry but Cork doesn't work properly without JavaScript enabled.</strong> <br>
        <strong>Please enable it to continue.</strong>
    </noscript>
    <div id="app"></div>
</body>

</html>
