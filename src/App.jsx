import { useEffect, useRef, useState } from 'react'
import logo from '/logomark-mason.svg'
import dash from '/dash.svg'
import quote from '/quote.svg'
import listIcon from '/listIcon.svg'
import './App.css'
import { NavLink, Link, Routes, BrowserRouter, Route, useLocation, } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faInstagram, faTwitter, faFacebook, faLinkedin } from '@fortawesome/free-brands-svg-icons'
import AOS from 'aos'
import 'aos/dist/aos.css'
import Login from './login'
function App() {
  const [show, setShow] = useState(false)

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
  })
  function handleScroll() {
    if (window.scrollY > 70) {
    
      setShow(true);
    } else (setShow(false))
  }

  return (
    <>
      <BrowserRouter>
      <ScrolltoTop />
        <Header />
      
        {show ? <StickyHeader /> : null}
        <Routes>
          <Route path='/' element={<> <Poster /> <JamaCard /> <Officers /> </>}>

          </Route>
          <Route path='contact' element={<>  <Contact /> <Footer /> </>}>
          </Route>

          <Route path='login' element={<>  <Login /> <Footer /> </>}>
          </Route>


        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App;


function Poster() {
  return (
    <div data-aos='fade-up' className='poster'>
      <div className='contentBlock'>
        <div className='posterText'>
          <p>ग्रामपंचायत फणसवाडी</p>
        </div>
        <div className='dashRoot'>
          <img
            src={dash}
            style={{ width: '40px', height: '40px' }}
          />
        </div>
        <div className='posterText'>
          <p style={{ fontSize: '22px' }}>भुदरगड, कोल्हापूर.</p>
        </div>
      </div>
    </div>
  )
}

function Header() {
  return (
    <>
      <div style={{ display: 'flex', flexDirection: 'column' }}>
        <div className='header'>

          <div className='headerChild'>
            <NavLink
              to={'/'}>

              <div className='logo'>

                <img
                  src={logo}
                />
              </div>
            </NavLink>
          </div>
          <div className='headerChild2'>
<div className='headerNavLink'>
              <NavLink to={'/'} 
               className={({ isActive, isPending }) => isActive ? 'current' : ''}
              >
                <div>
                  <p>मुखपृष्ठ</p>
                </div>
              </NavLink>
    
</div>
<div className='headerNavLink'>
              <NavLink
                to={'contact'}
                className={({ isActive, isPending }) => isActive ? 'current' : ''}
              >
                <div>
                  <p>संपर्क</p>
                </div>
              </NavLink>
         </div>
         <div className='headerNavLink'>
              <NavLink
                to={'login'}
                className={({ isActive, isPending }) => isActive ? 'current' : ''}
              >
                <div>
                  <p>लॉगीन</p>
                </div>
              </NavLink>
         </div>
          </div>
        </div>

      </div>
    </>
  )
}

function StickyHeader() {

  return (
    <div
      className='headerSticky'
    >




      <div style={{ width: 20, height: 20 }}>
        <div className='flexR'>
          <NavLink to={'/'}>
            <img
              src={logo}
              height={20}
            />
          </NavLink>


        </div>
      </div>

      <div className='flexR nakedLink'>
        <div className='padHori20 '>
          <Link to={'/'}><p>मुखपृष्ठ</p></Link>
        </div>

        <div className='padHori20'>
          <Link to={'contact'}><p>संपर्क</p></Link>
        </div>
      </div>

    </div>
  )
}

function JamaCard() {

  const links = [];
  return (
    <div data-aos='fade-up'  className='card'>
      <div className='nut'>
        <h3>❍</h3>
        <h3>❍</h3>
      </div>
      <div className='contentBlock2'>
        <img
          src={quote}
          width={'40px'}
        />
        <p>ग्रामपंचायत फणसवाडी- जमाखर्च</p>
        <h5>२०१९-२० पासूनचे जमाखर्च येथे उपलब्ध करून देण्यात आले आहेत.</h5>
      </div>
      <div className='contentBlock3'>
        <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'center' }}>
          <div style={{ padding: '10px' }}>
            <img
              src={listIcon}
              width={'10px'}
            />
          </div>
          <h3>डाउनलोड</h3>
        </div>
        <div className='list'>

          <p><a href='#'>जमाखर्च २०१९-२०</a></p>
          <p><a href='#'>जमाखर्च २०२०-२०२१</a></p>
          <p><a href='#'>जमाखर्च २०२१-२०२२</a></p>
          <p><a href='#'>जमाखर्च २०२२-२३</a></p>
          <p><a href='#'>जमाखर्च २०२३-२४</a></p>
        </div>
      </div>
    </div>
  )
}

