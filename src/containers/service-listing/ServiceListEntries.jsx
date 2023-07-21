import list1 from "../../assets/servicelist/test-1.png";
import list2 from "../../assets/servicelist/interface-2.png";
import list3 from "../../assets/servicelist/technical-3.png";
import list4 from "../../assets/servicelist/capability-4.png";
import list5 from "../../assets/servicelist/wafer-5.png";
import list6 from "../../assets/servicelist/backend-6.png";

export const servicelistentries = [
  {
    key: "list1",
    image: list1,
    url: "../../assets/servicelist/test-1.png",
    title: "Test Program Development",
    subtitle: (
      <ul className="servicelisting-item-subtitle">
        <li> High temperature operating life (HTOL) test</li>
        <li> HTSL : The high-temperature storage life test</li>
        <li>Highly Accelerated Temperature and Humidity Stress Test (HAST)</li>
        <li> Temperature Cycling Test</li>
        <li> Full Environmental Test</li>
        <li> Latch up: High Current test on the ATE</li>
      </ul>
    ),
  },
  {
    key: "list2",
    image: list2,
    url: "../../assets/servicelist/interface-2.png",
    title: "Test interface Hardware Development",
    subtitle: "",
  },
  {
    key: "list3",
    image: list3,
    url: "../../assets/servicelist/technical-3.png",
    title: "Tester Time with Technical Support",
    subtitle: (
      <p>
        We work with the customer and do quick validation of your design, quick
        ESD, quick latch up, quick thermal function tests followed by test for
        reliability acceptance. In addition to this, we will do a technology
        evaluation, limited qual, followed by a personalized plan to defining
        qual plans, sample sizes, reliability targets and the reliability
        predictions with failure rate calculations.
      </p>
    ),
  },
  {
    key: "list4",
    image: list4,
    url: "../../assets/servicelist/capability-4.png",
    title: "Product / Tester Capability",
    subtitle: "",
  },
  {
    key: "list5",
    image: list5,
    url: "../../assets/servicelist/wafer-5.png",
    title: "Final Test and Wafer Probe",
    subtitle: (
      <ul>
        <li>Low power Dynamic, Static and functional Burn in.</li>
        <li>Test during Burn in. At speed intelligent Burn in.</li>
        <li>Ambient low power air flow managed Burn in.</li>
        <li>Thermally Managed and junction managed burn in.</li>
        <li>
          Real time water/ heater controlled burn in for High Power dissipation.
        </li>
        <li>Reference card and System Level Test Burn in.</li>
      </ul>
    ),
  },
  {
    key: "list6",
    image: list6,
    url: "../../assets/servicelist/backend-6.png",
    title: "Backend Services",
    subtitle: "",
  },
];
