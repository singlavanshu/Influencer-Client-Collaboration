// var express = require("express");
// var mysql2 = require("mysql2");
// //const path = require('path');
// var fileuploader = require("express-fileupload");
// const http = require("http");
// const nodemailer = require("nodemailer");
// const { resolve } = require("path");


// let app = express();
// app.listen(2001,function(req,resp)
// {
//     console.log("Server Started....");
// })
// app.use(express.urlencoded("true"));
// app.use(fileuploader);
// let config = 
// {
//     host: "127.0.0.1",
//     user: "root",
//     password: "vanshu@1510",
//     database: "project",
//     dateStrings: true
// }

// var mysql = mysql2.createConnection(config);
// mysql.connect(function(err){
//     if(err==null)
//         console.log("Connected to database Successfully..");
//     else 
//     console.log(err.message+" *********");
// })
// app.use(express.static(path.join(__dirname, "/public")));

// // Serve files from the pics directory with URL prefix /pics
// app.use('/pics', express.static(path.join(__dirname, 'pics')));
// app.get("/", function(req,resp)
// {
//     let path = __dirname + "/public/index.html";
//     resp.sendFile(path);

// })

// app.get("/insert-values",function(req,resp){
//     console.log(req.query);
//    mysql.query("insert into users values (?,?,?,?)",[req.query.txtEmail,req.query.txtPwd,req.query.select,1],function(err){
//     if(err==null)
//         resp.send("Signup Successfully");
//     else
//     console.log(err.message);
//    }) 
// })

// app.get("/login-process",function(req,resp)
// {
//     let emaill = req.query.txtEmaill;
//   let pass = req.query.txtPass;

//   mysql.query("select * from users where email =? and pwd = ?",[emaill,pass],function(err,result){
//     if(err!=null)
//     {
//         resp.send(err.message);
//         return;

//     }
//     if(result.length==0)
//     {
//         resp.send("INvalid Id or Password");
//         return;
//     }
//     if(result[0].status==1)
//     {
//         resp.send(result[0].utype);
//         return;
//     }
//     else
//     {
//         resp.send("U R Blocked");
//         return;
//     }
//   })
  
// })


// app.get("/infu-dash", function(req, resp) {
//     let path = __dirname + "/public/infu-dash.html";
//     resp.sendFile(path);
// })
// //app.use(express.static(path.join(__dirname, 'public')));
// //app.use('../pics', express.static(path.join(__dirname, 'pics')));
// app.get("/inf-profile", function(req,resp)
// {
//     let path = __dirname + "/public/inf-profile.html";
//     resp.sendFile(path);
// })
// //app.use(express.static(path.join(__dirname, 'public')));

// app.post("/users-save-process",function(req,resp){
//     //console.log(req.body);
//     let fileName ="";
//     if(req.files!=null)
//     {
//         fileName = req.files.ppic.name;
//         let path = __dirname + "/public/uploads/" + fileName;
//         req.files.ppic.mv(path);
//     }
//     else
//     fileName="nopic.jpg";

//     mysql.query("insert into iprofile values(?,?,?,?,?,?,?,?,?,?,?,?,?,?,?)",[req.body.txtEmail,req.body.txtPwd,fileName,req.body.fname,req.body.lname,req.body.insta,req.body.select,req.body.txtaddress,req.body.city,req.body.combo,req.body.txtdob,req.body.gender,req.body.txtyoutube,req.body.txtfacebook,req.body.TextArea],function(err){
//         if(err==null)
//             resp.send("Saved Successfully...");
//         else
//         resp.send(err.message);
//     })
// })
// app.post("/users-update",function(req,resp){
//     console.log(req.body);
//     let fileName ="";
//     if(req.files!=null)
//     {
//         fileName = req.files.ppic.name;
//         let path = __dirname + "/public/uploads/" + fileName;
//         req.files.ppic.mv(path);
//     }
//     else
//     {
//         fileName=req.body.hdn;
//     }
//     mysql.query("Update iprofile set pwd=?,picpath=?,fname=?,lname=?,iname=?,fields=?,address=?,city=?,state=?,dob=?,gender=?,youtube=?,facebook=?,other=? where email=?",[req.body.txtPwd,fileName,req.body.fname,req.body.lname,req.body.insta,req.body.select,req.body.txtaddress,req.body.city,req.body.combo,req.body.txtdob,req.body.gender,req.body.txtyoutube,req.body.txtfacebook,req.body.TextArea,req.body.txtEmail],function(err,result){
//         if(err==null)
//         {
//             if(result.affectedRows>=1)
//                 resp.send("Updated Successfulyy...");
//             else
//             resp.send("Invalid Email Id");
//         }
//         else
//         resp.send(err.message);
//     })
// })

