/*
	Situation like when you want to get highest record or a salary from databse in sql 
*/

let getNthHisgestRecords = `SELECT id FROM tbox_registers t1 WHERE N-1 = (SELECT COUNT(DISTINCT id) FROM tbox_registers t2 WHERE t2.id> t1.id)`