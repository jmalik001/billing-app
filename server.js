var express = require('express')
var app = express()

app.use(express.static('./dist/billing-app'));

app.get('/*', function (req, res) {
    res.sendFile('index.html', { root: 'dist/billing-app/' }
    );
});

app.listen(process.env.PORT || 8080);