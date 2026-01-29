import FamilyAndFinancial from "../views/steps/FamilyAndFinancial";
import PersonalInformations from "../views/steps/PersonalInformations";
import Situation from "../views/steps/Situation";

export const FORM_STEPS = [
  {
    id: 1,
    label: "steps.personalInformation",
    shortLabel: "steps.personal",
    component: <PersonalInformations />,
  },
  {
    id: 2,
    label: "steps.familyFinancial",
    shortLabel: "steps.employment",
    component: <FamilyAndFinancial />,
  },
  {
    id: 3,
    label: "steps.situationDescriptions",
    shortLabel: "steps.situation",
    component: <Situation />,
  },
];
