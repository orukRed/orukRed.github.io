import { faMicrochip } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Card, CardBody, CardHeader, Spacer, image } from '@nextui-org/react'
import Image from 'next/image'

export default function Page() {
  interface AppData {
    name: string,
    descriptions: string[],//TODO:改行方法考えておく
    technologies: string[],//使用言語やフレームワーク
    image: string,
    links: string[],//app:そのアプリへのリンク github:githubリポジトリへのリンク
  }

  const applications: AppData[] = [
    {
      name: "TyranoSrript_syntax",
      descriptions: ["vscodeで動くティラノスクリプト用の拡張機能です。",
        "構文ハイライト、タグ補完、アウトライン、診断機能、タグのツールチップなど。",
        "アップデート継続中です。",
        "詳しくはGitHubのREADMEとCHANGELOGをご覧ください。"],
      technologies: ["TypeScript", "vscodeAPI"],//使用言語やフレームワーク
      image: "/program/tyranosyntax.png",
      links: ["app", "github"],//app:そのアプリへのリンク github:githubリポジトリへのリンク
    },
  ];

  /**
   * 改行を入れて返却
   * @param descriptions 
   * @returns 
   */
  const formatDescription = (descriptions: string[]) => {
    return descriptions.map((value, index) => {
      return (
        <p>
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

  const showApplications = applications.map((application) => {
    return (
      <>
        <Card key={application.name} className="py-4">
          <CardHeader className="pb-0 pt-2 px-4 flex-col items-start">
            <h3 className="text-default-900 text-large font-bold underline underline-offset-4">
              {/* ここにif文で、linksにappがあるならカードクリックでアプリのページへ、githubがあるならgithubアイコンとリンク追加 */}
              {/* マウスオンするたびにアニメーションさせて、リンク先でDLページがあることを示したい */}
              {application.name}
            </h3>
            <p className="text-default-400 ">
              <FontAwesomeIcon icon={faMicrochip} className='mr-2' />
              {formatTechnology(application.technologies)}
            </p>
            <h5 className="text-default-900">{formatDescription(application.descriptions)}</h5>
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
                width: '80%',
                height: 'auto',
              }}
            />
          </CardBody>
        </Card>
        <Spacer y={4} />
      </>

    )
  });


  return (
    <>
      {showApplications}
    </>
  )
}