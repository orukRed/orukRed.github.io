import { faMicrochip } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Button, Card, CardBody, CardHeader, Spacer, image } from '@nextui-org/react'
import Image from 'next/image'
import Link from 'next/link';

export default function Page() {
  interface AppData {
    name: string,
    descriptions: string[],
    technologies: string[],//使用言語やフレームワーク
    image: string,
    appUrl?: string,
    githubUrl?: string
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
      image: "/program/tyranosyntax.png",
      appUrl: "https://marketplace.visualstudio.com/items?itemName=orukred-tyranosyntax.tyranosyntax",
      githubUrl: "https://github.com/orukRed/tyranosyntax"
    }, {
      name: "ここはお前のチラシ裏",
      descriptions: [
        "「うるせーチラシの裏にでも書いてろ」と言われそうなレベルのことを書くためのアプリ。",
        "会員登録不要でいつでもかけるのが売り。",
        "書き込むときにIPアドレスをDBに保存していなかったことに気が付き公開停止中。",
        "2020年あたりに何かWebアプリ作ろうと思っての習作。vueを選んだことに特に意味はない。機会があれば直すかリメイクして再公開したい",
      ],
      technologies: ["Vue", "Nuxt.js", "Firebase"],
      image: "/program/tiraura.png",
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
  const formatTechnology = (technologies: string[]) => {
    return technologies.join(" + ");
  }

  function githubIcon(url: string | undefined) {
    if (!url) { return (<></>) }
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
    if (!url) { return (<></>) }
    return (
      <>
        <Link className='flex justify-end mt-3' href={url}>
          <Button
            style={{ objectFit: 'contain' }}
            radius='full'
            color='primary'
          >
            App page
          </Button>
        </Link>
      </>
    )

  }

  const showApplicationCards = applications.map((application) => {
    return (
      <>
        <Card className="py-4">
          <CardHeader className="pb-0 pt-2 px-4 flex-col items-start">
            <div className={`flex text-default-900 text-large font-bold underline-offset-4 ${application.appUrl ? 'underline ' : 'line-through'}`}>
              {application.name}
              <Spacer x={5} />
              {githubIcon(application.githubUrl)}
            </div>
            <p className="text-default-400 ">
              <FontAwesomeIcon icon={faMicrochip} className='mr-2' />
              {formatTechnology(application.technologies)}
            </p>
            <div className="text-default-900">{formatDescription(application.descriptions)}</div>
          </CardHeader>
          <CardBody className="overflow-visible py-2">
            <Image
              alt="screenshot"
              aria-label="screenshot"
              className="rounded-xl"
              src={application.image}
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
      </>
    )
  });

  return (
    <>
      {showApplicationCards}
    </>
  )
}