const express = require('express');


const app = express();

app.set('port', process.env.PORT || 3000);

app.use(express.urlencoded({ extended: false }));



app.listen(app.get('port'), () => {
    console.log('Servidor en puerto', app.get('port'));
})