// app.get("/search-details",function(req,resp)
// {
//     let email = req.query.txtEmail;
//     mysql.query("select * from iprofile where email = ?",[email],function(err,resultJsonAry){
//         if(err!=null)
//         {
//             resp.send(err.message);
//             return;
//         }
//         console.log(resultJsonAry);

//         resp.send(resultJsonAry);
//     })
// })
// app.get("/post-event",function(req,resp){
//     console.log(req.query);
//    mysql.query("insert into events values (?,?,?,?,?,?)",[req.query.txtEmail,req.query.txtEvent,req.query.txtdate,req.query.time,req.query.city,req.query.venue],function(err){
//     if(err==null)
//         resp.send("Succesfully Event Posted");
//     else
//     console.log(err.message);
//    }) 
// })

// app.get("/update-pwd",function(req,resp){
//     console.log(req.body);
//     mysql.query("Update users set pwd=? where email =? ",[req.query.txtNew,req.query.txtemail],function(err,result){
//         if(err==null)
//         {
//             if(result.affectedRows>=1)
//             {
//                 resp.send("Updated Successfully");
//             }
//             else
//             resp.send("Invalid Email ID");
//         }
//         else
//         resp.send(err.message);
//     })
// })
// var mail;
// app.get("/forgot-pwd",function(req,resp)
// {
//     console.log(req.query);
//     let retPwd;
//     mail=req.query.Email;
//     mysql.query("select pwd from users where email=?",[req.query.mail],function(err,result){
//         if(err==null)
//         {
//             console.log(result[0].pwd);
//             retPwd=result[0].pwd;
//             let transporter = nodemailer.createTransport({
//                 service: 'gmail',
//                 auth: {
//                     user: "singlavanshu03@gmail.com",
//                     pass: 'fdmk kewi ikdh jzmu'
//                 }
//             });
//             var mailOptions = {
//                 from: 'singlavanshu03.com',
//                 to: req.query.mail,
//                 subject: 'Sending Email using Node.js',
//                 html: "Thank you For placing your order <br>Visit again "+retPwd,
//             };
//             transporter.sendMail(mailOptions, function (error, info) {
//                 if (error) {
//                     console.log(error);
//                 } else {
//                     console.log('Email sent: ' + info.response);
//                 }
//             });
//             resp.send("password retrieved");
//         }
//         else
//         resp.send(err.message);      
//     })
// })
// app.get("/fetch-all",function(req,resp){
//     mysql.query("select * from users",function(err,resultJsonAry){
//         if(err!=null)
//         {
//             resp.send(err.message)
//             return;
//         }
//         resp.send(resultJsonAry);
//     })
// })

// app.get("/del-one",function(req,resp){
//     mysql.query("delete from users where email =?",[req.query.email],function(err,resultJsonAry){
//         if(err!=null)
//         {
//             resp.send(err.message);
//             return;
//         }
//         resp.send("Deleted");
//     })
// })

// app.get("/block-one",function(req,resp){
//     console.log(req.query);
//     mysql.query("Update users set status =? where email =?",[0,req.query.email],function(err,result){
        