function Contact() {
  return (
    <div className='contact'>


    </div>
  )
}

function Officers() {

  useEffect(()=>{
    AOS.init();
  }, [])

  return (
    <>
      <div data-aos='fade-up' className='officers'>

        <div className='offText' >
          <div>
            <h4>पदाधिकारी</h4>

          </div>
          <div className='offBorder'>
          </div>
        </div>

        <div className='offPhotoContainer' >
          <div className='offPhotos'>
            <div style={{ flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
              <div className='photoHeight100' style={{ display: 'flex', justifyContent: 'center' }}>
                <img
                  src='/1704386236678.jpg'

                  height={'95%'}
                />
              </div>
              <div style={{ display: 'flex', justifyContent: 'center' }}>
                <h4>सरपंच श्री. बाळासाहेब धनाजीराव जाधव </h4>
              </div>
            </div>
          </div>
          <div className='offPhotos'>
            <div style={{ flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
              <div style={{ display: 'flex', height: '80%', justifyContent: 'center' }}>
                <img
                  src='/1704386236596.jpg'

                  height={'100%'}
                />
              </div>
              <div className='photoHeight80' style={{ display: 'flex', justifyContent: 'center', paddingTop: '15px' }}>
                <h4>उपसरपंच सौ.अश्विनी मुरलीधर भाट</h4>
              </div>
            </div>
          </div>
        </div>



      </div>
      <Footer />
    </>

  )


}

function ScrolltoTop(){
  const {location} = useLocation();

  useEffect(()=>{
    window.scrollTo(0,0);
    console.log('hi')
  }, [location])

  return null;
}

function Footer() {

  useEffect(()=>{
    AOS.init();
  }, [])

  return (
  <div data-aos='fade-up' className='footer'>
    <div className='logoName'>
      <div>
        <img
          src='/logomark-mason.svg'
          height={30} />
      </div>
      <div style={{ marginBottom: '50px' }}>
        <h2>ग्रामपंचायत फणसवाडी</h2>
      </div>


    </div>

    <div className='footerMid'>
      <div className='midChild'>

        <div className='midChildren flex1'>
          <h4>✉ contact@gpphanaswadi.in</h4>
        </div>
        <div className='midChildren flex2 fontDecoration'>
          <div style={{ borderLeft: '1px solid #5c7a99', borderRight: '1px solid #5c7a99' }}>
            <h5>AP- फणसवाडी, ता - भुदरगड , कोल्हापूर - ४१६२०९.</h5>
          </div>
        </div>
        <div className='midChildren flex1'>
          <div className='faIcons'>
            <div className='faChild'>
              <FontAwesomeIcon icon={faInstagram} />
            </div>
            <div className='faChild'>
              <FontAwesomeIcon icon={faTwitter} />
            </div>
            <div className='faChild'>
              <FontAwesomeIcon icon={faLinkedin} />
            </div>
            <div className='faChild'>
              <FontAwesomeIcon icon={faFacebook} />
            </div>
          </div>
        </div>
      </div>


    </div>

    <div style={{ paddingTop: '20px', }}>
      <h5 style={{ letterSpacing: '2px', fontSize: '18px' }}>
        © ग्रा.पं. फणसवाडी २०२३-२४</h5>
    </div>


  </div>)
}