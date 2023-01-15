import * as React from 'react';
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { AiOutlineDesktop } from "react-icons/ai"
import { MdOutlinePhoneAndroid, MdTabletMac } from "react-icons/md"
import { Icon } from '@chakra-ui/react'
import Laptop from "../assets/laptop1.mp4"
import style from "../Styles/TabProjectOne.module.css"
import Tablet from "../assets/tablet1.mp4"
import AOS from 'aos';
import 'aos/dist/aos.css';
import Divider from '@mui/material/Divider';
import Narvidesk from "../assets/narvidesk.png";
import Narvimob from "../assets/narvimobile.png";

const theme = createTheme({
  palette: {
    primary: {
      main: '#ff6600',
    },
    secondary: {
      main: '#ff6604',
    },
  },
});

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}

export default function ProjectOne() {
  AOS.init();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box className={style.main}>
      <ThemeProvider theme={theme}>
        <Box sx={{ borderBottom: '1px solid #ffffff' }}>
          <Tabs centered textColor="primary" indicatorColor="primary" value={value} onChange={handleChange} aria-label="basic tabs example">
            <Tab icon={<Icon as={AiOutlineDesktop} boxSize={30} />} sx={{ color: 'background.paper' }} label="Laptop" {...a11yProps(1)} />
            <Tab icon={<Icon as={MdTabletMac} boxSize={30} />} sx={{ color: 'background.paper' }} label="Tablet" {...a11yProps(2)} />
            <Tab icon={<Icon as={MdOutlinePhoneAndroid} boxSize={30} />} sx={{ color: 'background.paper' }} label="SmartPhone" {...a11yProps(0)} />
          </Tabs>
        </Box>
        <TabPanel value={value} index={0}>
          <div className={style.video} data-aos="zoom-in" data-aos-duration="1000" data-aos-easing="ease-in-out">
            <video className={style.videoinner} autoPlay muted loop>
              <source src={Laptop} type="video/mp4" />
            </video>
          </div>
          <div className={style.imginner}>
            <img className={style.imginnerand} src={Narvidesk} alt="" />
          </div>
        </TabPanel>
        <TabPanel value={value} index={1}>
          <div className={style.video} data-aos="zoom-in" data-aos-duration="1000" data-aos-easing="ease-in-out">
            <video className={style.videoinner} autoPlay muted loop>
              <source src={Tablet} type="video/mp4" />
            </video>
          </div>
          <div className={style.imginner}>
            <img className={style.imginnerand} src={Narvimob} alt="" />
          </div>
        </TabPanel>
        <TabPanel value={value} index={2} data-aos="zoom-in" data-aos-duration="1000" data-aos-easing="ease-in-out">
          <div className={style.video}>
            <video className={style.videoinner} autoPlay muted loop>
              <source src={Tablet} type="video/mp4" />
            </video>
          </div>
          <div className={style.imginner}>
            <img className={style.imginnerand} src={Narvimob} alt="" />
          </div>
        </TabPanel>
      </ThemeProvider>
    </Box>
  );
}