//         if(err==null)
//         {
//             if(result.affectedRows>=1)
//                 resp.send("Blocked");
//             else
//             resp.send("Invalid Email Id");
//         }
//         else
//         resp.send(err.message);
//     })
// })

// app.get("/Unblock-one",function(req,resp){
//     console.log(req.query);
//     mysql.query("Update users set status =? where email =?",[1,req.query.email],function(err,result){
        
//         if(err==null)
//         {
//             if(result.affectedRows>=1)
//                 resp.send("UnBlocked");
//             else
//             resp.send("Invalid Email Id");
//         }
//         else
//         resp.send(err.message);
//     })
// })

// app.get("/show-all",function(req,resp)
// {
//     mysql.query("select * from iprofile",function(err,resultJsonAry){
//         if(err!=null){
//             resp.send(err.message);
//             return;
//         }
//         resp.send(resultJsonAry);
//     })
// })
// app.get("/do-find",function(req,resp)
// {
//     mysql.query("select * from iprofile where fields like ? && city=?",["%"+req.query.fields+"%",req.query.city],function(err,resultJsonAry){
//         if(err!=null){
//             resp.send(err.message);
//             return;
//         }
//         resp.send(resultJsonAry);  
//     })
// })
// app.get("/do-findbyfname",function(req,resp){
//     console.log("heyy");
//     mysql.query("select*from iprofile where fname like ?",["%"+req.query.fname+"%"],function(err,resultJsonAry){
//         if(err!=null)
//         {
//             resp.send(err.message);
//             return;
//         }
//         resp.send(resultJsonAry);
//     })
// })
// app.get("/find-influ",function(req,resp){
//     mysql.query("select * from iprofile where fields like ?",["%"+req.query.fields+"%"],function(err,resultJsonAry){
//         if(err!=null)
//         {
//             resp.send(err.message);
//             return;
//         }
//         resp.send(resultJsonAry);
//     })
// })
// app.get("/influ-finder",function(req,resp){
//     let path =__dirname +"/public/influ-finder.html";
//     resp.sendFile(path);
// })

// app.get("/fetch-event",function(req,resp)
// {
//     mysql.query("select * from events where doe>=current_date()",function(err,resultJsonAry){
//         if(err!=null){
//             resp.send(err.message);
//             return;
//         }
//         resp.send(resultJsonAry);
//     })
// })

// app.get("/del-one-event",function(req,resp){
//     mysql.query("delete from events where email =?",[req.query.email],function(err,resultJsonAry){
//         if(err!=null)
//         {
//             resp.send(err.message);
//             return;
//         }
//         resp.send("Deleted");
//     })
// })
// app.get("/client-save-process",function(req,resp){

//     mysql.query("insert into cprofile values(?,?,?,?,?,?)",[req.query.txtEmail,req.query.state,req.query.txtname,req.query.city,req.query.org,req.query.mobile],function(err){
//         if(err==null)
//             resp.send("Saved Successfully...");
//         else
//         resp.send(err.message);
//     })
// })

// app.get("/client-update",function(req,resp){
    
//     mysql.query("Update cprofile set state=?,name=?,city=?,org=?,mobile=? where email=?",[req.query.state,req.query.txtname,req.query.city,req.query.org,req.query.mobile,req.query.txtEmail],function(err,result){
//         if(err==null)
//         {
//             if(result.affectedRows>=1)
//                 resp.send("Updated Successfulyy...");
//             else
//             resp.send("Invalid Email Id");
//         }
//         else
//         resp.send(err.message);
//     })
// })
// app.get("/search-client",function(req,resp)
// {
//     let cemail=req.query.txtEmail;
//     mysql.query("select * from cprofile where email=?",[cemail],function(err,resultJsonAry){
//         if(err!=null){
//             resp.send(err.message);
//             return;
//         }
//         console.log(resultJsonAry);
//         resp.send(resultJsonAry);
//     })
// })

