// const vpn = require('cisco-vpn')({
//     server: 'contractor.cengage.net',
//     username: 'pdixit',
//     password: 'hpd@6277'
// })

//   vpn.connect()
//     .then(() => console.log('connected!'))


var requestify = require('requestify');

requestify.get('http://ip.jsontest.com/')
  .then(function(response) {
      // Get the response body (JSON parsed or jQuery object for XMLs)
       var body = JSON.stringify(response.getBody());
      console.log('Body: ' + body);
  }
);