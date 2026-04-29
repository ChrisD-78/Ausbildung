exports.handler = async (event, context) => {
  const c = context || {};
  const cacheType = typeof c.cache;
  const cacheKeys = c.cache ? Object.keys(c.cache) : [];
  const env = {
    NETLIFY_BLOBS_ACCESS_TOKEN: !!process.env.NETLIFY_BLOBS_ACCESS_TOKEN,
    NETLIFY_EDGE_CONFIG_ACCESS_TOKEN: !!process.env.NETLIFY_EDGE_CONFIG_ACCESS_TOKEN,
    NETLIFY_KV_ACCESS_TOKEN: !!process.env.NETLIFY_KV_ACCESS_TOKEN,
  };
  return {
    statusCode: 200,
    headers: { "content-type": "application/json" },
    body: JSON.stringify({
      version: "debug-umfrage-version-v2",
      at: new Date().toISOString(),
      contextKeys: Object.keys(c),
      cacheType,
      cacheKeys,
      env,
    }),
  };
};