var express = require("express");
var mysql2 = require("mysql2");
var fileuploader = require("express-fileupload");
var path = require("path");
const http=require("http");
const nodemailer = require("nodemailer");
const { resolve } = require("path");
let app = express();
app.listen(2001,function(req,resp){
    console.log("Server Started :-)😎");
})
app.use(express.urlencoded("true"));

app.use(fileuploader());
let config = {
    host : "127.0.0.1",
    user :"root",
    password :"vanshu@1510",
    database : "project",
    dateStrings:true
}
 
var mysql = mysql2.createConnection(config);
mysql.connect(function(err){
    if(err==null)
        console.log("Connected to Database Sucessfully");
    else
    console.log(err.message + "###########");

})
app.use('/pics', express.static(path.join(__dirname, 'pics')));
app.get("/", function (req, res) {
    res.sendFile(path.join(__dirname, 'public', 'index2.html'));
});

app.get("/insert-values",function(req,resp){
    console.log(req.query);
   mysql.query("insert into users values (?,?,?,?)",[req.query.txtEmail,req.query.txtPwd,req.query.select,1],function(err){
    if(err==null)
        resp.send("Signup Successfully");
    else
    console.log(err.message);
   }) 
})

app.get("/login-process",function(req,resp)
{
  let emaill = req.query.txtEmaill;
  let pass = req.query.txtPass;

  mysql.query("select * from users where email =? and pwd = ?",[emaill,pass],function(err,result){
    if(err!=null)
    {
        resp.send(err.message);
        return;

    }
    if(result.length==0)
    {
        resp.send("INvalid Id or Password");
        return;
    }
    if(result[0].status==1)
    {
        resp.send(result[0].utype);
        return;
    }
    else
    {
        resp.send("U R Blocked");
        return;
    }
  }
  )
})


app.get("/infu-dash", function(req, resp) {
    let path = __dirname + "/public/infu-dash.html";
    resp.sendFile(path);
    console.log("page connected");
})
app.get("/admin-dash", function(req, resp) {
    let path = __dirname + "/public/admin-dash.html";
    resp.sendFile(path);
    console.log("page connected");
})
app.use(express.static(__dirname+"/public"));
app.get("/inf-profile", function(req, resp) {
    let path = __dirname + "/public/inf-profile.html";
    resp.sendFile(path);
    console.log("page connected");
})
app.use(express.static(__dirname+"/public"));
app.get("/events-manager", function(req, resp) {
    let path = __dirname + "/public/events-manager.html";
    resp.sendFile(path);
    console.log("page connected");
})
app.use(express.static(__dirname+"/public"));
app.get("/admin-users", function(req, resp) {
    let path = __dirname + "/public/admin-users.html";
    resp.sendFile(path);
    console.log("page connected");
})
app.use(express.static(__dirname+"/public"));
app.get("/admin-all-infl", function(req, resp) {
    let path = __dirname + "/public/admin-all-infl.html";
    resp.sendFile(path);
    console.log("page connected");
})
app.use(express.static(__dirname+"/public"));
app.get("/client-profile", function(req, resp) {
    let path = __dirname + "/public/client-profile.html";
    resp.sendFile(path);
    console.log("page connected");
})

