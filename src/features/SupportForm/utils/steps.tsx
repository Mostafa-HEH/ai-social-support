import FamilyAndFinancial from "../views/steps/FamilyAndFinancial";
import PersonalInformations from "../views/steps/PersonalInformations";
import Situation from "../views/steps/Situation";

export const FORM_STEPS = [
  { id: 1, label: "Personal Information", component:  <PersonalInformations />},
  { id: 2, label: "Family & Financial Info" , component:<FamilyAndFinancial />},
  { id: 3, label: "Situation Descriptions", component: <Situation /> },
];
