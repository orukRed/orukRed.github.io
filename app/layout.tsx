"use client"
//use clientならaccordionが動く

import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })
//fontawesomeが巨大化するのを防ぐ設定
import { config } from "@fortawesome/fontawesome-svg-core";
import "@fortawesome/fontawesome-svg-core/styles.css";
config.autoAddCss = false;

import { Providers } from "./providers";
import { faBars, faCode, faUser } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMessage } from '@fortawesome/free-regular-svg-icons'
import Image from 'next/image';
import { Avatar, Listbox, ListboxItem, ScrollShadow, Spacer } from '@nextui-org/react'
import Link from 'next/link'
import { useCallback, useState } from 'react'


//use clientのときはMetadataの定義をコメント必要
// export const metadata: Metadata = {
//   title: 'Create Next App',
//   description: 'Generated by create next app',
// }

const iconSize = 35;

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const [isProfileMouseHover, setProfileMouseHover] = useState(false);
  const [isContactMouseHover, setContactMouseHover] = useState(false);
  const [isProgramsMouseHover, setProgramsMouseHover] = useState(false);
  const [isOpen, setIsOpen] = useState(false);


  const profileMotionIcon: () => JSX.Element = useCallback(() => {
    if (isProfileMouseHover) {
      return <FontAwesomeIcon icon={faUser} className='mr-2' bounce />
    }
    return <FontAwesomeIcon icon={faUser} className='mr-2' />
  }, [isProfileMouseHover]);

  const contactMotionIcon: () => JSX.Element = useCallback(() => {
    if (isContactMouseHover) {
      return <FontAwesomeIcon icon={faMessage} className='mr-2' bounce />
    }
    return <FontAwesomeIcon icon={faMessage} className='mr-2' />
  }, [isContactMouseHover]);

  const programsMotionIcon: () => JSX.Element = useCallback(() => {
    if (isProgramsMouseHover) {
      return < FontAwesomeIcon icon={faCode} className='mr-2' bounce />
    }
    return <FontAwesomeIcon icon={faCode} className='mr-2' />
  }, [isProgramsMouseHover]);


  return (
    // ここの階層を崩すとホットリロードがただしく動作しなくなる。
    <html lang="en" className='dark'>
      <head>
      </head>
      <body className={inter.className}>
        <Providers>

          <header className=''>
          </header>

          <div className='flex flex-row bg-gray-700 bg-gradient-to-r from-slate-900 h-full min-h-screen'>

            {/* レスポンシブ対応のハンバーガーメニュー */}
            {/* <div className="fixed p-5 top-0 flex md:hidden z-50" style={{ right: 'calc(100vw - 100%)' }}> */}
            <div className="sticky top-0 right-0 p-5 md:hidden z-50">
              <button onClick={() => setIsOpen(!isOpen)} className={``}>
                <FontAwesomeIcon icon={faBars} size="2xl" />
              </button>
            </div>

            {/* sidebar */}
            <div className={`flex fixed w-64 h-screen md:block ${isOpen ? ' block z-40 h-screen w-screen bg-gray-700 bg-gradient-to-r from-slate-900' : 'hidden'}`}>
              <ScrollShadow hideScrollBar >
                <nav className='ml-10 md:ml-0'>
                  <div className='flow p-5'>
                    <p className='font-bold text-2xl'>
                      OrukRed
                    </p>
                    <img
                      className="border-3 border-slate-600 w-32 h-32 rounded-full object-cover"
                      src="/orukred_icon.png"
                      alt="Avatar"
                      sizes='100vw'
                      width={1}
                      height={1}
                    />
                    <p>
                      プログラム書いてます。<br />
                      バグ報告などはContactからお願いします
                    </p>
                    <Spacer y={3} />
                    <div className="flex space-x-4">

                      <Link className='rounded hover:bg-gray-600' href="https://github.com/orukRed">
                        <Image src={'/icon/github/github-mark-white.svg'} aria-label="Github" alt={'GitHub'} width={iconSize} height={iconSize} />
                      </Link>
                      <Link className='rounded hover:bg-gray-600' href="https://twitter.com/orukred">
                        <Image src={'/icon/x/logo.svg'} aria-label="X" alt={'X'} width={iconSize} height={iconSize} />
                      </Link>
                      <Link className='rounded hover:bg-gray-600' href="https://qiita.com/OrukRed">
                        <Image src={'/icon/qiita/qiita.png'} aria-label="Qiita" alt={'Qiita'} width={iconSize} height={iconSize} />
                      </Link>
                      <Link className='rounded hover:bg-gray-600' href="https://zenn.dev/orukred">
                        <Image src={'/icon/zenn/logo-only.svg'} aria-label="Zenn" alt={'Zenn'} width={iconSize} height={iconSize} />
                      </Link>
                    </div>
                    <Spacer y={5} />
                    <Listbox className='w-48 text-2xl space-y-1' variant='flat' >
                      <ListboxItem
                        key="a1"
                        textValue="Profile"
                        onMouseEnter={() => setProfileMouseHover(true)}
                        onMouseLeave={() => setProfileMouseHover(false)}
                        onClick={() => setIsOpen(false)}
                      >
                        <Link className='text-2xl flex items-center' href="/profile">
                          {profileMotionIcon()}
                          Profile
                        </Link>
                      </ListboxItem>
                      {/* <ListboxItem key="a2" textValue="Profile">
                        <Link className='text-2xl flex items-center' href="/information">
                          <FontAwesomeIcon icon={faCircleInfo} className='mr-2' />
                          Information
                        </Link>
                      </ListboxItem > */}
                      <ListboxItem
                        key="a3"
                        textValue="Profile"
                        onMouseEnter={() => setContactMouseHover(true)}
                        onMouseLeave={() => setContactMouseHover(false)}
                      >
                        <Link className='text-2xl flex items-center' href="https://forms.gle/yMCKuhX1Haa4kfrc8">
                          {contactMotionIcon()}
                          Contact
                        </Link>
                      </ListboxItem>
                      <ListboxItem
                        key="a4"
                        textValue="Profile"
                        onMouseEnter={() => setProgramsMouseHover(true)}
                        onMouseLeave={() => setProgramsMouseHover(false)}
                        onClick={() => setIsOpen(false)}
                      >
                        <Link className='text-2xl flex items-center' href="/">
                          {programsMotionIcon()}
                          Programs
                        </Link>
                      </ListboxItem>
                      {/* <ListboxItem key="a5" textValue="Profile">
                        <Link className='text-2xl flex items-center' href="/works">
                          <FontAwesomeIcon icon={faCreativeCommonsNd} className='mr-2' />
                          works
                        </Link>
                      </ListboxItem>
                      <ListboxItem key="a6" textValue="Profile">
                        <Link className='text-2xl flex items-center' href="/Link">
                          <FontAwesomeIcon icon={faLink} className='mr-2' />
                          Link
                        </Link>
                      </ListboxItem> */}
                    </Listbox>
                  </div>
                </nav>
              </ScrollShadow>
            </div>

            {/* メインコンテンツ */}
            <main className={`flex-grow p-4 xs:ml-0 md:ml-72 ${isOpen ? 'hidden' : ''}`}>
              {children}
            </main>
            <footer className=''>
            </footer>
          </div>
        </Providers>
      </body>
    </html >
  )
}

