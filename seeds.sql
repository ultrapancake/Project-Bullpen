USE project_db;
INSERT INTO projects(projName, owner, contractValue, market, startDate, finishDate, projType, createdAt, updatedAt)
VALUES ('UTA Clean Fuels Depot', 'UTA', '65000000', 'Transit', 'Tue Jul 20 2019 00:00:00 GMT-0600 (Mountain Daylight Time)', 'Wed Aug 01 2021 00:00:00 GMT-0600 (Mountain Daylight Time)', 'project', '2019-12-08 22:25:33', '2019-12-08 22:25:33'),
('Park Avenue Apartments', 'Cottonwood Residential', '43400000', 'Multifamily', 'Fri Jun 26 2019 00:00:00 GMT-0600 (Mountain Daylight Time)', 'Tue Oct 16 2021 00:00:00 GMT-0700 (Mountain Standard Time)', 'project', '2019-12-08 22:29:18', '2019-12-08 22:29:18'),
('Ogden IRS Renovation', 'General Services Administration', '40000000', 'Government', 'Thu Dec 02 2019 00:00:00 GMT-0700 (Mountain Standard Time)', 'Mon Jun 12 2021 00:00:00 GMT-0600 (Mountain Daylight Time)', 'project', '2019-12-08 22:32:29', '2019-12-08 22:32:29'),
('Sugarmont Apartments', 'Confidential', '40000000', 'Multifamily', 'Mon Nov 16 2019 00:00:00 GMT-0700 (Mountain Standard Time)', 'Wed May 16 2021 00:00:00 GMT-0600 (Mountain Daylight Time)', 'project', '2019-12-08 22:34:39', '2019-12-08 22:34:39'),
('NIST Building 1, Wings 5, 4, and Spine Reno', 'NIST', '108000000', 'Government', 'Thu Jan 06 2020 00:00:00 GMT-0700 (Mountain Standard Time)', 'Tue Aug 27 2022 00:00:00 GMT-0600 (Mountain Daylight Time)', 'lead', '2019-12-08 22:36:02', '2019-12-08 22:36:02'),
('Hill AFB GBSD MIF', 'USACE', '115000000', 'Federal', 'Wed Mar 15 2020 00:00:00 GMT-0600 (Mountain Daylight Time)', 'Thu Sep 13 2022 00:00:00 GMT-0600 (Mountain Daylight Time)', 'lead', '2019-12-08 22:43:32', '2019-12-08 22:43:32'),
('2100 S Apartments', 'Max Correth', '24000000', 'Multifamily', 'Fri Apr 01 2020 00:00:00 GMT-0600 (Mountain Daylight Time)', 'Fri May 31 2022 00:00:00 GMT-0600 (Mountain Daylight Time)', 'lead', '2019-12-08 22:44:37', '2019-12-08 22:44:37'),
('85MW Datacenter Tilts', 'Confidential', '60000000', 'Tilts/Datacenter', 'Wed Jun 01 2020 00:00:00 GMT-0600 (Mountain Daylight Time)', 'Thu Nov 30 2021 00:00:00 GMT-0700 (Mountain Standard Time)', 'lead', '2019-12-08 22:45:31', '2019-12-08 22:45:31')
 

