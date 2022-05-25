/*
    mysql bulk insertion in nodejs 
*/
let users = [
    {
        firstname: 'john',
        lastname: 'smith',
        email: 'email@gmail.com',
        company_id: 'Bohemia',
        password: 'sunny@#3'
    }
];
let time = moment().format('YYYY-MM-DD HH:mm:ss');                                                             
let insert = `INSERT INTO tbox_admin.tbox_registers (firstname, lastname, email, password, company_id, created) VALUES ?`;   
appModel.query(insert, [users.map(item => [item.firstname, item.lastname, item.email, item.password, item.company_id, time])],       
function(err, rows) {                            
    if(err){                              
        console.log(err, 'err====')                               
    }else{                  
        res.send('Success')                                       
    }                          
})