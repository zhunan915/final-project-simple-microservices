const express = require('express');
const bodyParser = require('body-parser');
const axios = require('axios');
const cors = require('cors');
const app = express()

app.use(bodyParser.json());

app.use(cors({
  origin: "*"
}))


const events = [];

//test14

app.post('/events', async (req, res) => {
  const event = req.body;
  events.push(event);
  console.log("Incoming Event", event.type);
  try {
    await Promise.all([
      // post service
      axios.post('http://backend-posts-service:8001/events', event),
      // comments service
      axios.post('http://backend-comments-service:8002/events', event),
      // query service
      axios.post('http://backend-query-service:8003/events', event),
      // moderation service
      axios.post('http://backend-moderation-service:8004/events', event),

    ])
    return res.send({}).end()

  } catch (e) {
    console.error(e.message);

  }

});

app.get("/events", (req, res) => {
  res.send(events);
})



app.listen(8005, () => {
  console.log('listening on http://localhost:8005');
})