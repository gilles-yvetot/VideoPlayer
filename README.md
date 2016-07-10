# VideoPlayer
Simple Video Player to broadcast a video from LiveStream API.

### React
I wanted this assignment to be fun and instructive for me as well, so I jumped into React to start building component-based web app using ES2015. 
I think Angular 2 is a pretty solid framework as well but it would have taken too much time to learn the Typescript language and a new framework, that's why I opted for React.
I also think that React will become way more popular and used than Angular 2. I used some ES6 (ES2015) features like string templating, the arrows syntax, the class definition, let...

### Requirement
- Node
- npm

### Installation
- `git clone https://github.com/gilles-yvetot/VideoPlayer`
- `cd VideoPlayer` navigate to the main folder 
- `npm i` to install the dependencies
- `npm start` to launch the app
- `node_modules/.bin/webpack` to generate a bundle file (minified, dependencies, ES5 translated...) 

### Livestream API
I did struggle with the Livestream API, because there is alomost no documentation online and also because it is not a public API, 
so I had to fight with CORS security, which I bypassed with a [Chrome extension](https://chrome.google.com/webstore/detail/allow-control-allow-origi/nlfbmbojpeacfghkpbjhddihlkkiljbi?hl=en).
I did tried changing the hostname by modifying my local web server, but diving into webpack-dev-server config was too complexed for a beginner in React and not the purpose of this assignment.
I also tried modifying directly my /etc/hosts file but it was not working on Chrome.


