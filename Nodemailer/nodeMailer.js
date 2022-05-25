/*
	If your mail not work so do things like 
	1. less secure [on] form yout google account
	2. Go to account setting in gmail > all settings > Forwarding and POP/IMAP > 
	.. Enable POP for all mail <- Enable
	.. Enable IMAP             <- Enable
	second do this code...
*/

let nodemailer    = require('nodemailer');
let smtpTransport = require('nodemailer-smtp-transport');
let transporter   = nodemailer.createTransport(
    smtpTransport({    
        service: 'gmail',
        host: 'smtp.gmail.com',
        port: 587,
        ignoreTLS: false,
        secure: false,
        auth: {        
            user: process.env.authUser,        
            pass: process.env.authPass
        }
    }
);

let mailOptions = {
    from: `"Blog Comments" <${req.body.email}>`,
    to: 'prachi@wegile.com', // for Multiple ** himani@wegile.com, eampactful@gmail.com, pritam@wegile.com **
    subject: 'Blog Comment Request',
    html: `<p>You have a new <b> Comments </b> request.</p>`
};

transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
    	console.log(error);
    }else{
    	//here responce
    }
})

//-- Default Desing Of Mail (html) --

/*
    `
    <body>
        <div style="padding:0 !important; margin:0 !important; display:block !important; min-width:100% !important; width:100% !important; background:#ffffff; -webkit-text-size-adjust:none;box-sizing: border-box;">
            <div style="background-color:#fff; width: 100%; margin: 0 !important; padding: 0 !important;">
                <div style="max-width: 700px; margin:30px auto;border:1px solid rgba(0,0,0,0.07); box-shadow: 0 .125rem .25rem rgba(0,0,0,.075)!important;">
                    <div style="margin: 0 15px;  padding:30px 10px">
                        
                        //made your changes according to your requirements

                        <!--<img src="${global.SITE_URL}/img/logo.png" height="40px" /></a>-->
                        <h1 style="color: #000;font-family: Arial, Helvetica, sans-serif; font-weight: normal; text-align: left; font-size: 16px; margin-top: 0px; margin-bottom: 25px; margin-top: 30px;">
                            Hi <span style="font-weight: bold;">${first_name} ${last_name}</span>,</h1>
                        <p style="color: #000;font-family: Arial, Helvetica, sans-serif; font-weight: normal; text-align: left; font-size: 16px; line-height: 26px; margin-bottom: 25px; margin-top: 0px;">
                            <span style="font-weight: bold;">${first_name} ${last_name}</span> Please click on link to reset your password.</p>                             
                        <p style="color: #000;font-family: Arial, Helvetica, sans-serif; font-weight: bold; text-align: left; font-size: 16px; margin-top: 25px; margin-bottom: 20px;">
                            Informations:</p>
                        <table
                            style="border-left: 1px solid #d7d8d6;border-right: 1px solid #d7d8d6;border-top: 1px solid #d7d8d6;  margin-top: 20px;"
                            class="bg_white" role="presentation" width="100%" cellspacing="0" cellpadding="0">
                            <tbody>
                                <tr style="border-bottom: 1px solid #d7d8d6;">
                                    <td style="text-align:left; padding: 10px 10px;border-bottom: 1px solid #d7d8d6;border-right: 1px solid #d7d8d6;background-color: #e4e8ea;"
                                        width="30%" valign="middle">
                                        <p
                                            style="color: #000; font-family: Arial, Helvetica, sans-serif; font-weight: normal; font-weight: 400; font-size: 16px; margin-top: 5px; margin-bottom: 5px;">
                                            Phone Number:</p>
                                    </td>
                                    <td
                                        style="border-bottom: 1px solid #d7d8d6;border-right: 1px solid #d7d8d6;padding: 10px 10px; text-align: left">
                                        <span class="price"
                                            style="color: #000; font-family: Arial, Helvetica, sans-serif; font-weight: normal; font-weight: 400; font-size: 16px">${phone_number}
                                        </span>
                                    </td>
                                </tr>
                                <tr style="border-bottom: 1px solid #d7d8d6;">
                                    <td style="text-align:left; padding: 10px 10px;border-bottom: 1px solid #d7d8d6;border-right: 1px solid #d7d8d6;background-color: #e4e8ea;"
                                        width="30%" valign="middle">
                                        <p style="color: #000; font-family: Arial, Helvetica, sans-serif; font-weight: normal; font-weight: 400; font-size: 16px; margin-top: 5px; margin-bottom: 5px;">
                                            Password</p>
                                    </td>
                                    <td
                                        style="border-bottom: 1px solid #d7d8d6;border-right: 1px solid #d7d8d6;padding: 10px 10px; text-align: left">
                                        <span class="price"
                                            style="color: #000; font-family: Arial, Helvetica, sans-serif; font-weight: normal; font-weight: 400; font-size: 16px">${"*".repeat(password.length)}                 </span>
                                    </td>
                                </tr>
                                <tr style="border-bottom: 1px solid #d7d8d6;">
                                    <td style="text-align:left; padding: 10px 10px;border-bottom: 1px solid #d7d8d6;border-right: 1px solid #d7d8d6;background-color: #e4e8ea;"
                                        width="30%" valign="middle">
                                        <p
                                            style="color: #000; font-family: Arial, Helvetica, sans-serif; font-weight: normal; font-weight: 400; font-size: 16px; margin-top: 5px; margin-bottom: 5px;">
                                            User Type</p>
                                    </td>
                                    <td
                                        style="border-bottom: 1px solid #d7d8d6;border-right: 1px solid #d7d8d6;padding: 10px 10px; text-align: left">
                                        <span class="price"
                                            style="color: #000; font-family: Arial, Helvetica, sans-serif; font-weight: normal; font-weight: 400; font-size: 16px">${user_type}
                                        </span>
                                    </td>
                                </tr>
                                 <tr>
                                    <td colspan="2">
                                        <a role="button" href="${global.SITE_URL}/admin/updatePassword/${email}" style="font-family: Arial, Helvetica, sans-serif;color:#fff;background:#2262ec;border-color:#2262ec;padding:14px;border:1px solid;font-size:17px;border-radius:8px;margin:60px auto 0px;width:210px;display:block;text-align:center;text-decoration:none;padding-top:18px;font-weight:600" target="_blank">RESET PASSWORD</a>
                                    </td>
                                </tr>
                            </tbody>
                        </table>

                        //END made your changes according to your requirements
                    </div>
                </div>
            </div>
            <div style="background-color:#116dfa; max-width: 700px; margin: 0 auto !important; padding: 0 !important;">
                <div style="max-width: 700px; margin:auto;">
                    <div style="margin: 30px 15px 0 15px;  padding:70px 10px 60px 10px">
                        <h2 style="color: #fff;font-family: Arial, Helvetica, sans-serif; font-weight: bold; text-align: center; font-size: 20px; margin-bottom: 20px;">Follow Us On Social</h2>
                        <div style="width:200px; margin:0 auto; display:block; text-align:center">
                            <a href="#!"> <img src="https://i.ibb.co/9vWvvJM/instagram.png" alt="instagram" width="25px" /></a>
                            <a href="#!"> <img src="https://i.ibb.co/bLSSh0R/twitter.png" alt="twitter" width="25px" style="margin:0 15px;" /></a>
                            <a href="#!"> <img src="https://i.ibb.co/LZYm5NS/facebook.png" alt="facebook" width="25px" /></a>
                         </div>
                    </div>
                </div>
            </div>
        </div>
    </body>
    `
*/