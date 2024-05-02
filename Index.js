const app = require('./Api')

app.set('port', process.env.PORT || 3000)

app.listen(app.get('port'), () => {
    console.log(`Este servidor arrancó por el puerto ${app.get('port')}`)
})