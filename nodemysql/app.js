const dbconn = require("./dbconnect");

if(dbconn=="connected");
{
    console.log("Connected");
    q = "SELECT * FROM booking limit 1";
    dbconn.connection.query("SELECT * FROM booking", function (err, result, fields) {
        if (err) throw err;
        console.log(result);});

}