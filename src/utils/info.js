import { VideoCameraFront, Public } from "@mui/icons-material";

const locationsInfo = [
  {
    officeType: "Head Office",
    address:
      "88, Caval Cross Lane No-2, 1st Floor, Dadiseth Agiyari Lane, Kalbadevi Road, Mumbai, 400002",
    contact: "+91 8789371027",
  },
  {
    officeType: "Branch Office",
    address:
      "Ground Floor, D-9, Desk No 45, Noida, Sector 3, Noida, Gautambuddha Nagar, Uttar Pradesh, 201301",
    contact: "+91 8789371027",
  },
];

const contactUsInfo = {
  CONTACT_US_NAME: "Vinit Agarwal",
  CONTACT_US_PHONE: "+91 8789371027",
  CONTACT_US_EMAIL: "vinit@blackbirdtrades.com",
};

const footerInfo = {
  FOOTER_ADDRESS: locationsInfo[0].address,
  FOOTER_EMAIL: "support@blackbirdtrades.com",
  FOOTER_PHONE: locationsInfo[0].contact,
  FOOTER_FB: "#",
  FOOTER_INSTA: "#",
  FOOTER_TWITTER: "#",
  FOOTER_LINKEDIN: "#",
};

const businessVenturesInfo = [
  {
    title: "The Blue Entertainment",
    description:
      "We produce feature films, short films, television series and documentaries across various genres. Visit our website to know more.",
    icon: <VideoCameraFront fontSize="large" sx={{ color: "#2C3335" }} />,
    link: "https://theblueentertainment.com/",
  },
  {
    title: "The Blue International",
    description: "Coming Soon...",
    icon: <Public fontSize="large" sx={{ color: "#2C3335" }} />,
    link: "https://theblueinternational.com/",
  },
];

export { locationsInfo, contactUsInfo, footerInfo, businessVenturesInfo };
