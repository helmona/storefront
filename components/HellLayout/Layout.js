import cn from 'classnames'
import React from 'react'
import dynamic from 'next/dynamic'
import { useRouter } from 'next/router'
import HellNav from '@components/HellNav'
import s from './Layout.module.css'

/* 
import { CommerceProvider } from '@framework'
import { useAcceptCookies } from '@lib/hooks/useAcceptCookies'
import { Navbar, Footer, Button, LoadingDots } from '@components'
 */

const Loading = () => (
  <div className="w-80 h-80 flex items-center text-center justify-center p-3">
    Loading...
  {/* <LoadingDots /> */}
  </div>
)

const dynamicProps = {
  loading: Loading,
}

/* const FeatureBar = dynamic(
  () => import('@components/FeatureBar'),
  dynamicProps
) */

const Layout = ({
  children,
  pageProps: { categories = [], ...pageProps },
}) => {
  /* const { acceptedCookies, onAcceptCookies } = useAcceptCookies() */
  const { locale = 'en-US' } = useRouter()
/*   
  const navBarlinks = categories.slice(0, 2).map((c) => ({
    label: c.name,
    href: `/search/${c.slug}`,
  }));
   */
  /* <CommerceProvider locale={locale}>
      <div className={cn(s.root)}>
        <Navbar links={navBarlinks} />
        <main className="fit">{children}</main>
        <Footer pages={pageProps.pages} />
        <FeatureBar
          title="This site uses cookies to improve your experience. By clicking, you agree to our Privacy Policy."
          hide={acceptedCookies}
          action={
            <Button className="mx-5" onClick={() => onAcceptCookies()}>
              Accept cookies
            </Button>
          }
        />
      </div>
    </CommerceProvider> */
  return (
    <>
      <div className={cn(s.root)}>
        <HellNav />
        <div className="relative">
          <main className="fit">{children}</main>
        </div>
      </div>
    </>
  )
}

export default Layout
