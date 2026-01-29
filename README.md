# AI Social Support Form

This project is a multi-step support request form built with React.
The main goal is to collect user information, help users describe their situation using AI assistance, and submit the data in a clean and accessible way.

---

## How to Run the Project

### 1. Install dependencies

```bash
npm install
```

---

### 2. Run the project locally

```bash
npm run dev
```

The app will be available at:

```
http://localhost:5173
```

---

## OpenAI API Key Setup

This project uses OpenAI to generate AI suggestions for some text fields.

### 1. Create an OpenAI API key

- Go to [https://platform.openai.com/](https://platform.openai.com/)
- Create a new API key from your dashboard

### 2. Add the key to your environment variables

Create a `.env` file in the root of the project:

```env
VITE_OPENAI_KEY=your_openai_api_key_here
```

---

## Project Architecture & Decisions

### Folder Structure

I use a **feature-based folder structure**, which I usually prefer because it scales well and keeps related logic together.

It works nicely for:

- Modern React apps
- SPAs
- SSR
- Even React Native with small adjustments

Each feature contains:

- components
- hooks
- validations
- services
- tests

---

### Development Timeline & Decisions

1. **Functionality first**
   - Focused on business logic and correct data flow
   - UI polishing came later

2. **Feature-based structure**
   - Makes the app easier to grow
   - Keeps forms, steps, and logic isolated

3. **Routing & Layout**
   - React Router with a main layout
   - Easy to add navigation, footer, or auth layers later

4. **UI Framework**
   - Material UI for consistency and accessibility
   - Centralized theme for colors, spacing, buttons, and inputs
   - RTL/LTR support for Arabic and English

5. **Forms & Validation**
   - React Hook Form for performance and control
   - Zod for schema-based validation
   - Validation messages are translated using i18n

6. **State Management**
   - Context API used for step navigation (activeStep)
   - Kept it simple on purpose (no Redux needed here)

7. **AI Integration**
   - OpenAI used to help users write descriptions
   - AI suggestions can be accepted or discarded
   - Text is animated to feel more “human” while generating

---

## Accessibility Notes

- Uses semantic HTML and MUI components
- Buttons and inputs are keyboard accessible
- ARIA labels added where needed (Stepper sections, regions)
- Works in both LTR and RTL modes

---

## Possible Improvements (Next Steps)

If this were a production app, the next things I would do:

- Move OpenAI calls to a backend API
- Add rate limiting & better error handling for AI
- Persist form progress in LocalStorage
- Add more automated tests (form validation + step flow)
- Improve AI prompts per country / culture
- Add analytics or form completion tracking

---

## Final Note

This project focuses on **clarity, scalability, and user experience**, not just visuals.
The code is structured to be readable, maintainable, and easy to extend.
