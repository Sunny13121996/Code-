/*
	Token verification form backend
	To make your token go to this link -> https://www.google.com/recaptcha/about/
*/
var request = require('request');
var token = post['g-recaptcha-response'];
var url = `https://www.google.com/recaptcha/api/siteverify?secret=6LdvMqwaAAAAABMvS5LoguWcwk6f2TR4kzCvv95z&response=${token}&remoteip=${req.connection.remoteAddress}`
if (token === null || token === undefined) {
    res.render('admin/sign-up.ejs', {
        message: 'Token recaptcha is empty or invalid',
        errors: 'error',
        email: '',
        pagetitle: '',
        description: '',
        keywords: ''
    });
}
request(url, function(err, response, body) {
    body = JSON.parse(body);
    if (body.success !== undefined && !body.success) {
        res.render('admin/sign-up.ejs', {
            message: 'recaptcha failed',
            errors: err,
            email: '',
            pagetitle: '',
            description: '',
            keywords: ''
        });
    }
});