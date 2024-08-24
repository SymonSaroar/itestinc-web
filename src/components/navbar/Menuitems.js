import {
  Bs,
  Ds,
  About,
  Careers,
  ContactUs,
  Ftwp,
  ManagementTeam,
  PressReleases,
  Ptc,
  RecentEvents,
  Reliability,
  Rtw,
  StayTuned,
  TestServices,
  Testimonials,
  Tihd,
  Tpd,
  Ttts,
  WaferProcess,
  PackageQualification,
  EnvironmentalTesting,
  AnalyticalServices,
} from "../submenu";
import ptcimage from "../../assets/93K_Products_Final.jpg";
import { wfpone, wfptwo, wfpthree, wfpfour, wfpfive, envone, envtwo } from "../../assets";
export const menuItems = [
  {
    title: "Home",
    url: "/home",
  },
  {
    title: "Listing of Services",
    url: "/listing-of-services",
    object: <TestServices menu={1} />,
    submenu: [
      {
        title: "Test Program Development",
        url: "/test-program-development",
        object: <Tpd menu={1} submenu={1} />,
        details:
          "Our engineers are experienced in high-speed digital, mixed signal, analog, RF and SOC test-program development. iTest’s team of experienced engineers will work seamlessly with you and your team to help meet your market challanges.",
      },
      {
        title: "Test Interface Hardware Development",
        url: "/test-interface-hardware-development",
        object: <Tihd menu={1} submenu={2} />,
        details:
          "iTest can help design the hardware interface for your device testing.  We will suggest the most optimal tester configuration, to save on production costs without compromising on quality. You will also find us quite adept at preempting and solving any handler or prober related interfacing problems.",
      },
      {
        title: "Tester Time With Technical Support",
        url: "/tester-time-with-technical-support",
        object: <Ttts menu={1} submenu={3} />,
        details:
          "We recognize that as an outsource-service provider, in addition to cost savings we must offer flexibility and convenience. Your engineers may sign up for guaranteed tester-time, on a daily, weekly or monthly basis. You may even manage your own reservations. And while our testers are fully configured with the latest technology, you pay by what you actually need and use. Whether you use our testers on site or remotely from your desktop, we will have troubleshooting help on standby.",
      },
      {
        title: "Products/Testers Capabilities",
        url: "/products-testers-capabilities",
        object: <Ptc menu={1} submenu={4} />,
        details: "",
        image: ptcimage,
      },
      {
        title: "Final Test & Wafer Probe",
        url: "/final-test-wafer-probe",
        object: <Ftwp menu={1} submenu={5} />,
        details:
          "With state of the art equipment and an engineering staff to match, we are setting the bar.\nFinal test at ambient/cold/hot temperatures; active thermal control,\nDirect-Dock probing for plain or bumped wafers. 12-inch heat-dissipative chuck.\nTraveler-Driven Process with Real-Time controls and data-sharing with Customer.",
      },
      {
        title: "Backend Services",
        url: "/backend-services",
        object: <Bs menu={1} submenu={6} />,
        details:
          "iTest is a one-stop shop that provides full back-end services for your semiconductor needs. Our back-end services include lead scan, ball scan, marking, bake and dry pack and tape and reel.",
      },
      {
        title: "Real-Time WIP",
        url: "/real-time-wip",
        object: <Rtw menu={1} submenu={7} />,
        details: "Go to Server",
      },
      {
        title: "Drop Ship",
        url: "/drop-ship",
        object: <Ds menu={1} submenu={8} />,
        details:
          "iTest provides drop ship management to its customers to help manage inventory in the supply chain. Our storage facility follows JEDEC standards, and we provide real-time access to inventory status and reports.",
      },
    ],
  },
  {
    title: "Wafer Process Quals",
    url: "/wafer-process-quals",
    object: <WaferProcess menu={2} />,
    details: (
      <>
        <h3 className={"info-heading"}>Molding your future with each step</h3>
        <div className={"info-listings"}>
          <div className={"info-icon"} style={{ backgroundImage: `url(${wfpone})` }}>

          </div>

          <p className={"info-para"}>
            Our specialty it to devise, and execute Process and Technology
            Qualification of Test Chips, Standard products, ASICs, FPGA’s
            Memories, and all other logic products.
          </p>
        </div>

        <div className={"info-listings"}>
          <div className={"info-icon"} style={{ backgroundImage: `url(${wfptwo})` }}>

          </div>
          <p className={"info-para"}>
            Building upon the process Wafer and Foundry Processing data a
            Qualification and characterization plan is devised that looks at
            Early Failure Rate and Long-Term Performance of technologies.
          </p>
        </div>
        <div className={"info-listings"}>
          <div className={"info-icon"} style={{ backgroundImage: `url(${wfpthree})` }}>

          </div>
          <p className={"info-para"}>
            Foundry specific tests and customary tests around bench marking of
            the technology are designed with full test hardware, biasing and
            stress hardware, Burn in and HTOL Boards.
          </p>
        </div>
        <div className={"info-listings"}>
          <div className={"info-icon"} style={{ backgroundImage: `url(${wfpfour})` }}>

          </div>
          <p className={"info-para"}>
            The centerpiece of this is our Life Test Burn in or HOTL Services.
          </p>
        </div>
        <div className={"info-listings"}>
          <div className={"info-icon"} style={{ backgroundImage: `url(${wfpfive})` }}>

          </div>
          <ul className={"info-para"}>
            <li>Low power Dynamic, Static and functional Burn in</li>
            <li>Test during Burn in. At speed intelligent Burn in</li>
            <li>Ambient low power air flow managed Burn in</li>
            <li>Thermally Managed and junction managed burn in</li>
            <li>
              Real time water/ heater controlled burn in for High Power
              dissipation.
            </li>
            <li>Reference card and System Level Test Burn in.</li>
            <li>Level I and systems level II burn in</li>
            <li>Power cycling and application specific Burn -in.</li>
            <li>COTS Qualification & PEM & Qualification Services</li>
            <li>On Going Reliability Monitors (ORM,s)</li>
            <li>Advanced Chamber less Burn-in (RF device testing)</li>
          </ul>
        </div>
      </>
    ),
    // submenu: [
    //   {
    //     title:
    //       "We intend to partner with specialists in this area. Stay tuned.",
    //     url: "/stay-tuned",
    //     object: <StayTuned menu={2} submenu={1} />,
    //     details:
    //       "We intend to partner with specialists in this area. Stay tuned.",
    //   },
    // ],
  },
  {
    title: "Package Qualification",
    url: "/package-qualification",
    object: <PackageQualification menu={3} />,
  },
  {
    title: "Environmental Testing",
    url: "/environmental-testing",
    object: <EnvironmentalTesting menu={4} />,
    details: (
        <>
          <h3 className={"info-heading"}>Right beside you!</h3>
          <div className={"info-listings"}>
            <div className={"info-icon"} style={{ backgroundImage: `url(${envone})` }}>

            </div>
            <ul className={"info-para"}>
              <h4 className={"info-head"}>Environmental Testing Services Offered: </h4>
              <li>Moisture/Reflow Sensitivity Classification</li>
              <li>JEDEC Preconditioning</li>
              <li>High temperature operating life (HTOL) test</li>
              <li>HTSL: The high-temperature storage life test</li>
              <li>Highly Accelerated Temperature and Humidity Stress Test (HAST)</li>
              <li>Steady-State Temperature Humidity Bias Life (THB)</li>
              <li>Temperature Cycling Test (TCT)</li>
              <li>Power and Temperature Cycling (PTC)</li>
              <li>Thermal Shock Test, Liquid to Liquid</li>
              <li>Autoclave (Pressure Pot)</li>
              <li>Salt Atmosphere</li>
              <li>High Temperature Storage (HTS) and Low Temperature</li>
              <li>POTC (Power ON Temperature Cycle)</li>
              <li>Board Level Qualification</li>
              <li>Level I and Level II Qualification - Evaluate die, package, and board-level reliability.</li>
              <li>IPC Level II Testing</li>
              <li>CSP Reliability Qualification</li>
            </ul>
          </div>

          <div className={"info-listings"}>
            <div className={"info-icon"} style={{ backgroundImage: `url(${envtwo})` }}>

            </div>

            <ul className={"info-para"}>
              <h4 className={"info-head"}>Mechanical Testing Services Offered:</h4>
              <li>Shock and vibration</li>
              <li>Fine/gross leak</li>
              <li>Solder joint reliability</li>
              <li>Ball shear</li>
              <li>Die shear and pull</li>
              <li>Wire pulls.</li>
              <li>Lid torque</li>
              <li>Solderability test</li>
              <li>Marking permanency</li>
              <li>Centrifuge (constant acceleration)</li>
              <li>Wire bond shear/bond pull</li>
              <li>Destructive Physical Analysis (DPA)</li>
              <li>Meets all ISTA standards and test procedures.</li>
              <li>ASTM standards and AEQ</li>
            </ul>
          </div>
        </>
    ),
  },
  {
    title: "Analytical Services",
    url: "/analytical-services",
    object: <AnalyticalServices menu={5} />,
    details: (
        <>
          <div className={"info-listings"}>
            {/*<div className={"info-icon"} style={{ backgroundImage: `url(${envone})` }}>

            </div>*/}
            <ul className={"info-para"}>
              <h4 className={"info-head"}>Reliability Test Services Offered: </h4>
              <li>Characterize devices for a wide array of electrical (DC/RF), mechanical and environmental stresses to
                ascertain best-in-class FIT rates.
              </li>
              <li>Accelerated Evaluation & Qualification</li>
              <li>Board-level Solder Joint Reliability</li>
              <li>Device characterization / Feasibility Analysis</li>
              <li>Multiple package/product evaluation</li>
              <li>High-powered, liquid and RF burn-in</li>
              <li>Acoustic Microscopy</li>
              <li>EFR Analysis</li>
              <li>Particle Impact Noise Detection (PIND)</li>
              <li>Salt Atmosphere</li>
              <li>Shadow Moiré/Warpage Analysis</li>
              <li>Solderability</li>
              <li>X-Ray</li>
              <li>Other Level III & Sub System</li>
              <li>Hermetic package testing</li>
            </ul>
          </div>

          <div className={"info-listings"}>
            {/*<div className={"info-icon"} style={{ backgroundImage: `url(${envtwo})` }}>*/}

            {/*</div>*/}

            <ul className={"info-para"}>
              <h4 className={"info-head"}>Failure Analysis Offered:</h4>
              <li>Photography and Optical Microscopy</li>
              <li>Radiography Inspection (X-Ray)</li>
              <li>Cross-Section</li>
              <li>Decapsulation</li>
              <li>Scanning Electron Microscopy (SEM)</li>
              <li>Energy Dispersive Spectroscopy (EDS/EDX)</li>
              <li>Scanning Acoustic Microscopy</li>
              <li>Emission Microscope (EMMI)</li>
              <li>Dye & Pry</li>
            </ul>
          </div>
        </>
    ),
  },
  {
    title: "About Us",
    url: "/about",
    object: <About menu={6} />,
    submenu: [
      {
        title: "Recent Events",
        url: "/recent-events",
        object: <RecentEvents menu={6} submenu={1} />,
        details: (
          <>
            <section>
              <b>
                <i>ITAR Registered - October 23, 2018</i>
              </b>
              <br />
              <p>
                DLA Certified - We received the Lab Suitability Certification on
                11/12/2018.
              </p>
            </section>
            <section>
              <b>
                <i>Received the ISO/IEC 17025 Accreditation - Dec 2017</i>
              </b>
              <br />
              <p>
                We at iTest, Inc. are pleased to share the news that we have
                been accredited for ISO/IEC-17025. Committed, as we are, to the
                pursuit of excellence, we are ready for the Hi-Rel and
                Automotive businesses.
              </p>
            </section>
            <section>
              <b>
                <i>Open House on Jan 19th 2018</i>
              </b>
              <br />
              <i>
                iTest Open House & Joint (iTest-KYEC) Customer Appreciation
                Event
              </i>
              <br />
              <p>
                With gratitude to our sponsors and partners: Advantest,
                Astronics, Chroma, CMR-Summit, Dynamic Test Solutions, Hon-Tech,
                Innovative Circuits Engineering, Kanematsu, Outperform
                International, SEMICS, Tokyo Electron Ltd & Winway
              </p>
              <i>Zef Malik joined iTest</i>
              <br />
              <p>
                iTest, Inc. is pleased to announce that Zef Malik has joined our
                team as a partner and General Manager of our Hi-Rel Business
                Unit. Mr. Malik is a semiconductor industry veteran with more
                than 40+ years of experience in a broad range of industry
                sectors, including IC Manufacturing, Device Characterization,
                Test and Product Qualification. He was a founder of Silicon
                Turnkey Solutions(STS) and is a respected leader in the Military
                Deep Space and High-reliability markets. Zef's wealth of
                experience, track record and history of demonstrated deliverance
                will bring increased synergy to ongoing efforts to expand our
                business offerings to cater to the Hi-Rel Reliability markets
                for the best in class High Speed, Ultra high pin count Digital,
                Mixed Signal, and RF test capabilities and services.
              </p>
            </section>
          </>
        ),
      },
      {
        title: "Press Releases",
        url: "/press-releases",
        object: <PressReleases menu={6} submenu={2} />,
      },
      {
        title: "Management Team",
        url: "/management-team",
        object: <ManagementTeam menu={6} submenu={3} />,
        details: (
          <>
            <section>
              <b>CEO: </b> Rabbi Islam <br />
            </section>
            <section>
              <b>Office Manager: </b>Chanpheng Daravong
              <br />
            </section>
            <section>
              <b>Technical Advisors: </b>Alex Barrios, Patrick Yu, Saeed Malik,
              Zef Malik
            </section>
          </>
        ),
      },
      {
        title: "Careers",
        url: "/careers",
        object: <Careers menu={6} submenu={4} />,
        details: (
          <>
            <p>
              Please send an email to{" "}
              <a href="mailto:champ.daravong@itestinc.com">
                champ.daravong@itestinc.com
              </a>
            </p>
          </>
        ),
      },
      {
        title: "Contact Us",
        url: "/contact-us",
        object: <ContactUs menu={6} submenu={5} />,
      },
    ],
  },
  // {
  //   title: "Testimonials",
  //   url: "/testimonials",
  //   object: <Testimonials menu={4} />,
  // },
];
