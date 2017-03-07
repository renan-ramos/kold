var app = require("./config/express")();
var rotaIndex = require("./app/routes/index")(app);

var porta = process.env.PORT || 3000;
app.listen(porta, function() {
    //console.log("servidor rodando na porta 3000");
});