import 'babel-polyfill'

import { should, expect } from 'chai'

import { hash, verify } from '../src/server/utils/passwordHelper'

const PLAIN_PASS = 'testPass'

describe('Test hashing/verifying of password', function() {
  it('Should verify the passwords correctly', async function() {
    const hashedPass = await hash(PLAIN_PASS)
    const verified1 = await verify(PLAIN_PASS, hashedPass)
    const verified2 = await verify('badpass', hashedPass)
    expect(verified1).to.equal(true)
    expect(verified2).to.equal(false)
  })
})
