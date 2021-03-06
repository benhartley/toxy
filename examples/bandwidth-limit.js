const toxy = require('..')

const proxy = toxy()
const rules = proxy.rules
const poisons = proxy.poisons

proxy
  .forward('http://httpbin.org')
  .poison(poisons.bandwidth({ bps: 1024 }))
  .withRule(rules.method('GET'))
  .withRule(rules.probability(90))

proxy.all('/*')

proxy.listen(3000)
console.log('Server listening on port:', 3000)
