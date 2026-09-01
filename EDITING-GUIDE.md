# How to Update the MaP Website

A plain-English guide for staff. **You do not need to be a developer** to make the changes in Part 1.

---

## Part 1 — Changing information that appears everywhere

**File to edit: `assets/site-config.js`**

This one file controls information that shows up on lots of pages at once — the school phone number, email address, physical address, and so on. Change it once here, and it updates on **every page automatically**.

### How to do it

1. Go to the repository on GitHub
2. Open the folder `assets`, then click `site-config.js`
3. Click the **pencil icon** (✏️) in the top right to edit
4. Find the line you want to change and edit the text **between the quote marks**
5. Scroll down, click **Commit changes**
6. Wait about a minute — the live site updates itself

### What you can change here

| What | Line to look for | Appears on |
|---|---|---|
| School phone number | `phone:` | Footer of every page, Contact page |
| Main email address | `email:` | Footer of every page |
| Street address | `address:` | Footer of every page |
| Full postal address | `addressFull:` | Contact page, Alumni page |
| Department emails | `emailAdmissions:`, `emailAlumni:`, etc. | Contact page |
| Office hours | `officeHours:` | Contact page |
| Copyright year | `copyrightYear:` | Footer of every page |
| Student/staff numbers | `totalStudents:`, `totalStaff:`, etc. | Various stat blocks |
| Social media links | under `social:` | Footer |

### Example

To change the school phone number, find this line:

```
phone:          "+267 391 2953",
```

and change it to:

```
phone:          "+267 391 9999",
```

Save it, and the number updates in the footer of all 34 pages.

**Important:** keep the quote marks `" "` and the comma `,` exactly where they are. Only change the words inside the quotes.

---

## Part 2 — Changing page content (text, news, photos)

Content that only appears on **one page** still lives in that page's own file. For example:

- To edit the About page → open `about.html`
- To edit the Admissions page → open `admissions.html`
- To edit a news article → open `article.html`

Find the text you want to change, edit it, and commit. The same one-minute wait applies.

### The Technical Team portal

There's a content manager built into the staff portal (sign in → Staff → Technical) where you can draft new news articles, shop items, and image changes. It's useful for planning changes and handing them over — but **it does not publish to the live site by itself**. Use the **Export Changes** button and send the file to whoever manages the repository.

---

## Part 3 — Things that still need a developer

These aren't set up yet and can't be changed by editing a file:

- **Real sign-in** — the staff/parent/student portal is a demonstration. Anyone can click through it; there's no password checking.
- **Forms that actually send** — the Contact form, application form, and alumni update form look real but don't deliver anywhere yet.
- **Payments** — the Shop cart and Donate page can't take real money.
- **The library catalogue and rosters** — these use sample data, not the school's real records.

Each of these needs a backend service connected before it works for real.

---

## A note on the sample data

Several parts of the site use **generated placeholder data** to show what the finished thing would look like — student names on the campus roster, library borrowers, reading leaderboards, and staff names in the portal. None of these are real people. They should be replaced with real data (or connected to the school's real systems) before anyone relies on them.
