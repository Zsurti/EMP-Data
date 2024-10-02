import express from 'express';
import bodyParser from 'body-parser';

const app = express();
const port = 3000;

const EmpJSON = {
  "company": "Tech Solutions",
  "employees": [
    {
      "id": 1,
      "name": "Alice",
      "age": 30,
      "department": "Engineering",
      "skills": ["JavaScript", "React", "Node.js"],
      "isFullTime": true
    },
    {
      "id": 2,
      "name": "Bob",
      "age": 25,
      "department": "Marketing",
      "skills": ["SEO", "Content Writing"],
      "isFullTime": false
    },
    {
      "id": 3,
      "name": "Zsurti",
      "age": 36,
      "department": "Developer",
      "skills": ["Programming", "Designing"],
      "isFullTime": true
    }
  ],
  "locations": {
    "headquarters": "New York",
    "branches": ["San Francisco", "Chicago"]
  },
  "founded": null
};

app.use(express.static('public'));
app.use(bodyParser.urlencoded({ extended: true }));

let selectedEmployee; // Initialize selectedEmployee

app.get('/', (req, res) => {
  res.render('index.ejs', { employee: selectedEmployee });
});

app.post('/employee', (req, res) => {
  const selectedName = req.body.select; // Access the selected name from the form

  selectedEmployee = EmpJSON.employees.find(employee => employee.name === selectedName);

  if (selectedEmployee) {
    res.redirect('/'); // Redirect to the main page with the selected employee data
  } else {
    // Handle case where employee is not found (optional)
  }
});

app.listen(port, () => {
  console.log(`Server running on port: ${port}`);
});