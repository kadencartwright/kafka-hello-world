const { Kafka } = require("kafkajs");
const kafka = new Kafka({
  clientId: "my-app",
  brokers: ["kafka:9092"],
});
const producer = kafka.producer();
const run = async () => {
  // Producing
  await producer.connect();
  console.log("kafka");

  while (true) {
    await producer.send({
      topic: "test",
      messages: [{ value: "Hello KafkaJS user!" }],
    });
    console.log("sent message!");
    await wait(2);
  }
};
const wait = (seconds) =>
  new Promise((resolve, reject) => {
    setTimeout(() => resolve(), seconds * 1000);
  });

run().catch(console.error);
