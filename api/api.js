const { appInitConf } = require("./conf/appConf");
const { dbInitConf } = require("./conf/dbConf");

const apiUsers = require('./router/apiUsers');
const apiFilms = require('./router/apiFilms');

const app = appInitConf();
dbInitConf();


app.use('/', apiUsers);
app.use('/', apiFilms);


const PORT = 5000;
app.listen(PORT, function () {
    console.log(`API Netflix corriendo en puerto ${PORT}`);
});