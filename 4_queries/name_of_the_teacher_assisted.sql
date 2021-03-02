SELECT DISTINCT teachers.name as teacher, cohorts.name as cohort 
FROM assistance_requests
JOIN teachers ON teachers.id = teacher_id
JOIN students ON students.id = student_id
JOIN cohorts ON cohorts.id = students.cohort_id
WHERE cohorts.name = 'JUL02'
ORDER BY teachers.name
