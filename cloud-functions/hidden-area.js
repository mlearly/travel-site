exports.handler = function(event, context, callback) {
  const hiddenContent = `
  <h3>Welcome to the hidden area</h3>
  <p>Here you will find all your <em>privileged content</em>.</p>`

  let body

  if(event.body) {
    body = JSON.parse(event.body)
  } else {
    body = {}
  }

  if(body.password == "javascript") {
    callback(null, {
      statusCode: 200,
      body: hiddenContent
    })
  } else {
    callback(null, {
      statusCode: 401
    })
  }
}
