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
  },
  {
    title: "Analytical Services",
    url: "/analytical-services",
    object: <AnalyticalServices menu={5} />,
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