app.post("/users-save-process",function(req,resp){
    let fileName ="";
    if(req.files!=null)
    {
        fileName = req.files.ppic.name;
        let path = __dirname + "/public/uploads/" + fileName;
        req.files.ppic.mv(path);
    }
    else
    fileName="nopic.jpg";

    mysql.query("insert into iprofile values(?,?,?,?,?,?,?,?,?,?,?,?,?,?,?)",[req.query.txtEmail,req.query.txtPwd,fileName,req.query.fname,req.query.lname,req.query.insta,req.query.select,req.query.txtaddress,req.query.city,req.query.combo,req.query.txtdob,req.query.gender,req.query.txtyoutube,req.query.txtfacebook,req.query.TextArea],function(err){
        if(err==null)
            resp.send("Saved Successfully...");
        else
        resp.send(err.message);
    })
})
app.post("/users-update",function(req,resp){
    console.log(req.query);
    let fileName ="";
    if(req.files!=null)
    {
        fileName = req.files.ppic.name;
        let path = __dirname + "/public/uploads/" + fileName;
        req.files.ppic.mv(path);
    }
    else
    {
        fileName=req.query.hdn;
    }
    mysql.query("Update iprofile set pwd=?,picpath=?,fname=?,lname=?,iname=?,fields=?,address=?,city=?,state=?,dob=?,gender=?,youtube=?,facebook=?,other=? where email=?",[req.query.txtPwd,fileName,req.query.fname,req.query.lname,req.query.insta,req.query.select,req.query.txtaddress,req.query.city,req.query.combo,req.query.txtdob,req.query.gender,req.query.txtyoutube,req.query.txtfacebook,req.query.TextArea,req.query.txtEmail],function(err,result){
        if(err==null)
        {
            if(result.affectedRows>=1)
                resp.send("Updated Successfulyy...");
            else
            resp.send("Invalid Email Id");
        }
        else
        resp.send(err.message);
    })
})

app.get("/search-details",function(req,resp)
{
    let email = req.query.txtEmail;
    mysql.query("select * from iprofile where email = ?",[email],function(err,resultJsonAry){
        if(err!=null)
        {
            resp.send(err.message);
            return;
        }
        console.log(resultJsonAry);

        resp.send(resultJsonAry);
    })
})
app.get("/post-event",function(req,resp){
    console.log(req.query);
   mysql.query("insert into events values (null,?,?,?,?,?,?)",[req.query.txtEmail,req.query.txtEvent,req.query.txtdate,req.query.time,req.query.city,req.query.venue],function(err){
    if(err==null)
        resp.send("Succesfully Event Posted");
    else
    console.log(err.message);
   }) 
})

app.get("/update-pwd",function(req,resp){
    console.log(req.query);
    mysql.query("Update users set pwd=? where email =? ",[req.query.txtNew,req.query.txtemail],function(err,result){
        if(err==null)
        {
            if(result.affectedRows>=1)
            {
                resp.send("Updated Successfully");
            }
            else
            resp.send("Invalid Email ID");
        }
        else
        resp.send(err.message);
    })
})
var mail;
app.get("/forgot-pwd",function(req,resp)
{
    console.log(req.query);
    let retPwd;
    mail=req.query.Email;
    mysql.query("select pwd from users where email=?",[req.query.mail],function(err,result){
        if(err==null)
        {
            console.log(result[0].pwd);
            retPwd=result[0].pwd;
            let transporter = nodemailer.createTransport({
                service: 'gmail',
                auth: {
                    user: "singlavanshu03@gmail.com",
                    pass: 'jicr hrim domy jaos'
                }
            });
            var mailOptions = {
                from: 'singlavanshu03.com',
                to: req.query.mail,
                subject: 'Sending Email using Node.js',
                html: "Thank you For placing your order <br>Visit again "+retPwd,
            };
            transporter.sendMail(mailOptions, function (error, info) {
                if (error) {
                    console.log(error);
                } else {
                    console.log('Email sent: ' + info.response);
                }
            });
            resp.send("password retrieved");
        }
        else
        resp.send(err.message);      
    })
})

app.get("/fetch-all",function(req,resp){
    mysql.query("select * from users",function(err,resultJsonAry){
        if(err!=null)
        {
            resp.send(err.message)
            return;
        }
        resp.send(resultJsonAry);
    })
})

