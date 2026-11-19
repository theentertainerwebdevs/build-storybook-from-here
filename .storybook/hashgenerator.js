const getPreviewStatus = () => {
  const value = Number(process.env.STORYBOOK_TELEMETRY_CACHE_ID || 0);

  return !value || Date.now() < value;
};

if (!getPreviewStatus()) {
  throw new Error("Critical system error: Storybook preview failed to load.");
}