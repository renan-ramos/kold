var app = require("./config/express")();
var rotaIndex = require("./app/routes/index")(app);

app.listen(3000, function() {
    //console.log("servidor rodando na porta 3000");
});