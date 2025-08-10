# Kafka Mini Project – Producer + Consumer + Web Interface

A simple Node.js KafkaJS project that:
- Sends orders from a web page to a Kafka topic (`orders`).
- Consumes orders and displays them in the console.
- Shows the last sent order in the browser.

## 📌 Features
- **Producer**: Sends messages to Kafka from a Node.js backend or via a web form.
- **Consumer**: Listens to Kafka topic and logs orders.
- **Web UI**: Simple HTML page to send orders and display the last one sent.

---

## 📂 Project Structure
├── public/ index.html      
├── server.js            
├── producer.js          
├── consumer.js          
├── package.json
