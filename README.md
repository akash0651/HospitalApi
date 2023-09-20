# Hospital API

The Hospital API is a RESTful web service designed to manage and provide access to hospital-related information. 
It allows developers to interact with data about hospitals, doctors, patients, appointments, and more. 
This API simplifies the process of creating, reading, updating, and deleting hospital records programmatically.

## Features

- **Hospital Management**: Create, read, update, and delete hospitals, doctors, and patient records.
- **Appointment Scheduling**: Manage patient appointments with doctors.
- **User Authentication**: Secure endpoints with user authentication.
- **Data Validation**: Validate and sanitize data to ensure data integrity.
- **RESTful Design**: Follows best practices for a RESTful API design.

## Routes
1. **Register a Doctor:** `[POST]: /api/v1/doctors/register`
2. **Login for Doctor:** `[POST]: /api/v1/doctors/login`
3. **Register a patient:** `[POST]: /api/v1/patients/register`
4. **Create Patient report:** `[POST]: /api/v1/patients/:id/create_report`
5. **Fetch All Reports of a Patient** `[GET]: /api/v1/patients/:id/all_reports`
6. **Fetch All Reports Based on a Status:** `[GET]: /api/v1/reports/:status`

## Host Link :- https://hospitalapi-cxap.onrender.com

