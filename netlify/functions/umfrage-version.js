exports.handler = async (event, context) => {
  const c = context || {};
  const cacheType = typeof c.cache;
  const cacheKeys = c.cache ? Object.keys(c.cache) : [];
  return {
    statusCode: 200,
    headers: { "content-type": "application/json" },
    body: JSON.stringify({
      version: "debug-umfrage-version",
      at: new Date().toISOString(),
      contextKeys: Object.keys(c),
      cacheType,
      cacheKeys,
    }),
  };
};

