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



---

## ⚙️ Setup Instructions

### 1. Install Kafka Locally

### 2. Run terminal
# Terminal 1: Start Zookeeper
bin/zookeeper-server-start.sh config/zookeeper.properties

# Terminal 2: Start Kafka broker
bin/kafka-server-start.sh config/server.properties

### 3. Create Topic
bin/kafka-topics.sh --create --topic orders --bootstrap-server localhost:9092 --partitions 1 --replication-factor 1

### 4. Install Dependencies
npm install express kafkajs


### 5. Run the Consumer
node consumer.js


### 6. Run the Web Server
node server.js


Open your browser: http://localhost:3000


Example Output

Last Sent Order:
{
  "id": 1691669273000,
  "status": "created from web"
}


Consumer Console:
Received order: {"id":1691669273000,"status":"created from web"}

![Sample Output]("sample_output_html.png")










