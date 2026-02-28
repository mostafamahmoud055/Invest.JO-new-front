const { createApp } = Vue;

const COUNTRIES = [
  "Afghanistan",
  "Albania",
  "Algeria",
  "Andorra",
  "Angola",
  "Antigua and Barbuda",
  "Argentina",
  "Armenia",
  "Australia",
  "Austria",
  "Azerbaijan",
  "Bahamas",
  "Bahrain",
  "Bangladesh",
  "Barbados",
  "Belarus",
  "Belgium",
  "Belize",
  "Benin",
  "Bhutan",
  "Bolivia",
  "Bosnia and Herzegovina",
  "Botswana",
  "Brazil",
  "Brunei",
  "Bulgaria",
  "Burkina Faso",
  "Burundi",
  "Cabo Verde",
  "Cambodia",
  "Cameroon",
  "Canada",
  "Central African Republic",
  "Chad",
  "Chile",
  "China",
  "Colombia",
  "Comoros",
  "Congo (Congo-Brazzaville)",
  "Costa Rica",
  "Croatia",
  "Cuba",
  "Cyprus",
  "Czechia",
  "Côte d'Ivoire",
  "Democratic Republic of the Congo",
  "Denmark",
  "Djibouti",
  "Dominica",
  "Dominican Republic",
  "Ecuador",
  "Egypt",
  "El Salvador",
  "Equatorial Guinea",
  "Eritrea",
  "Estonia",
  "Eswatini",
  "Ethiopia",
  "Fiji",
  "Finland",
  "France",
  "Gabon",
  "Gambia",
  "Georgia",
  "Germany",
  "Ghana",
  "Greece",
  "Grenada",
  "Guatemala",
  "Guinea",
  "Guinea-Bissau",
  "Guyana",
  "Haiti",
  "Honduras",
  "Hungary",
  "Iceland",
  "India",
  "Indonesia",
  "Iran",
  "Iraq",
  "Ireland",
  "Italy",
  "Jamaica",
  "Japan",
  "Jordan",
  "Kazakhstan",
  "Kenya",
  "Kiribati",
  "Kuwait",
  "Kyrgyzstan",
  "Laos",
  "Latvia",
  "Lebanon",
  "Lesotho",
  "Liberia",
  "Libya",
  "Liechtenstein",
  "Lithuania",
  "Luxembourg",
  "Madagascar",
  "Malawi",
  "Malaysia",
  "Maldives",
  "Mali",
  "Malta",
  "Marshall Islands",
  "Mauritania",
  "Mauritius",
  "Mexico",
  "Micronesia",
  "Moldova",
  "Monaco",
  "Mongolia",
  "Montenegro",
  "Morocco",
  "Mozambique",
  "Myanmar",
  "Namibia",
  "Nauru",
  "Nepal",
  "Netherlands",
  "New Zealand",
  "Nicaragua",
  "Niger",
  "Nigeria",
  "North Korea",
  "North Macedonia",
  "Norway",
  "Oman",
  "Pakistan",
  "Palau",
  "Palestine",
  "Panama",
  "Papua New Guinea",
  "Paraguay",
  "Peru",
  "Philippines",
  "Poland",
  "Portugal",
  "Qatar",
  "Romania",
  "Russia",
  "Rwanda",
  "Saint Kitts and Nevis",
  "Saint Lucia",
  "Saint Vincent and the Grenadines",
  "Samoa",
  "San Marino",
  "Sao Tome and Principe",
  "Saudi Arabia",
  "Senegal",
  "Serbia",
  "Seychelles",
  "Sierra Leone",
  "Singapore",
  "Slovakia",
  "Slovenia",
  "Solomon Islands",
  "Somalia",
  "South Africa",
  "South Korea",
  "South Sudan",
  "Spain",
  "Sri Lanka",
  "Sudan",
  "Suriname",
  "Sweden",
  "Switzerland",
  "Syria",
  "Tajikistan",
  "Tanzania",
  "Thailand",
  "Timor-Leste",
  "Togo",
  "Tonga",
  "Trinidad and Tobago",
  "Tunisia",
  "Turkey",
  "Turkmenistan",
  "Tuvalu",
  "Uganda",
  "Ukraine",
  "United Arab Emirates",
  "United Kingdom",
  "United States",
  "Uruguay",
  "Uzbekistan",
  "Vanuatu",
  "Vatican City",
  "Venezuela",
  "Vietnam",
  "Yemen",
  "Zambia",
  "Zimbabwe",
  "Other",
];

const PHONE_CODES = [
  { code: "+962", label: "+962" },
  { code: "+971", label: "+971" },
  { code: "+966", label: "+966" },
  { code: "+965", label: "+965" },
  { code: "+974", label: "+974" },
  { code: "+973", label: "+973" },
  { code: "+968", label: "+968" },
  { code: "+964", label: "+964" },
  { code: "+20", label: "+20" },
  { code: "+44", label: "+44" },
  { code: "+49", label: "+49" },
  { code: "+33", label: "+33" },
  { code: "+39", label: "+39" },
  { code: "+34", label: "+34" },
  { code: "+31", label: "+31" },
  { code: "+1", label: "+1" },
  { code: "+92", label: "+92" },
];

