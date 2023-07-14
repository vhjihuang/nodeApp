const serverHandler = (req, res) => {
  res.setHeader('Content-Type', 'application/json')

  const responseData = {
    name: 'vHjiHuang',
    age: 30
  }

  res.end(JSON.stringify(responseData))
}

module.exports = serverHandler