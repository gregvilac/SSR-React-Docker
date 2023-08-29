This is a template for SSR React deployments with Vite and Docker.

Metatags can be injected on the server along with stringified html for the UI. It would be crawlable for search engines and social media friendly. One caveat is code still runs on the client like a typical CSR React app, so there wouldn't be any improvements to reduced bundle sizes or page load times.

You may need to adjust the base images in the dockerfile depending on your host system, but to run the project, first install docker, then run these commands.

`docker build -t project-name .`
`docker run -p 8080:8080 project-name`