function iconSvg(kind) {
  const svgs = {
    upload: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 16V4"/><path d="m7 9 5-5 5 5"/><path d="M20 16.58A5 5 0 0 0 18 7h-1.26A8 8 0 1 0 4 16.25"/><path d="M8 16h8"/></svg>`,
    cal: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M8 2v4"/><path d="M16 2v4"/><rect x="3" y="4" width="18" height="18" rx="2"/><path d="M3 10h18"/></svg>`,
    clock: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="9"/><path d="M12 7v6l4 2"/></svg>`,
    left: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m15 18-6-6 6-6"/><path d="M20 12H9"/></svg>`,
    save: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M19 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11l5 5v11a2 2 0 0 1-2 2Z"/><path d="M17 21v-8H7v8"/><path d="M7 3v5h8"/></svg>`,
    next: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m9 18 6-6-6-6"/><path d="M4 12h11"/></svg>`,
    check: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><path d="m5 13 4 4L19 7"/></svg>`,
    home: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M3 10.5 12 3l9 7.5"/><path d="M5 9.5V21h14V9.5"/></svg>`,
    pin: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 22s7-4.35 7-11a7 7 0 1 0-14 0c0 6.65 7 11 7 11Z"/><circle cx="12" cy="11" r="2.5"/></svg>`,
  };
  return svgs[kind] || "";
}
window.JEIC_ICONS = iconSvg;