USE project_db;
INSERT INTO employees(firstName, lastName, empID, title, markets, createdAt, updatedAt)
VALUES ('Mike', 'Carey', '9925', 'Project Director', 'Multifamily, Office, Healthcare, Datacenters, Labs, Federal, DFCM', '2019-12-08 22:59:51', '2019-12-08 22:59:51'),
('Spencer', 'Ahlstrom', '9820', 'Project Engineer', 'Multifamily, Mining, Industrial', '2019-12-08 23:00:29', '2019-12-08 23:00:29'),
('Scott', 'Harris', '9888', 'Project Engineer', 'Multifamily', '2019-12-08 23:01:52', '2019-12-08 23:01:52'),
('Daniel', 'Shane', '19309', 'Project Engineer', 'Retail, Multifamily, Institutional, Office', '2019-12-08 23:02:47', '2019-12-08 23:02:47'),
('Scott', 'Carpentier', '9853', 'Project Manager', 'Office, Multifamily, Temples', '2019-12-08 23:03:26', '2019-12-08 23:03:26'),
('Patrick', 'Derieg', '14016', 'Project Manager', 'Multifamily, Mining, High-rise, Labs, Temples', '2019-12-08 23:04:24', '2019-12-08 23:04:24'),
('Layne', 'Kochel', '12016', 'Project Manager', 'Industrial, Office, Retail', '2019-12-08 23:05:13', '2019-12-08 23:05:13'),
('McCade', 'Cox', '13245', 'Asst Project Manager', 'Multifamily, Mining', '2019-12-08 23:05:47', '2019-12-08 23:05:47'),
('Matt', 'Heslop', '811', 'Sr Project Manager', 'Multifamily, Office, Retail, DFCM, Hospitality', '2019-12-08 23:06:45', '2019-12-08 23:06:45'),
('Alma', 'Marcum', '9494', 'Sr Project Manager', 'Multifamily, Temples', '2019-12-08 23:07:17', '2019-12-08 23:07:17'),
('Colton', 'Brinkerhoff', '11131', 'Superintendent', 'Tilts, Office, Industrial, Multifamily', '2019-12-08 23:08:02', '2019-12-08 23:08:02'),
('James', 'Chipp', '13260', 'Superintendent', 'Multifamily, Concrete, Tilts', '2019-12-08 23:08:40', '2019-12-08 23:08:40'),
('Jessie', 'Jacobsen', '1097', 'Superintendent', 'Multifamily, Tilts, DFCM', '2019-12-08 23:10:16', '2019-12-08 23:10:16'),
('Rowdy', 'Martin', '23194', 'Superintendent', 'Multifamily, Healthcare, Labs, Industrial', '2019-12-08 23:13:05', '2019-12-08 23:13:05'),
('Robert', 'Mitchell', '23200', 'Superintendent', 'Multifamily, Concrete, Tilts', '2019-12-08 23:13:42', '2019-12-08 23:13:42'),
('Brent', 'Meadows', '9969', 'Sr Superintendent', 'Multifamily', '2019-12-08 23:14:19', '2019-12-08 23:14:19'),
('Chris', 'Remkes', '18147', 'Sr Superintendent', 'Multifamily, Office, Industrial, Labs', '2019-12-08 23:16:41', '2019-12-08 23:16:41'),
('Ezra', 'Douglass', '4226', 'Asst Superintendent', 'Multifamily, Office, Tilts, Industrial', '2019-12-08 23:17:22', '2019-12-08 23:17:22'),
('Paul', 'Telford', '9879', 'Superintendent', 'Multifamily, Hospitality', '2019-12-08 23:18:15', '2019-12-08 23:18:15'),
('Unassigned', 'PE', '99900', 'Project Engineer', '', '2019-12-08 23:18:52', '2019-12-08 23:18:52'),
('Unassigned', 'APM', '99901', 'Asst Project Manager', '', '2019-12-08 23:19:17', '2019-12-08 23:19:17'),
('Unassigned', 'PM', '99902', 'Project Manager', '', '2019-12-08 23:19:43', '2019-12-08 23:19:43'),
('Unassigned', 'Sr PM', '99903', 'Sr Project Manager', '', '2019-12-08 23:20:09', '2019-12-08 23:20:09'),
('Unassigned', 'Asst Super', '99904', 'Asst Superintendent', '', '2019-12-08 23:20:40', '2019-12-08 23:20:40'),
('Unassigned', 'Super', '99905', 'Superintendent', '', '2019-12-08 23:21:11', '2019-12-08 23:21:11'),
('Unassigned', 'Sr Super', '99906', 'Sr Superintendent', '', '2019-12-08 23:21:37', '2019-12-08 23:21:37')


USE project_db;
INSERT INTO populatedprojects(empID, projName, owner, createdAt, updatedAt, Employees_rowId, Projects_rowId)
VALUES('13245', '85MW Datacenter Tilts', 'Confidential', '2019-12-08 00:02:21', '2019-12-08 00:02:21', '8', '8'),
('1097', '85MW Datacenter Tilts', 'Confidential', '2019-12-08 00:02:37', '2019-12-08 00:02:37', '13', '8')
