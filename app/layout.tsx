"use client"
//use clientならaccordionが動く

import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })
//fontawesomeが巨大化するのを防ぐ設定
import { config } from "@fortawesome/fontawesome-svg-core";
import "@fortawesome/fontawesome-svg-core/styles.css";
config.autoAddCss = false;

import { Providers } from "./providers";
import { Button } from '@nextui-org/button';
import { Accordion } from '@nextui-org/accordion';
import { AccordionItem } from '@nextui-org/accordion';
import { faCircleInfo, faCode, faLink, faUser } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFaceSmile, faMessage } from '@fortawesome/free-regular-svg-icons'
import { LayoutProps } from '../.next/types/app/layout';
import Image from 'next/image';
import { Divider, Listbox, ListboxItem, ScrollShadow, Spacer, User } from '@nextui-org/react'
import { faCreativeCommonsNd } from '@fortawesome/free-brands-svg-icons'
import { faSquareXTwitter } from '@fortawesome/free-brands-svg-icons/faSquareXTwitter'
import { faSquareGithub } from '@fortawesome/free-brands-svg-icons/faSquareGithub'
import Link from 'next/link'
import { useCallback, useState } from 'react'


//use clientのときはMetadataの定義をコメント必要
// export const metadata: Metadata = {
//   title: 'Create Next App',
//   description: 'Generated by create next app',
// }

const iconSize = 35;
const hoverColor = "text-blue-400";
const clickColor = "text-blue-500";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const [isHovered, setIsHovered] = useState(false);

  const enterIconMotion = useCallback(() => {
    setIsHovered(true);
  }, []);
  const leaveIconMotion = useCallback(() => {
    setIsHovered(false);
  }, []);
  const iconMotion = useCallback((value: boolean) => {
    setIsHovered(value);
  }, []);

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
            {/* sidebar */}
            <div className='flex fixed w-64 h-screen '>
              <ScrollShadow hideScrollBar >
                <nav className=''>
                  <div className='flow p-5'>
                    <p className='font-bold text-2xl'>
                      OrukRed
                    </p>
                    <User
                      name=""
                      avatarProps={{
                        isBordered: true,
                        radius: "full",
                        src: "/orukred_icon.png",
                        className: "w-32 h-32"
                      }}
                    />
                    <p>
                      プログラム書いてます。<br />
                      バグ報告などはContactからお願いします
                    </p>
                    <Spacer y={3} />
                    <div className="flex space-x-4">
                      <Link className='' href="https://github.com/orukRed">
                        <Image src={'/icon/github/github-mark-white.svg'} aria-label="Github" alt={'GitHub'} width={iconSize} height={iconSize} />
                      </Link>
                      <Link href="https://twitter.com/orukred">
                        <Image src={'/icon/x/logo.svg'} aria-label="X" alt={'X'} width={iconSize} height={iconSize} />
                      </Link>
                      <Link href="https://qiita.com/OrukRed">
                        <Image src={'/icon/qiita/qiita.png'} aria-label="Qiita" alt={'Qiita'} width={iconSize} height={iconSize} />
                      </Link>
                      <Link href="https://zenn.dev/orukred">
                        <Image src={'/icon/zenn/logo-only.svg'} aria-label="Zenn" alt={'Zenn'} width={iconSize} height={iconSize} />
                      </Link>
                    </div>
                    <Spacer y={5} />
                    {/* TODO:マウスオンでアニメーションさせたい*/}
                    <Listbox className='w-48 text-2xl space-y-1' variant='flat' >
                      <ListboxItem
                        key="a1"
                        textValue="Profile"
                        onMouseEnter={() => iconMotion(true)}
                        onMouseLeave={() => iconMotion(false)}
                      >
                        <Link className='text-2xl flex items-center' href="/profile">
                          <FontAwesomeIcon icon={faUser} className='mr-2' />
                          Profile
                        </Link>
                      </ListboxItem>
                      <ListboxItem key="a2" textValue="Profile">
                        <Link className='text-2xl flex items-center' href="/information">
                          <FontAwesomeIcon icon={faCircleInfo} className='mr-2' />
                          Information
                        </Link>
                      </ListboxItem >
                      <ListboxItem key="a3" textValue="Profile">
                        <Link className='text-2xl flex items-center' href="https://forms.gle/yMCKuhX1Haa4kfrc8">
                          <FontAwesomeIcon icon={faMessage} className='mr-2' />
                          Contact
                        </Link>
                      </ListboxItem>
                      <ListboxItem key="a4" textValue="Profile">
                        <Link className='text-2xl flex items-center' href="/programs">
                          <FontAwesomeIcon icon={faCode} className='mr-2' />
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
            <main className='flex-grow p-4 ml-72'>
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

