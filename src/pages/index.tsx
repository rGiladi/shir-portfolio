import React, { useLayoutEffect, useEffect, useState, useRef } from 'react'
import './home.scss'
import { StaticImage } from 'gatsby-plugin-image'
import Lottie from 'react-lottie-player'
import Layout from 'components/Layout/Layout'
import Header from 'components/Header/Header'
import Button from 'components/Button/Button'
import Footer from 'components/Footer/Footer'
import ShlaggerGIF from 'images/shlagger.gif'
import reflectPhones from 'images/reflect-mockup-phones.png'
import FoodIcons from 'assets/svgs/food-icons.svg'
import GuitarIcon from 'assets/svgs/guitar.svg'
import SaxIcon from 'assets/svgs/sax.svg'
import ChevronUpIcon from 'assets/svgs/chevron-up.svg'
import WSCLogoIcon from 'assets/svgs/wsc--logo.svg'

const IndexPage = () => {
  const [isMobileView, setIsMobileView] = useState(false)

  useEffect(() => {
    const onResize = () => {
      setIsMobileView(window.innerWidth < 960)
    }

    window.addEventListener('resize', onResize)

    onResize()

    return () => {
      window.removeEventListener('resize', onResize)
    }
  }, [])

  return (
    <div id='home'>
      <Header />
      <main>
        <div id='hero' className='home--hero'>
          <Layout>
            <div className='home--hero--title-container'>
              <h1 className='home--hero--title'>
                <span>Shir</span>
                <span>Voldman</span>
              </h1>
              <p className='home--hero--description'>
                A visual designer specializes in UI/UX
              </p>
            </div>
            <HeroVector />
            <HeroVectorMobile />
          </Layout>
        </div>
        <div id='projects'>
          <Layout>
            <section className='home--project home--project--wsc'>
              <div className='home--project--content-container'>
                <h2 className='primary-title'>WSC</h2>
                <p className='primary-text'>
                  A website for the municipality of Ramat Gan, promoting their
                  sustainability project for puriyfying runoff water across the
                  city.
                </p>
                <Button
                  className='home--project--button'
                  href={
                    isMobileView
                      ? 'https://www.figma.com/proto/3k7fVlUEpWXsApq6wJmSvp/WSC-mobile?page-id=0%3A1&node-id=17%3A215&viewport=1538%2C1286%2C1&scaling=min-zoom&starting-point-node-id=17%3A215'
                      : 'https://www.figma.com/proto/SGaHnjLDY0YqAdHXYa4lRW/wsc?page-id=0%3A1&node-id=603%3A3687&viewport=-1659%2C129%2C0.03&scaling=scale-down&starting-point-node-id=603%3A3687&show-proto-sidebar=1'
                  }
                >
                  Explore
                </Button>
              </div>
              <div className='home--project--asset-container'>
                <StaticImage
                  src='../images/wsc-project.png'
                  alt='wsc project asset'
                  placeholder='tracedSVG'
                  width={666}
                  height={677}
                  quality={100}
                  imgStyle={{ objectFit: 'contain' }}
                />
                <Lottie
                  className='wsc--butterfly'
                  path='https://assets6.lottiefiles.com/packages/lf20_omronjdd.json'
                  play
                />
              </div>
            </section>
          </Layout>
          <Layout>
            <section className='home--project home--project--reflect'>
              <div className='home--project--content-container'>
                <h2 className='primary-title'>Reflect</h2>
                <div className='primary-text'>
                  <p>
                    An app that helps you answer interesting questions on daily
                    actions you perform such as - how many times you looked in
                    the mirror today? did you plan to look most of the times?
                  </p>
                  <p style={{ marginBlockStart: '1rem' }}>
                    A tribute to{' '}
                    <a
                      className='text-link'
                      href='https://www.youtube.com/watch?v=iqaVe1MCTlA'
                      target='__blank'
                    >
                      Dear Data
                    </a>
                  </p>
                </div>
                <Button
                  className='home--project--button'
                  href={
                    isMobileView
                      ? 'https://www.figma.com/proto/4kKVXvJNP1PP95QBAMoUWY/reflect-mobile?page-id=0%3A1&node-id=5%3A1303&viewport=408%2C709%2C0.12&scaling=min-zoom&starting-point-node-id=3%3A77&show-proto-sidebar=1'
                      : 'https://www.figma.com/proto/rpCUThimqewIKmUfqNTmWV/Reflect?page-id=0%3A1&node-id=499%3A38469&viewport=-1750%2C680%2C0.07&scaling=min-zoom&starting-point-node-id=398%3A78309&show-proto-sidebar=1'
                  }
                >
                  Explore
                </Button>
              </div>
              <div className='home--project--asset-container'>
                <StaticImage
                  src='../images/reflect-screens.png'
                  alt='reflect project asset - screens'
                  layout='fullWidth'
                  placeholder='blurred'
                  quality={100}
                />
                <img
                  className='home--project--reflect-phones'
                  src={reflectPhones}
                  alt='reflect project asset - mock phones'
                  loading='lazy'
                />
              </div>
            </section>
          </Layout>
          <Layout>
            <section className='home--project home--project--slowdown'>
              <div className='home--project--content-container'>
                <h2 className='primary-title'>Slowdown</h2>
                <p className='primary-text'>
                  A website with one goal in mind - to lower everyone's stress
                  level. It includes articles about mind & body health.
                </p>
                <Button
                  className='home--project--button'
                  href={
                    isMobileView
                      ? 'https://www.figma.com/proto/ZAB786ft2hnIEZIerZJWov/Slowdown--mobile?page-id=0%3A1&node-id=12%3A1388&viewport=-28%2C7059%2C0.08&scaling=min-zoom&starting-point-node-id=12%3A1388&show-proto-sidebar=1'
                      : 'https://www.figma.com/proto/5oaZza2StUJ942HAv1czoS/Slowdown-desktop?page-id=0%3A1&node-id=39%3A1872&viewport=440%2C257%2C0.07&scaling=min-zoom&starting-point-node-id=39%3A1872&show-proto-sidebar=1'
                  }
                >
                  Explore
                </Button>
              </div>
              <div className='home--project--asset-container'>
                <StaticImage
                  className='home--project--slowdown--mobile-asset'
                  src='../images/slowdown--mockup-mobile.png'
                  alt='slowdown project asset - mobile phones mockups'
                  layout='fixed'
                  placeholder='tracedSVG'
                  width={400}
                  height={749}
                  quality={100}
                />
                <StaticImage
                  className='home--project--slowdown--desktop-asset'
                  src='../images/slowdown--mockup.png'
                  alt='slowdown project asset - mobile phones mockups'
                  layout='fixed'
                  placeholder='tracedSVG'
                  width={540}
                  height={1247}
                  quality={100}
                />
              </div>
            </section>
          </Layout>
        </div>
        <div id='logos-and-icons'>
          <Layout>
            <h2 className='primary-title'>Logos & Icons</h2>
            <div className='showcase--grid'>
              <div>
                <StaticImage
                  src='../images/levinski--tshirts.jpg'
                  alt='levinski project t-shirts'
                  layout='fullWidth'
                  placeholder='blurred'
                  style={{ width: '100%', height: '100%' }}
                  quality={100}
                />
              </div>
              <div style={{ overflow: 'hidden' }}>
                <Lottie
                  path='https://assets8.lottiefiles.com/packages/lf20_yqgkwlha.json'
                  play
                  style={{ height: '130%' }}
                  rendererSettings={{ preserveAspectRatio: 'xMidYMid slice' }}
                />
              </div>
              <div className='showcase--grid--food-icons'>
                <FoodIcons />
              </div>
              <div className='showcase--grid--changing-icons'>
                <Lottie
                  path='https://assets5.lottiefiles.com/packages/lf20_ssax7uin.json'
                  play
                  style={{ height: '80%' }}
                  rendererSettings={{ preserveAspectRatio: 'xMidYMid slice' }}
                />
              </div>
              <div className='showcase--grid--wsc'>
                <WSCLogoIcon />
              </div>
              <div className='showcase--grid--shlagger'>
                <img src={ShlaggerGIF} alt='shlagger logo' loading='lazy' />
              </div>
              <div className='showcase--grid--guitar-icon'>
                <GuitarIcon />
              </div>
              <div>
                <StaticImage
                  src='../images/mockup-bags.jpg'
                  alt='mockup bags project'
                  layout='fullWidth'
                  placeholder='blurred'
                  style={{ width: '100%', height: '100%' }}
                  quality={100}
                />
              </div>
              <div className='showcase--grid--sax-icon'>
                <SaxIcon />
              </div>
            </div>
          </Layout>
        </div>
      </main>
      <Footer />
      <ScrollUpButton />
    </div>
  )
}

