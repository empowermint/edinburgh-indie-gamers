exports.handler = async (event, context) => {

  return {
    statusCode: 200,
    body: JSON.stringify({
      testString: "This is the test string from functions/fetch-events"
    })
  }
}
