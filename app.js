'use strict';

const cors = require('cors');
const bodyParser = require('body-parser');
// const fundRoutes = require('./routes/fundRoutes');

app.use(cors());
app.use(bodyParser.json());

// app.use('/api/', fundRoutes);