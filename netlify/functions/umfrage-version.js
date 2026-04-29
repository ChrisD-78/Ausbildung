exports.handler = async () => {
  return {
    statusCode: 200,
    headers: { "content-type": "application/json" },
    body: JSON.stringify({ version: "debug-umfrage-version", at: new Date().toISOString() }),
  };
};

