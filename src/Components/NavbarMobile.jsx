import * as React from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import Button from '@mui/material/Button';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import MailIcon from '@mui/icons-material/Mail';
import { Icon } from '@chakra-ui/react'
import { GiHamburgerMenu,GiSkills } from "react-icons/gi"
import { AiFillHome,AiOutlineFundProjectionScreen,AiFillIdcard } from "react-icons/ai"
import { BsFillPersonFill } from "react-icons/bs"
import { FiMail } from "react-icons/fi"
import * as Scroll from 'react-scroll';
import style from "../Styles/NavbarMobile.module.css"

export default function TemporaryDrawer() {
    let Link = Scroll.Link;
    const [state, setState] = React.useState({
      top: false,
      left: false,
      bottom: false,
      right: false,
    });
  
    const toggleDrawer = (anchor, open) => (event) => {
      if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
        return;
      }
  
      setState({ ...state, [anchor]: open });
    };
  
    const list = (anchor) => (
      <Box
        sx={{ width: anchor === 'top' || anchor === 'bottom' ? 'auto' : 300 }}
        role="presentation"
        onClick={toggleDrawer(anchor, false)}
        onKeyDown={toggleDrawer(anchor, false)}
      >
        <List>
          {['Home', 'About Me', 'Skills', 'Projects','Contact','Resume'].map((text) => (
            <Link activeClass="active" to={text} smooth={true} duration={1000}>
            <ListItem key={text} disablePadding>
              <ListItemButton>
                <ListItemIcon>
                  {text === 'Home' ? <Icon as={AiFillHome} boxSize={25} color={"#ff6600"}/>:""}
                  {text === 'About Me' ? <Icon as={BsFillPersonFill} boxSize={25} color={"#ff6600"}/>:""}
                  {text === 'Skills' ? <Icon as={GiSkills} boxSize={25} color={"#ff6600"}/>:""}
                  {text === 'Projects' ? <Icon as={AiOutlineFundProjectionScreen} boxSize={25} color={"#ff6600"}/>:""}
                  {text === 'Contact' ? <Icon as={FiMail} boxSize={25} color={"#ff6600"}/>:""}
                  {text === 'Resume' ? <Icon as={AiFillIdcard} boxSize={25} color={"#ff6600"}/>:""}
                </ListItemIcon>
                <h2 className={style.text} style={{}}>{text}</h2>
              </ListItemButton>
            </ListItem>
            </Link>
          ))}
        </List>
      </Box>
    );
    
    return (
      <div>
        {['right'].map((anchor) => (
          <React.Fragment key={anchor}>
            <Button onClick={toggleDrawer(anchor, true)}><Icon as={GiHamburgerMenu} boxSize={30} color={"#ff6600"}/></Button>
            <Drawer
              anchor='right'
              open={state['right']}
              onClose={toggleDrawer('right', false)}
            >
              {list('right')}
            </Drawer>
          </React.Fragment>
        ))}
      </div>
    );
  }