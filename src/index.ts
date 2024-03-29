import express, { Request, Response } from 'express';

const app = express();
const port = process.env.PORT || 3000;

// app.use('/example', exampleRoute);

app.listen(port, () => {
  console.log(`Server running on port http://localhost:${port}`);
});

export default app;
