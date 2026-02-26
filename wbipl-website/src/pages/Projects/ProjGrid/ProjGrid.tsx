import "./ProjGrid.css";

type Project = {
  image: string;
  title: string;
  content: string;
};

const PROJECTS: Project[] = [
  {
    image: "/images/p9.png",
    title: `Client : National Highways Authority of India (NHAI)Zonal Railway: Southern Central Railways Contractor :  M/s. RRR Constructions & Projects Pvt Ltd`,
    content: `The successful completion of the fabrication, transportation, and launching of the Bow String Steel Girder for the level crossing between Chandragiri and Tirupati West Stations.`,
  },
  {
    image: "/images/p8.png",
    title: `Client: National Highways Authority of India (NHAI)Zonal Railway: South central Railway (SWR)Contractor : HG Infra Engineering Ltd`,
    content: `Fabrication of Composite Steel Plate Girders for ROB at Chainage 3+670, 5+996, 18+990 and Bow String Girders at 10+262  weighing 681 tons for the Four laning of Mancherial  to Repaliewada `,
  },
  {
    image: "/images/p10.png",
    title: `Client : National Highways Authority of India (NHAI)Zonal Railway : Southern Central Railways Contractor : M/s KNR Constructions Limited`,
    content: `Fabrication of Bow String Girders in Pollachi,Tamilnadu Bow String Girder span details – 2x63.4m long as per RDSO/B-10415 Series`,
  },
  {
    image: "/images/p7.png",
    title: `Client : National Highways Authority of India (NHAI)Zonal Railway : Northern RailwayContractor : M/s Gayatri Projects Ltd`,
    content: `Development of Purvanchal Expressway from Chand Sarai to Sansara (km(-)0+270 to km 40+200) in state of Uttar Pradesh`,
  },
  {
    image: "/images/p5.png",
    title: `Client : National Highways Authority of India (NHAI) Zonal Railway : South Western Railway, Birur. Contractor : Ashoka Buildcon Limited`,
    content: `Construction of Road over Bridge (ROB) at Design chainages Km 80.9, Km 101.6 and Km 107.6' for Tumkur Shivmoga Project i.e. Karadi Banawara Road Project in the state of Karnataka`,
  },
  {
    image: "/images/p6.png",
    title: `Client : KSHIIP BangloreZonal Railway : SWR HubbaliContractor : M/s KNR Constructions Limited`,
    content: `Supply, Fabrication, Transportation and Launching of Bow string steel girders for Magadi to Somwarpet Section of SH-85 Project in Karnataka State - Reg.`,
  },
  {
    image: "/images/p4.png",
    title: `Client : National Highways Authority of India (NHAI) Zonal Railway: Southern Railway , Trivandrum.Contractor : M/s KNR Constructions Limited`,
    content: `Construction of Road over Bridge ROB No.2390A between Kochuveli and Trivandrum pettah railway Stations at Km.216/730 near Chakka (NH Chainage Km.9+807).`,
  },
  {
    image: "/images/p3.png",
    title: `Client : Hyderabad Metropolitan DevelopmentContractor : M/s BSCPL Infrastructure Limited`,
    content: `Construction of Multi-Level Flyovers/ Grade Separators at four junctions at LB Nagar and Surroundings In Hyderabad under Engineering Procurement and Construction (EPC) – Turnkey(Package II).`,
  },
  {
    image: "/images/p2.png",
    title: `Client : KSHIIP Bangalore Zonal Railway : South Western Railway, Birur. Contractor : M/s KVRECPL`,
    content: `Construction of Road over Bridges with approaches at Railway Km.219/900- 220/000, Road Chainage 44+855 on Channagiri - Birur road (between Birur Station - Nagavangala Station on Birur Junction - Chikjajur Section of Mysore Division).`,
  },
  {
    image: "/images/p1.png",
    title: `Client : M/s AITL, AURANGABAD. Zonal Railway : Western Railway Contractor : M/s Patil Rail Infrastructure Pvt Ltd.`,
    content: `Proposed 6 Lane Road Over Bridge at Railway Km.135/755 between Chikalthana – Karmad Stations as spans of 2X41.5M Composite Steel Girder On SHENDRA-BIDKIN Section.`,
  },
  {
    image: "/images/p12.png",
    title: `Client : Indian RailwaysZonal Railway : South Western Railway (SWR). Contractor : M/s Mohanlal Maganlal Kakrecha`,
    content: `Supply and Manufacturing, Assembling and Launching of 30.50m Welded through type Steel Girders for bridges at Km 48.677 and Km 62.230 between Sri Ramanagar and Karatagi Stations.`,
  },
  {
    image: "/images/p11.png",
    title: `Client : Indian RailwaysZonal Railway : East coast RailwaysContractor : VBRL WBIPL JV`,
    content: `Construction of Major Bridge No. 156 (5x45.7m steel through Girder) between Lakshmipur-Tikiri stations on KR line of Waltair Division, East coast Railway`,
  },
];

export default function ProjectsGrid() {
  return (
    <section className="projectsWrap">
      <div className="container">
        <div className="projectsGrid">
          {PROJECTS.map((project, index) => (
            <div className="projectCard" key={index}>
              <div className="projectImageWrap">
                <img
                  src={project.image}
                  alt="Project"
                  className="projectImage"
                />
              </div>
              <p className="title" style={{color: '#DCB900'}}>
                {project.title}
              </p>
              <p style={{marginTop: 0}}>
                {project.content}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}