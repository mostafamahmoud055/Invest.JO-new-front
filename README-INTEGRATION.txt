JEIC Registration Frontend (Vue CDN / static integration style)

Files:
- index.html (Register landing page)
- register.html (5-step registration form)
- success.html (success page)
- assets/styles.css (visual styling aligned to provided screens)
- assets/app.js (Vue logic + API submit)

Backend integration assumptions (VERIFY IN BACKEND REPO):
- POST /api/registration
- multipart/form-data
- snake_case field names
- Laravel-style validation errors { errors: { field: [msg] } }

Fields sent:
Common:
nationality,email,phone_country_code,phone_number,job_title,entity,company_website,sector,
professional_bio,linkedin_profile,arrival_date,arrival_time,departure_date,departure_time,hotel_name

Jordanian path:
first_name,father_name,grandfather_name,family_name,national_number

Non-Jordanian path:
first_name,last_name,passport_copy(file)

Important:
- Nationality list includes countries and excludes Israel per client request.
- Visuals are matched to screen exports (PDF/PNG). Exact Figma inspect values (if different) should override CSS values.
- If backend route/field names differ, update assets/app.js mapping only.
