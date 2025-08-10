const { Kafka, Partitioners } = require('kafkajs');

const kafka = new Kafka({
  clientId: 'basf-producer',
  brokers: ['localhost:9092']
});

const producer = kafka.producer({
  createPartitioner: Partitioners.LegacyPartitioner
});

async function produce() {
  await producer.connect();
  await producer.send({
    topic: 'orders',
    messages: [
      { value: JSON.stringify({ id: Date.now(), status: "created" }) }
    ]
  });
  console.log("Order sent");
  await producer.disconnect();
}

produce();
