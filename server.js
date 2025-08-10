const express = require('express');
const { Kafka, Partitioners } = require('kafkajs');
const path = require('path');

const app = express();
const PORT = 3000;

const kafka = new Kafka({
  clientId: 'web-producer',
  brokers: ['localhost:9092']
});

const producer = kafka.producer({
  createPartitioner: Partitioners.LegacyPartitioner
});

app.use(express.static(path.join(__dirname, 'public')));

app.post('/send-order', async (req, res) => {
  try {
    const order = { id: Date.now(), status: "created from web" };

    await producer.connect();
    await producer.send({
      topic: 'orders',
      messages: [{ value: JSON.stringify(order) }]
    });
    await producer.disconnect();

    res.json(order); // send the same order back to frontend
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Failed to send order" });
  }
});

app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
