This document provides guidance on how to populate the database tables for your ITIL training business.  The following assumes you have SQLiteStudio or another SQLite client installed and have created the database using the provided schema.

Table Descriptions and Data Guidelines
Courses Table
Column Name	Data Type	Description	Example Values
CourseID	TEXT	A unique identifier for the course (e.g., "ITIL4-FND" for ITIL 4 Foundation).	ITIL4-FND, ITIL4-CDS, ITIL4-DSV, ITIL4-HVIT
CourseName	TEXT	The full, official name of the course.	ITIL 4 Foundation, ITIL 4 Specialist: Create, Deliver and Support
CourseDescription	TEXT	A brief summary of the course content.	"Introduction to ITIL 4 service management."
CourseDuration	TEXT	The typical duration of the course in days (e.g., "2 days" or "3 days").	2 days, 3 days, 1 day
CoursePrice	REAL	The price of the course.	800.00, 1200.00
CourseExaminable	TEXT	Whether the course leads to an official certification exam (Y for yes, N for no).	Y, N
CourseTags	TEXT	Keywords related to the course, separated by commas (e.g., "ITIL, ITSM, Service Management").	ITIL, ITSM, Service Design, Digital Transformation
CourseDeliveryMethod	TEXT	Delivery methods for the course, separated by commas (e.g., "Virtual, Classroom").	Virtual, Classroom, E-Learning
MaterialsVersion	TEXT	The version of the official course materials used (e.g., "PeopleCert v3.0").	PeopleCert v3.0, AXELOS v2.1

Export to Sheets
Trainers Table
| Column Name |	Data Type |	Description |	Example Values |
|-------------|-----------|-------------|------------------|
|TrainerID | INTEGER |	A unique identifier for the trainer. |	1, 2, 3 |
|TrainerName |	TEXT |	The full name of the trainer. |	John Doe, Jane Smith |
|TrainerBio |	TEXT |	A short biography of the trainer. |	"Experienced ITIL consultant..."|
|TrainerLocationDescriptive |	TEXT	|A human-readable description of the trainer's location (e.g., "London, UK").|	London, UK|
TrainerLocationLatitude	REAL	The latitude coordinate of the trainer's location.	51.5074
TrainerLocationLongitude	REAL	The longitude coordinate of the trainer's location.	-0.1278

Export to Sheets
Other Tables
Please refer to the database schema and use similar formatting conventions to populate the remaining tables:

TrainerRates: Links trainers to courses with their respective rates.
Venues: Stores information about training venues.
VenueCatering: Lists catering options available at venues.
Delivery: Records scheduled deliveries of courses, including dates, times, and trainer/venue assignments.
Example SQL INSERT Statements
SQL
INSERT INTO Trainers (TrainerName, TrainerBio, TrainerLocationDescriptive, TrainerLocationLatitude, TrainerLocationLongitude)
VALUES ('John Doe', 'Experienced ITIL consultant and trainer.', 'London, UK', 51.5074, -0.1278);
Use code with caution.