const ScrollUpButton = () => {
  const ref = useRef<HTMLDivElement>(null)

  useLayoutEffect(() => {
    const onScroll = () => {
      const bodyHeight = document.body.scrollHeight

      if (window.scrollY > bodyHeight / 2) {
        ref.current?.classList.remove('hidden')
      } else {
        ref.current?.classList.add('hidden')
      }
    }

    window.addEventListener('scroll', onScroll, { passive: true })
    setTimeout(onScroll, 100)

    return () => {
      window.removeEventListener('scroll', onScroll)
    }
  }, [])

  return (
    <div
      ref={ref}
      id='scroll-up-button'
      className='hidden'
      onClick={() => window.scrollTo({ top: 0, behavior: 'auto' })}
    >
      <ChevronUpIcon />
    </div>
  )
}

const HeroVector = () => {
  return (
    <svg
      className='home--hero--vector'
      width='100%'
      height='95%'
      viewBox='0 0 936 822'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
    >
      <path
        d='M230.23 814C231.279 769.485 232.308 724.656 225.017 680.728C214.876 619.63 185.645 548.659 120.929 529.002C43.728 505.555 -21.4537 581.287 17.7427 652.658C36.8162 687.393 72.9344 707.417 109.677 718.705C333.151 787.364 586.545 651.455 673.886 439.251C727.029 310.137 723.465 145.106 604.585 53.3281C535.57 0.0487938 437.463 -11.243 362.259 34.8781C280.955 84.7373 249.83 189.07 271.553 278.879C294.505 373.779 380.055 443.674 470.793 471.418C636.012 521.941 795.683 482.353 930.508 394.5M230.23 814L242.865 801L255.5 788M230.23 814L206.5 788'
        stroke='url(#paint0_linear_285_220)'
        strokeWidth='10'
        strokeMiterlimit='10'
        strokeLinecap='round'
      />
      <defs>
        <linearGradient
          id='paint0_linear_285_220'
          x1='236.807'
          y1='1037'
          x2='1028.72'
          y2='184.556'
          gradientUnits='userSpaceOnUse'
        >
          <stop stopColor='#9171ED' />
          <stop offset='0.192708' stopColor='#B59DFA' />
          <stop offset='0.601562' stopColor='#7FB2FF' stopOpacity='0.404327' />
          <stop offset='0.885706' stopColor='white' stopOpacity='0' />
        </linearGradient>
      </defs>
    </svg>
  )
}

