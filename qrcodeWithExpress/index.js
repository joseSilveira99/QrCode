const express = require('express')
const app = express()

const qr = require('qr-image')

app.set('view engine', 'ejs')

app.get('/', (req, res) => res.render('home'))
app.get('/teste', (req, res) => res.render('teste'))

app.get('/qrcode', (req, res) => {
  const url = 'https://floating-basin-62801.herokuapp.com/';
  const code = qr.image(url, { type: 'png' })

  res.type('png')

  code.pipe(res)

})

app.listen(3000, () => {
  console.log('server running...')
})
