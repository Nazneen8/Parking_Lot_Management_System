app.get('/api/driver/:id', async (req, res) => {
  const driver = await getDriverEmail(req.params.id);
  res.json(driver);
});