const HeroVectorMobile = () => {
  return (
    <svg
      className='home--hero--vector-mobile'
      width='100%'
      height='85%'
      viewBox='0 0 455 421'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
    >
      <path
        d='M141.773 200.154L141.16 202.058L141.16 202.058L141.773 200.154ZM61.9627 118.861L60.0133 119.308L60.0133 119.308L61.9627 118.861ZM145.721 2.23208L145.866 4.22684L145.866 4.22683L145.721 2.23208ZM235.897 49.0855L237.621 48.0724L237.606 48.046L237.59 48.0201L235.897 49.0855ZM51.098 373.283L51.3194 371.295L51.3077 371.294L51.098 373.283ZM3.04168 339.189L4.98285 338.708L4.98261 338.707L3.04168 339.189ZM10.2981 307.884L11.7786 309.228L11.7787 309.228L10.2981 307.884ZM48.7492 298.216L48.3354 300.173H48.3355L48.7492 298.216ZM105.991 365.824L107.962 365.484L107.962 365.484L105.991 365.824ZM107.055 420.393C107.825 421.186 109.091 421.204 109.883 420.435L122.796 407.894C123.588 407.125 123.607 405.858 122.837 405.066C122.068 404.274 120.801 404.255 120.009 405.025L108.531 416.172L97.3839 404.694C96.6144 403.902 95.3482 403.883 94.5558 404.653C93.7634 405.422 93.7449 406.688 94.5145 407.481L107.055 420.393ZM451.154 5.99642C426.04 66.2437 381.828 125.03 327.36 163.375C272.915 201.704 208.378 219.521 142.387 198.251L141.16 202.058C208.653 223.812 274.486 205.49 329.663 166.646C384.816 127.818 429.475 68.398 454.846 7.53547L451.154 5.99642ZM142.387 198.251C106.529 186.692 72.9123 157.631 63.912 118.413L60.0133 119.308C69.404 160.227 104.314 190.18 141.16 202.058L142.387 198.251ZM63.912 118.414C50.5466 60.1361 89.5551 8.3123 145.866 4.22684L145.577 0.237325C86.7644 4.50426 46.1122 58.6949 60.0133 119.308L63.912 118.414ZM145.866 4.22683C180.138 1.73714 215.179 19.9253 234.204 50.1509L237.59 48.0201C217.814 16.602 181.39 -2.36437 145.576 0.237338L145.866 4.22683ZM234.173 50.0985C250.42 77.7548 255.25 112.522 251.217 149.039C247.184 185.545 234.305 223.657 215.314 257.85C196.321 292.047 171.265 322.233 142.957 342.951C114.651 363.667 83.2018 374.846 51.3194 371.295L50.8766 375.27C84.0222 378.962 116.452 367.306 145.319 346.179C174.184 325.053 199.597 294.387 218.811 259.792C238.027 225.194 251.095 186.575 255.192 149.479C259.289 112.394 254.433 76.6896 237.621 48.0724L234.173 50.0985ZM51.3077 371.294C31.9037 369.248 10.1561 359.564 4.98285 338.708L1.1005 339.671C6.90183 363.059 30.9717 373.172 50.8884 375.272L51.3077 371.294ZM4.98261 338.707C2.4263 328.424 4.91058 316.79 11.7786 309.228L8.81761 306.539C0.952886 315.198 -1.74029 328.243 1.10075 339.672L4.98261 338.707ZM11.7787 309.228C20.6203 299.492 35.2261 297.401 48.3354 300.173L49.1629 296.26C35.3055 293.33 18.9865 295.341 8.81752 306.539L11.7787 309.228ZM48.3355 300.173C79.4087 306.742 98.4983 334.166 104.02 366.165L107.962 365.484C102.269 332.495 82.3779 303.281 49.1628 296.26L48.3355 300.173ZM104.02 366.165C107.002 383.444 106.75 401.161 106.49 418.971L110.49 419.029C110.749 401.284 111.017 383.192 107.962 365.484L104.02 366.165Z'
        fill='url(#paint0_linear_208_1386)'
      />
      <defs>
        <linearGradient
          id='paint0_linear_208_1386'
          x1='114.594'
          y1='534.088'
          x2='524.341'
          y2='117.177'
          gradientUnits='userSpaceOnUse'
        >
          <stop stopColor='#9171ED' />
          <stop offset='0.192708' stopColor='#B59DFA' />
          <stop offset='0.601562' stopColor='#7FB2FF' stopOpacity='0.404327' />
          <stop offset='0.802083' stopColor='white' stopOpacity='0' />
        </linearGradient>
      </defs>
    </svg>
  )
}

export default IndexPage
