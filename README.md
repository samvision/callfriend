Webrtc vc
Complete server-client app for multiple peers video conference using WebRTC.

What the app does
This sample code demonstrates a client/server architecture running on Nodejs. This app makes use of Socket.IO and WebRTC.

When a peer visits http://127.0.0.1:7777/, a new room url is generated, which can then be used to invite others to the video conference.

At the moment WebRTC is supported only by a limited number of browsers: Chrome, Firefox and Opera.

How to run the code
Clone the repo: $ git clone https://github.com/samvision/callfriend.git
$ cd callfriend
$ npm install (you may need root access)
$ node server.js
Access the app from a WebRTC capable webbrowser through http://127.0.0.1:7777/
Note: Ensure to use npm config set proxy http://"username:password"@proxy-server.com:8080, if you are behind a internet proxy.