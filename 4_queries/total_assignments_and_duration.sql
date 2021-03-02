SELECT day, count(name) as number_of_assignments, sum(duration) as duration
FROM assignments
GROUP BY day
ORDER BY day;


-- COMPASS VERSION
-- SELECT day, count(*) as number_of_assignments, sum(duration) as duration
-- FROM assignments
-- GROUP BY day
-- ORDER BY day;