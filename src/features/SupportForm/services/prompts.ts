import type { UserFormValues } from "../validations/formValidations";

export const buildFinancialSituationPrompt = (
  values: UserFormValues,
  lang: "en" | "ar",
) => {
  const {
    employment_status,
    monthly_income,
    dependents,
    marital_status,
    housing_status,
    city,
  } = values;

  if (lang === "ar") {
    return `
اكتب فقرة قصيرة وواضحة بصيغة المتكلم تصف وضعي المالي الحالي.

أنا ${employment_status || "غير عامل"}.
دخلي الشهري ${monthly_income || "محدود جدًا"}.
لدي ${dependents || "لا يوجد"} معالين.
حالتي الاجتماعية ${marital_status || "أعزب"}.
أعيش في ${housing_status || "سكن غير مستقر"} في ${city || "مدينتي"}.

يجب أن يكون الأسلوب طبيعيًا وصادقًا، كما لو أنني أشرح وضعي بنفسي.
    `.trim();
  }

  return `
Write a short, clear paragraph in first person describing my current financial situation.

I am ${employment_status || "not working"}.
My monthly income is ${monthly_income || "very limited"}.
I have ${dependents || "no"} dependents.
I am ${marital_status || "single"}.
I live in ${housing_status || "temporary housing"} in ${city || "my city"}.

The tone should be natural and honest, as if I am explaining my situation in my own words.
  `.trim();
};

export const buildEmploymentCircumstancesPrompt = (
  values: UserFormValues,
  lang: "en" | "ar",
) => {
  const { employment_status, monthly_income, city } = values;

  if (lang === "ar") {
    return `
اكتب فقرة قصيرة وواضحة بصيغة المتكلم تصف ظروفي الوظيفية الحالية.

حالتي الوظيفية ${employment_status || "غير موظف"}.
وضعي المالي ${monthly_income || "غير مستقر أو محدود"}.
أعيش وأبحث عن عمل في ${city || "منطقتي"}.

اشرح وضعي المهني بصدق، سواء كان العمل مؤقتًا أو غير منتظم أو متأثرًا بظروف شخصية أو اقتصادية.
    `.trim();
  }

  return `
Write a short, clear paragraph in first person describing my employment circumstances.

I am currently ${employment_status || "not employed"}.
My current income situation is ${monthly_income || "unstable or limited"}.
I live and look for work in ${city || "my area"}.

Explain my work situation honestly, including whether my employment is stable, temporary, irregular, or affected by personal or economic circumstances.
  `.trim();
};

export const buildReasonForApplyingPrompt = (
  values: UserFormValues,
  lang: "en" | "ar",
) => {
  const { employment_status, monthly_income, dependents, housing_status } =
    values;

  if (lang === "ar") {
    return `
اكتب فقرة قصيرة وواضحة بصيغة المتكلم تشرح سبب تقدمي للحصول على الدعم.

بسبب وضعي الحالي، أنا ${employment_status || "غير عامل"} ودخلي ${monthly_income || "محدود جدًا"}.
لدي ${dependents || "لا يوجد"} معالين، وأعيش حاليًا في ${
      housing_status || "سكن غير مستقر"
    }.

اشرح لماذا أحتاج إلى الدعم في هذه المرحلة وكيف سيساعدني على تحسين وضعي.
    `.trim();
  }

  return `
Write a short, clear paragraph in first person explaining why I am applying for support.

Based on my current situation, I am ${employment_status || "not working"} and my income is ${
    monthly_income || "very limited"
  }.
I have ${dependents || "no"} dependents and I currently live in ${
    housing_status || "unstable housing"
  }.

Explain why I need support at this time and how it would help me improve my situation.
  `.trim();
};
