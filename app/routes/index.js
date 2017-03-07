module.exports = function(app) {
    app.get("/", function(req,res) {
        //console.log("cheguei no arquivo de rotas");
        res.render("index");
    });
};