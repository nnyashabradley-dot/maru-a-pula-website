/* ============================================================
   MARU-A-PULA SCHOOL — CENTRAL SITE CONFIG
   ------------------------------------------------------------
   THIS IS THE ONE FILE TO EDIT for information that appears
   in lots of places across the website.

   Change a value here and it updates on EVERY page automatically.
   No need to hunt through 30+ HTML files.

   HOW TO USE:
   1. Edit the value between the quote marks below.
   2. Save the file.
   3. Push to GitHub — the whole site updates within ~1 minute.

   Example: to change the school phone number, edit the
   "phone" line below. That's it.
   ============================================================ */

window.SITE = {

  /* ---------- SCHOOL IDENTITY ---------- */
  schoolName:     "Maru-a-Pula School",
  schoolShort:    "MaP",
  tagline:        "SCHOOL · EST. 1972",
  foundedYear:    "1972",

  /* ---------- CONTACT DETAILS ---------- */
  /* These appear in the footer of every single page. */
  address:        "4725 Maruapula Way, Gaborone",
  addressFull:    "Plot 4725 Maruapula Way, Gaborone, Botswana",
  phone:          "+267 391 2953",
  email:          "comms@maruapula.org",

  /* Department email addresses (used on the Contact page) */
  emailAdmissions: "admissions@maruapula.org",
  emailAlumni:     "alumni@maruapula.org",
  emailAcademics:  "academics@maruapula.org",
  emailService:    "service@maruapula.org",
  emailMaitisong:  "maitisong@maruapula.org",
  emailFinance:    "finance@maruapula.org",

  /* ---------- OFFICE HOURS ---------- */
  officeHours:    "Monday–Friday, 7:30 AM – 4:30 PM",
  officeOpenHour:  7.5,   /* 7:30 AM — used by the Library "open now" badge */
  officeCloseHour: 17,    /* 5:00 PM */

  /* ---------- KEY NUMBERS ---------- */
  /* Shown in stat blocks around the site. */
  totalStudents:  "750+",
  totalStaff:     "70+",
  dayScholars:    "~500",
  boarders:       "~100",
  campusAcres:    "50",
  alumniCount:    "4,000+",
  theatreSeats:   "450",
  libraryBooks:   "15,000+",

  /* ---------- FOOTER ---------- */
  copyrightYear:  "2026",

  /* ---------- SOCIAL LINKS ---------- */
  /* Leave as "#" if the school doesn't use that platform. */
  social: {
    facebook:  "#",
    instagram: "#",
    twitter:   "#",
    youtube:   "#"
  }

};

/* ============================================================
   BELOW THIS LINE IS THE MACHINERY — you don't need to edit it.
   It finds every element marked with data-site="..." on the page
   and fills it in with the values above.
   ============================================================ */
(function(){
  if(!window.SITE) return;

  function valueFor(key){
    // supports dotted keys like "social.facebook"
    return key.split('.').reduce(function(obj, part){
      return (obj && obj[part] !== undefined) ? obj[part] : undefined;
    }, window.SITE);
  }

  function apply(){
    document.querySelectorAll('[data-site]').forEach(function(el){
      var v = valueFor(el.getAttribute('data-site'));
      if(v === undefined) return;
      if(el.tagName === 'A' && el.hasAttribute('data-site-href')){
        el.setAttribute('href', v);
      } else {
        el.textContent = v;
      }
    });
    // Fill any element marked data-site-href with a link target
    document.querySelectorAll('[data-site-href]').forEach(function(el){
      var v = valueFor(el.getAttribute('data-site-href'));
      if(v !== undefined) el.setAttribute('href', v);
    });
  }

  if(document.readyState === 'loading'){
    document.addEventListener('DOMContentLoaded', apply);
  } else {
    apply();
  }
})();
