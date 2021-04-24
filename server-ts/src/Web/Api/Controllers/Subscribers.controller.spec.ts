import 'dotenv/config'

import { Database } from 'Data/Database'
import SubscribersModel from 'Data/Models/Subscribers.model'
import supertest from 'supertest'
import App from 'Web/App'

const request = supertest(App.server)

// Example of how to setup E2E tests
describe('Subscribers Controller', () => {
  beforeAll(async (done) => {
    const uri = process.env.DB_URI?.replace('first-rest-api', 'testing-api')
    await Database.connect(uri)

    done()
  })

  it('Should create a new subscriber entry', async (done) => {
    const res = await request
      .post('/api/v1/subscribers')
      .send({ name: 'John Doe', subscribedToChannel: 'iamchets' })

    expect(res.status).toBe(201)
    done()
  })

  afterEach(async (done) => {
    await SubscribersModel.deleteMany()

    done()
  })
})
