import Config from './App/Config'
import app from './app'
// getting-started.js
import mongoose from 'mongoose'

main().catch((err) => console.log(err))

async function main() {
  try {
    await mongoose.connect(Config.database_url as string)
    app.listen(Config.port, () => {
      console.log(`App is listening on PORT ${Config.port}`)
    })
  } catch (err) {
    console.log(err)
  }
}

// main();
