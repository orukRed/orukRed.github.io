import Image from 'next/image'
type EachPostProps = {
  title: string;
  url: string;
};

function EachPostProp(props: any) {
  return (
    <div style={{ color: 'red' }}>
      {props.children}
    </div>
  );
}

function EachPost({ title, url }: EachPostProps) {
  return (
    <article>
      <a href={url}>{title}</a>
    </article>
  );
}
export default function Home() {
  return (
    <>
      <div className=''>
        hello world
      </div>
      <EachPost title={"google.com"} url={"http://https://rayartschool.com/:3000/"} />
      <EachPostProp>
        {/* 
          helloを子要素としてEachPostPropに渡している。
          渡したものはprops.childrenで取得できる。
        */}
        <div>hello</div>
      </EachPostProp>
    </>
  )
}