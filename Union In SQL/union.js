/*
    get match data from two tables in sql
*/

let union = `SELECT 
    *
FROM
    ((SELECT 
			radb31_share_property_logs.isActivity as ShareIsActivity,
            (CASE
                WHEN radb31_share_property_logs.spId THEN 0
                ELSE 1
            END) AS aa
    FROM
        radb31_share_property_logs
    WHERE
        radb31_share_property_logs.sharerId = 20) UNION (SELECT 
			radb31_users_saved_properties.isActivity as ShareIsActivity,
            (CASE
                WHEN radb31_users_saved_properties.uspId THEN 1
                ELSE 0
            END) AS aa
    FROM
        radb31_users_saved_properties
    WHERE
        radb31_users_saved_properties.userId = 20)) results`;
            