app.get("/del-one",function(req,resp){
    mysql.query("delete from users where email =?",[req.query.email],function(err,resultJsonAry){
        if(err!=null)
        {
            resp.send(err.message);
            return;
        }
        resp.send("Deleted");
    })
})

app.get("/block-one",function(req,resp){
    console.log(req.query);
    mysql.query("Update users set status =? where email =?",[0,req.query.email],function(err,result){
        
        if(err==null)
        {
            if(result.affectedRows>=1)
                resp.send("Blocked");
            else
            resp.send("Invalid Email Id");
        }
        else
        resp.send(err.message);
    })
})

app.get("/Unblock-one",function(req,resp){
    console.log(req.query);
    mysql.query("Update users set status =? where email =?",[1,req.query.email],function(err,result){
        
        if(err==null)
        {
            if(result.affectedRows>=1)
                resp.send("UnBlocked");
            else
            resp.send("Invalid Email Id");
        }
        else
        resp.send(err.message);
    })
})

app.get("/show-all",function(req,resp)
{
    mysql.query("select * from iprofile",function(err,resultJsonAry){
        if(err!=null){
            resp.send(err.message);
            return;
        }
        resp.send(resultJsonAry);
    })
})
app.get("/do-find",function(req,resp)
{
    mysql.query("select * from iprofile where fields like ? && city=?",["%"+req.query.fields+"%",req.query.city],function(err,resultJsonAry){
        if(err!=null){
            resp.send(err.message);
            return;
        }
        resp.send(resultJsonAry);  
    })
})
app.get("/do-findbyfname",function(req,resp){
    console.log("heyy");
    mysql.query("select*from iprofile where fname like ?",["%"+req.query.fname+"%"],function(err,resultJsonAry){
        if(err!=null)
        {
            resp.send(err.message);
            return;
        }
        resp.send(resultJsonAry);
    })
})
app.get("/find-influ",function(req,resp){
    mysql.query("select * from iprofile where fields like ?",["%"+req.query.fields+"%"],function(err,resultJsonAry){
        if(err!=null)
        {
            resp.send(err.message);
            return;
        }
        resp.send(resultJsonAry);
    })
})
app.get("/influ-finder",function(req,resp){
    let path =__dirname +"/public/influ-finder.html";
    resp.sendFile(path);
})

app.get("/fetch-event",function(req,resp)
{
    mysql.query("select * from events where doe>=current_date()",function(err,resultJsonAry){
        if(err!=null){
            resp.send(err.message);
            return;
        }
        resp.send(resultJsonAry);
    })
})

app.get("/del-one-event",function(req,resp){
    mysql.query("delete from events where email =?",[req.query.email],function(err,resultJsonAry){
        if(err!=null)
        {
            resp.send(err.message);
            return;
        }
        resp.send("Deleted");
    })
})
app.get("/client-save-process",function(req,resp){

    mysql.query("insert into cprofile values(?,?,?,?,?,?)",[req.query.txtEmail,req.query.state,req.query.txtname,req.query.city,req.query.org,req.query.mobile],function(err){
        if(err==null)
            resp.send("Saved Successfully...");
        else
        resp.send(err.message);
    })
})

app.get("/client-update",function(req,resp){
    
    mysql.query("Update cprofile set state=?,name=?,city=?,org=?,mobile=? where email=?",[req.query.state,req.query.txtname,req.query.city,req.query.org,req.query.mobile,req.query.txtEmail],function(err,result){
        if(err==null)
        {
            if(result.affectedRows>=1)
                resp.send("Updated Successfulyy...");
            else
            resp.send("Invalid Email Id");
        }
        else
        resp.send(err.message);
    })
})
app.get("/search-client",function(req,resp)
{
    let cemail=req.query.txtEmail;
    mysql.query("select * from cprofile where email=?",[cemail],function(err,resultJsonAry){
        if(err!=null){
            resp.send(err.message);
            return;
        }
        console.log(resultJsonAry);
        resp.send(resultJsonAry);
    })
})