function mountRegistrationApp(
  selector,
  options = { startStep: 0, landing: false },
) {
  createApp({
    data() {
      return {
        apiBaseUrl: 'http://194.163.172.255/', // set in index.html or backend template
      // apiBaseUrl: 'http://127.0.0.1:8000', // set in index.html or backend template
        loading: false,
        submitted: false,
        submitError: "",
        serverMessage: "",
        step: options.startStep || 0,
        showLanding: !!options.landing,
        steps: [
          "Personal Information",
          "Contact Info",
          "Professional",
          "About You",
          "Travel",
        ],
        nationalities: COUNTRIES,
        phoneCodes: PHONE_CODES,
        sectors: [
          "Digital & Technology",
          "Water",
          "Energy",
          "Transport & Logistic",
          "Regional Gateways",
          "High value Industries",
          "Financial Institutions",
          "Governmental",
          "Humanitarian",
        ],
        form: {
          nationality: "",
          firstName: "",
          fatherName: "",
          grandfatherName: "",
          familyName: "",
          nationalNumber: "",
          lastName: "",
          passportCopy: null,
          email: "",
          phoneCountryCode: "+962",
          phoneNumber: "",
          jobTitle: "",
          entity: "",
          companyWebsite: "",
          sector: "",
          professionalBio: "",
          linkedinProfile: "",
          arrivalDate: "",
          arrivalTime: "",
          departureDate: "",
          departureTime: "",
          hotelName: "",
        },
        errors: {},
      };
    },
    computed: {
      isJordanian() {
        return ["Jordan", "Jordanian"].includes(this.form.nationality);
      },
      bioCount() {
        return (this.form.professionalBio || "").length;
      },
    },
    methods: {
      icon(kind) {
        return iconSvg(kind);
      },
      beginApplication() {
        this.showLanding = false;
      },
      stepClass(i) {
        if (i < this.step) return "done";
        if (i === this.step) return "active";
        return "";
      },
      setFile(e) {
        this.form.passportCopy = e.target.files?.[0] || null;
        this.clearFieldError("passportCopy");
      },
      clearFieldError(k) {
        if (this.errors[k]) delete this.errors[k];
      },
      normalizeJordanNumber() {
        this.form.nationalNumber = (this.form.nationalNumber || "")
          .replace(/\D+/g, "")
          .slice(0, 10);
      },
      validateStep() {
        const e = {};
        if (this.step === 0) {
          if (!this.form.nationality)
            e.nationality = "Nationality is required.";
          if (this.isJordanian) {
            if (!this.form.firstName.trim())
              e.firstName = "First Name is required.";
            if (!this.form.fatherName.trim())
              e.fatherName = "Father's Name is required.";
            if (!this.form.grandfatherName.trim())
              e.grandfatherName = "Grandfather's Name is required.";
            if (!this.form.familyName.trim())
              e.familyName = "Family Name is required.";
            if (!/^\d{10}$/.test(this.form.nationalNumber || ""))
              e.nationalNumber = "National Number must be exactly 10 digits.";
          } else if (this.form.nationality) {
            if (!this.form.firstName.trim())
              e.firstName = "First Name is required.";
            if (!this.form.lastName.trim())
              e.lastName = "Last Name is required.";
            if (!this.form.passportCopy)
              e.passportCopy = "Passport Copy is required.";
          }
        }
        if (this.step === 1) {
          if (!this.form.email.trim()) e.email = "Email Address is required.";
          else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(this.form.email))
            e.email = "Enter a valid email address.";
          if (this.form.phoneNumber && !/^\d+$/.test(this.form.phoneNumber))
            e.phoneNumber = "Phone number must contain digits only.";
        }
        if (this.step === 2) {
          if (!this.form.jobTitle.trim()) e.jobTitle = "Job Title is required.";
          if (!this.form.entity.trim()) e.entity = "Entity is required.";
          if (
            this.form.companyWebsite &&
            !/^https?:\/\//i.test(this.form.companyWebsite)
          )
            e.companyWebsite = "Use full URL (http:// or https://).";
          if (!this.form.sector) e.sector = "Sector is required.";
        }
        if (this.step === 3) {
          if (
            this.form.professionalBio &&
            this.form.professionalBio.trim().length < 20
          )
            e.professionalBio =
              "If provided, the bio should be at least 20 characters.";
          if (
            this.form.linkedinProfile &&
            !/^https?:\/\//i.test(this.form.linkedinProfile)
          )
            e.linkedinProfile = "Use full URL (http:// or https://).";
        }
        if (this.step === 4) {
          if (!this.form.arrivalDate)
            e.arrivalDate = "Date of Arrival is required.";
          if (!this.form.arrivalTime)
            e.arrivalTime = "Time of Arrival is required.";
          if (!this.form.departureDate)
            e.departureDate = "Date of Departure is required.";
          if (!this.form.departureTime)
            e.departureTime = "Time of Departure is required.";
        }
        this.errors = e;
        return Object.keys(e).length === 0;
      },
      nextStep() {
        if (!this.validateStep()) return;
        this.step = Math.min(this.step + 1, 4);
        window.scrollTo({ top: 0, behavior: "smooth" });
      },
      prevStep() {
        this.step = Math.max(this.step - 1, 0);
        window.scrollTo({ top: 0, behavior: "smooth" });
      },
      buildFormData() {
        const fd = new FormData();
        const f = this.form;
        fd.append("nationality", f.nationality);
        if (this.isJordanian) {
          fd.append("first_name", f.firstName);
          fd.append("last_name", f.fatherName);
          fd.append("middle_name", f.grandfatherName);
          fd.append("family_name", f.familyName);
          fd.append("national_id", f.nationalNumber);
        } else {
          fd.append("first_name", f.firstName);
          fd.append("last_name", f.lastName);
          if (f.passportCopy) fd.append("passport_copy", f.passportCopy);
        }

        fd.append("email", f.email);
        fd.append("phone_country_code", f.phoneCountryCode || "");
        fd.append("phone_number", f.phoneNumber || "");

        fd.append("job_title", f.jobTitle);
        fd.append("entity", f.entity);
        fd.append("website", f.companyWebsite || "");
        fd.append("sector", f.sector);

        fd.append("bio", f.professionalBio || "");
        fd.append("linked_in_profile", f.linkedinProfile || "");

        fd.append("arrival_date", f.arrivalDate);
        fd.append("arrival_time", f.arrivalTime);
        fd.append("departure_date", f.departureDate);
        fd.append("departure_time", f.departureTime);
        fd.append("hotel_name", f.hotelName || "");

        return fd;
      },
      async submitForm() {
        if (!this.validateStep()) return;
        this.loading = true;
        this.submitError = "";
        this.serverMessage = "";
        try {
          const endpoint =
            (this.apiBaseUrl || "").replace(/\/$/, "") + "/api/register";
          const res = await fetch(endpoint, {
            method: "POST",
            body: this.buildFormData(),
          });
          let data = null;
          try {
            data = await res.json();
          } catch {}
          if (!res.ok) {
            if (data?.errors && typeof data.errors === "object") {
              const map = {
                first_name: "firstName",
                father_name: "fatherName",
                grandfather_name: "grandfatherName",
                family_name: "familyName",
                national_number: "nationalNumber",
                last_name: "lastName",
                passport_copy: "passportCopy",
                phone_country_code: "phoneCountryCode",
                phone_number: "phoneNumber",
                job_title: "jobTitle",
                company_website: "companyWebsite",
                professional_bio: "professionalBio",
                linkedin_profile: "linkedinProfile",
                arrival_date: "arrivalDate",
                arrival_time: "arrivalTime",
                departure_date: "departureDate",
                departure_time: "departureTime",
                hotel_name: "hotelName",
              };
              const merged = { ...this.errors };
              for (const [k, v] of Object.entries(data.errors)) {
                merged[map[k] || k] = Array.isArray(v) ? v[0] : String(v);
              }
              this.errors = merged;
            }
            throw new Error(data?.message || "Submission failed");
          }
          this.serverMessage =
            data?.message || "Application submitted successfully";
          try {
            sessionStorage.setItem("jeic_success_message", this.serverMessage);
          } catch {}
          window.location.href = "success.html";
        } catch (err) {
          this.submitError = err?.message || "Submission failed";
        } finally {
          this.loading = false;
          window.scrollTo({ top: 0, behavior: "smooth" });
        }
      },
    },
  }).mount(selector);
}

window.mountJEICRegistrationApp = mountRegistrationApp;
