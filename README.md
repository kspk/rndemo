# React Native demo app 

1. Clone this project from github
> git clone https://github.com/kspk/rndemo.git

Under the root folder there are 2 subfolders, _feed_: that is a simple website to serve media assets, and _player_: which is the react native app that uses this feed to create a video player.

2. Start the feed server

    `cd feed`

    `npm i`

    `npm start`

3. Start the React Native app for iOS

    `cd player`

    `npm i`

    `cd ios`

    `pod install`

    `cd ..`

    `npm run ios`
