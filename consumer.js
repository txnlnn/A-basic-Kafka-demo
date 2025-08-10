const { Kafka } = require('kafkajs');

const kafka = new Kafka({
  clientId: 'basf-consumer',
  brokers: ['localhost:9092'],
});

const consumer = kafka.consumer({ groupId: 'basf-group03' });

async function consume() {
  await consumer.connect();
  await consumer.subscribe({ topic: 'orders', fromBeginning: true });

  await consumer.run({
    eachMessage: async ({ message }) => {
      console.log("Received order:", message.value.toString());
    },
  });
}

consume();
