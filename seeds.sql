USE project_db;
INSERT INTO projects(projName, owner, contractValue, market, startDate, finishDate, projType, createdAt, updatedAt)
VALUES ("Test project", "Glen Larsen", "1200", "test market", "Fri May 01 2020 00:00:00 GMT-0600 (Mountain Daylight Time)", "Sat Jun 20 2020 00:00:00 GMT-0600 (Mountain Daylight Time)", "project", "2019-02-14 22:23:40","2019-02-14 22:23:40"), 
("Grumpy Project", "Jack Larsen", "2000", "class", "Mon Jun 22 2020 00:00:00 GMT-0600 (Mountain Daylight Time)", "Wed Jul 22 2020 00:00:00 GMT-0600 (Mountain Daylight Time)", "lead", "2019-02-14 22:23:40","2019-02-14 22:23:40")

USE project_db;
INSERT INTO employees(firstName, lastName, empID, title, markets, createdAt, updatedAt)
VALUES ('test', 'one', '2233', 'ap', 'tester', '2019-12-08 00:02:21', '2019-12-08 00:02:21'),
('bork', 'two', '3344', 'zd', 'beta', '2019-12-08 00:02:37', '2019-12-08 00:02:37')

USE project_db;
INSERT INTO populatedprojects(empID, projName, owner, createdAt, updatedAt, Employees_rowId, Projects_rowId)
VALUES('2233', 'Test project', 'Glen Larsen', '2019-12-08 00:02:21', '2019-12-08 00:02:21', '1', '1'),
('3344', 'Grumpy Project', 'Jack Larsen', '2019-12-08 00:02:37', '2019-12-08 00:02:37', '2', '2')
