const { Pool } = require('pg');

const pool = new Pool({
  user: 'vagrant',
  password: '123',
  host: 'localhost',
  database: 'bootcampx'
});
const argv = process.argv.slice(2);
const cohortName = argv[0];
console.log(cohortName);

const queryString = `
SELECT DISTINCT teachers.name as teacher, cohorts.name as cohort 
FROM assistance_requests
JOIN teachers ON teachers.id = teacher_id
JOIN students ON students.id = student_id
JOIN cohorts ON cohorts.id = students.cohort_id
WHERE cohorts.name LIKE '%$1 || 'JUL02'}%'
ORDER BY teachers.name
`;

const cohortName = process.argv[2];
const values = [`%${cohortName.toUpperCase()}%`];

pool.query(queryString, values)
.then(res => {
  res.rows.forEach((row) => {
    console.log(`${row.cohort}: ${row.teacher}`);
  })
}).catch(err => console.error('query error', err.stack));