import { faMicrochip } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Button, Card, CardBody, CardHeader, Chip, Spacer, image } from '@nextui-org/react'
import Image from 'next/image'
import Link from 'next/link';

interface AppData {
  name: string,
  descriptions: string[],
  technologies: string[],//使用言語やフレームワーク
  badges: Badge,
  image: string,
  appUrl?: string,
  githubUrl?: string
}

interface Badge {
  Updating?: boolean,//アップデート継続中  
  Released?: boolean,//リリース済み
  Suspended?: boolean,//公開停止中
}

const applications: AppData[] = [
  {
    name: "TyranoSrript_syntax",
    descriptions: [
      "vscodeで動くティラノスクリプト用の拡張機能。",
      "構文ハイライト、タグ補完、アウトライン、診断機能、タグのツールチップなど。",
      "アップデート継続中。",
      "詳しくはGitHubのREADMEとCHANGELOGをご覧ください。"
    ],
    technologies: ["TypeScript", "vscodeAPI"],
    badges: {
      Updating: true,
      Released: true,
    },
    image: "/program/_tyranosyntax.png",
    appUrl: "https://marketplace.visualstudio.com/items?itemName=orukred-tyranosyntax.tyranosyntax",
    githubUrl: "https://github.com/orukRed/tyranosyntax"
  }, {
    name: "ポートフィリオ",
    descriptions: [
      "今見てるこれ。",
      "何か作ったものが出来たらここに追加していく予定。",
      "自己紹介とかニュースとかあれば書こうかなと思ったけどそんな書くことないので寂しいことに……"
    ],
    technologies: ["Next.js", "TailwindCSS", "NextUI"],
    badges: { Released: true },
    image: "/program/portfolio.png",
    githubUrl: "https://github.com/orukRed/orukRed.github.io"
  }, {
    name: "ここはお前のチラシ裏",
    descriptions: [
      "「うるせーチラシの裏にでも書いてろ」と言われそうなレベルのことを書くためのアプリ。",
      "会員登録不要でいつでもかけるのが売り。",
      "書き込むときにIPアドレスをDBに保存していなかったことに気が付き公開停止中。",
      "2020年あたりに何かWebアプリ作ろうと思っての習作。Nuxt.jsを選んだことに特に意味はない。機会があれば直すかリメイクして再公開したい",
    ],
    technologies: ["Nuxt.js", "Firebase"],
    badges: { Suspended: true },
    image: "/program/_tiraura.png",
    githubUrl: "https://github.com/orukRed/YourDiary"
  },
];

/**
 * 改行を入れて返却
 * @param descriptions 
 * @returns 
 */
const formatDescription = (descriptions: string[]) => {
  return descriptions.map((value, key) => {
    return (
      <p key={key}>
        {value}
      </p>
    )
  });
}

/**
 * technologyの要素間に「 + 」を入れた値を返却する
 * @param technologies 
 * @returns 
 */
function FormatTechnology({ technologies }: { technologies: string[] }) {
  return (
    <>
      {technologies.join(" + ")}
    </>
  );
}

function githubIcon(url: string | undefined) {
  if (!url || url === undefined) { return (<></>) }
  return (
    <Link className='' href={url}>
      <Image className='rounded hover:bg-gray-600' style={{ objectFit: 'contain' }} src={'/icon/github/github-mark-white.svg'} aria-label="Github" alt={'GitHub'} sizes='100vw' width={30} height={30} />
    </Link>
  )
}

/**
 * アプリURLのリンクボタン
 * @param url 
 * @returns 
 */
function appUrlButton(url: string | undefined) {
  if (!url || url === undefined) { return (<></>) }
  return (
    <>
      <div className='inline-flex flex-row-reverse'>
        <Link href={url}>
          <Button
            radius='full'
            color='primary'
          >
            App page
          </Button>
        </Link>
      </div>
    </>
  )
}

function badges(badge: Badge | undefined) {
  if (!badge) { return (<></>) }
  return (
    <>
      <div className='flex gap-2'>
        {badge.Released ? <Chip size='sm' className='text-gray-100 bg-blue-600 '>Released</Chip> : <></>}
        {badge.Updating ? <Chip size='sm' className='text-gray-100 bg-emerald-600'>Updating</Chip> : <></>}
        {badge.Suspended ? <Chip size='sm' className='text-gray-100 bg-gray-600'>Suspended</Chip> : <></>}
      </div>
    </>
  )

}

function ApplicationCards({ applications }: { applications: AppData[] }) {
  return (
    <>
      {applications.map((application, key) => {
        return (
          <div key={key}>
            <Card className="flex py-4 max-w-screen max-w-4xl" >
              <CardHeader className="pb-0 pt-2 px-4 flex-col items-start">
                {badges(application.badges)}
                <Spacer y={2} />
                <div className={`flex text-default-900 text-large font-bold underline-offset-4 ${application.appUrl ? '' : ''}`}>
                  {application.name}
                  <Spacer x={2} />
                  {githubIcon(application.githubUrl)}
                </div>
                <p className="text-default-400 ">
                  <FontAwesomeIcon icon={faMicrochip} className='mr-2' />
                  <FormatTechnology technologies={application.technologies} />
                </p>
                <div className="text-default-900">{formatDescription(application.descriptions)}</div>
              </CardHeader>
              <CardBody className="overflow-visible py-2">
                <img
                  className="rounded-xl"
                  src={`./${application.image}`}
                  sizes='100vw'
                  width={1}
                  height={1}
                  style={{
                    width: '90%',
                    height: 'auto',
                  }}
                />
                {appUrlButton(application.appUrl)}
              </CardBody>
            </Card>
            <Spacer y={10} />
          </div>
        )
      })}
    </>
  )
}

export default function Page() {
  return (
    <>
      <ApplicationCards applications={applications} />
    </>
  )
}