WITH result AS (
	SELECT 
		col.id,
		col.name,
		sub.name as sub_name,
		sub.id as sub_id,
		0 as sub_level,
		COUNT(col.id) OVER (PARTITION BY sub.id) as colls_count
	FROM collaborators col
		JOIN subdivisions sub ON col.subdivision_id = sub.id
	WHERE col.id = 710253

    UNION ALL
		SELECT 
			col.id,
			col.name,
			sub.name as sub_name,
			sub.id as sub_id,
			res.sub_level + 1,
			COUNT(col.id) OVER (PARTITION BY sub.id) as colls_count
		FROM collaborators col
			JOIN subdivisions sub ON col.subdivision_id = sub.id
			JOIN result res on sub.parent_id = res.sub_id
		WHERE sub.id NOT IN (100055, 100059) AND col.age < 40
)
SELECT DISTINCT  * FROM result WHERE id != 710253
ORDER BY sub_level ASC