import React, {useState} from 'react'
import styled from 'styled-components'
import {BsChevronRight} from 'react-icons/bs'
import {TfiWorld} from 'react-icons/tfi'
import CloseIcon from '@mui/icons-material/Close';
import MenuIcon from '@mui/icons-material/Menu';
import { selectCars } from "../features/car/carSlice";
import  {useSelector} from 'react-redux';




export default function Header() {
  const [openStatus, setOpenStatus] = useState(false);

  const cars = useSelector(selectCars)
  console.log(cars);


  return (


    <div>
      <Container>
      <a href='#'>
        <img height="16px" width="125px" src="/images/logo.svg" alt=""></img>
      </a>
      <Menu>
        {cars && cars.map((car, index)=>(
          <a key={index} href="#">{car}</a>
        ))}
        <a href='#'>Solar Panel</a>
        <a href='#'>Solar Roof</a>
      </Menu>
      <RightMenu>
        <a href='#'>Shop</a>
        <a href='#'>Account</a>
        <CustomMenu onClick={()=>setOpenStatus(true)}/>

      </RightMenu>

        <MenuNav show={openStatus}>
          <CloseWrapper>
            <CustomClose onClick={()=>setOpenStatus(false)}/>
          
          </CloseWrapper>
          {cars && cars.map((car, index)=>(
         <li> <a key={index} href="#">{car}</a></li>
        ))}
        <li><a href="#">Solar Roof</a></li>
        <li><a href="#">Solar Panels</a></li>
        <li><a href="#">Existing Inventory</a></li>
        <li><a href="#">Used Inventory</a></li>
        <li><a href="#">Trade-In</a></li>
        <li><a href="#">Demo Drive</a></li>
        <li><a href="#">Insurance</a></li>
        <li><a href="#">Powerwall</a></li>
        <li><a href="#">Commercial Energy</a></li>
        <li><a href="#">Utilities</a></li>
        <li><a href="#">Charging</a></li>
        <li><a href="#">Find Us</a></li>
        <li><a href="#">Support</a></li>
        <li><a href="#">Investors Relations</a></li>
        <li><a href="#">Shop</a></li>
        <li><a href="#">Account</a></li>
        <li ><a className='more' href="#">More <BsChevronRight/></a></li>
        <li ><a className='lang' href="#"><TfiWorld/> <sup>United States</sup> 
        <p><sup>English</sup></p></a></li>
        </MenuNav>
   


      </Container>
    </div>
  )
}

const Container = styled.div`
min-height: 60px;
position: fixed;
display: flex;
align-items: center;
justify-content: space-between;
padding: 0 20px;
top: 0;
right: 0;
left: 0;
z-index:10;

`
const Menu = styled.div`
display: flex;
align-items: center;
justify-content: center;
flex: 1;

a{
  font-size: 15px;
  font-weight: 500;
  text-transform: uppercase;
  padding: 0 10px;
  flex-wrap: nowrap;
}

@media(max-width: 1200px) {
  display: none;
}
`
const RightMenu = styled.div`
display: flex;
Padding: 0 5px;
a{
  font-weight: 500;
  text-transform: uppercase;
  padding: 0 10px;
}

`


const MenuNav = styled.div`
  position: fixed;
  top:0;
  right:0;
  bottom:0;
  background:white;
  width:300px;
  list-style:none;
  padding: 18px;
  display:flex;
  flex-direction: column;
  text-align: start;
  overflow: auto;
  scroll-behavior: smooth;
  letter-spacing:1px;
  transform: ${props => props.show ? 'translateX(0)': 'translateX(100%)'};
  transition: transform 0.2s;

  li{
    
    margin:13px 15px ;
    font-size: 15px;
  }
  .more{
    display:flex;
    justify-content: space-between;
  }
  .lang{
    font-weight:600;
  }
  .lang p{
    margin-left: 25px;
    font-weight: 300;
  }
  .lang p:hover{
    text-decoration: underline;
  }
`

const CustomClose= styled(CloseIcon)`
position: fixed;
cursor:pointer;
`

const CloseWrapper= styled.div`
display:flex;
justify-content: flex-end;
`
const CustomMenu= styled(MenuIcon)`

`
