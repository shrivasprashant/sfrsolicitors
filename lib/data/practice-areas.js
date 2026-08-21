/**
 * The core practice-area destinations, preserved from the source
 * HTML's sections. Driving the "case file" sections from this array 
 * keeps the repeated dossier structure out of JSX rather than duplicating blocks.
 */
export const practiceAreas = [
  {
    id: "ma-european",
    fileNumber: "FILE NO. 01",
    tone: "light",
    icon: "ma", // You may need to add a corresponding SVG/Icon for this
    title: "M&A & European Markets",
    status: "Status — Cross-border strategy & execution",
    paragraphs: [
      "Navigating Mergers and Acquisitions (M&A) across European markets involves complex regulatory landscapes, financial structuring, and cross-border negotiations. Strategic expansion requires legal counsel that understands both local jurisdictions and broader European compliance frameworks.",
      "Our team provides comprehensive support for domestic and international transactions, ensuring your commercial objectives are met while mitigating risks associated with cross-border investments, joint ventures, and market entry."
    ],
    list: [
      "Cross-border M&A",
      "Joint ventures & strategic alliances",
      "European regulatory compliance",
      "Corporate restructuring",
      "Market entry strategy",
    ],
    linkLabel: "Discuss your M&A strategy",
    docketLabel: "M&A & Europe",
  },
  {
    id: "litigation",
    fileNumber: "FILE NO. 02",
    tone: "dark",
    icon: "litigation",
    title: "Litigation & Legal Disputes",
    status: "Status — Advice through resolution",
    paragraphs: [
      "Legal disputes can be stressful, time-consuming and financially significant. Whether you're involved in a civil dispute, contractual disagreement or another form of legal claim, obtaining professional legal advice at an early stage can help you understand your position and consider your options.",
      "Our approach focuses on understanding the facts, assessing the available evidence and developing a clear strategy for protecting your interests — from initial advice through to negotiation, dispute resolution and litigation.",
    ],
    list: null,
    linkLabel: "Talk to us about your legal dispute",
    docketLabel: "Litigation & Disputes",
  },
  {
    id: "injury",
    fileNumber: "FILE NO. 03",
    tone: "light",
    icon: "injury",
    title: "Personal Injury & Accident Claims",
    status: "Status — Evidence & entitlement review",
    paragraphs: [
      "An accident can have consequences that extend far beyond the initial injury — medical treatment, loss of earnings, emotional distress, rehabilitation costs and uncertainty about what happens next. If you've suffered an injury because of an accident or another person's actions, you may be entitled to pursue a claim.",
    ],
    list: [
      "Road traffic accidents",
      "Workplace accidents",
      "Public place accidents",
      "Slips, trips and falls",
      "Serious personal injuries",
      "Injuries caused by negligence",
    ],
    linkLabel: "Explore personal injury claims",
    docketLabel: "Personal Injury",
  },
  {
    id: "cica",
    fileNumber: "FILE NO. 04",
    tone: "dark",
    icon: "cica",
    title: "Criminal Injuries Compensation (CICA) Claims",
    status: "Status — Eligibility & application guidance",
    paragraphs: [
      "Experiencing violent crime can be deeply distressing, and the consequences can continue long after the incident itself. The Criminal Injuries Compensation Authority operates a compensation scheme for eligible victims — but understanding eligibility, evidence and the application process can be difficult, particularly while you're still dealing with what happened.",
      "We provide legal guidance to help eligible clients understand the CICA claims process and the information that may be required to support an application.",
    ],
    list: null,
    linkLabel: "Find out more about CICA claims",
    docketLabel: "CICA Claims",
  },
  {
    id: "immigration",
    fileNumber: "FILE NO. 05",
    tone: "light",
    icon: "immigration",
    title: "Immigration Services",
    status: "Status — Route & documentation support",
    paragraphs: [
      "Immigration matters can affect your family, employment, education and future. UK immigration rules can be complex, and choosing the appropriate route is often an important decision. Our immigration legal services are designed to provide clear guidance based on your individual circumstances.",
    ],
    list: [
      "Visa applications",
      "Family immigration",
      "Work visas",
      "Business & investment immigration",
      "Applications and extensions",
      "Settlement & related applications",
    ],
    linkLabel: "Speak to an immigration solicitor",
    docketLabel: "Immigration",
  },
];