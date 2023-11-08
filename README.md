# orukred-page

## todo

- htmlファイル複数作ったりしてとっっっっっっっても良くない書き方してるからそのうちvueとかで書き直そうね……
- ページがスクロールするとレイアウト崩れる(サイドバーが固定されない）から直そうね
- レスポンシブデザインにしようね


## memo

ローカルでnextjsを動かすときは`npx create-next-app@latest`で構築後、`npm run dev`で動かし、docker initしてDockerfileのベース作る
Dockerfileのあるディレクトリで`docker image build -t orukred-page:タグ名 .`を実行 -tでタグ(orukred-page)をつける
`docker image ls`でイメージができていることを確認（もしくはデスクトップアプリで確認）
`docker run -it -p 3000:3000 -v ${PWD}:/usr/src/app -v /usr/src/app/node_modules orukred-page`でイメージからコンテナを起動
docker run: Dockerコンテナを起動するコマンドです。
-p 3000:3000: ホストマシンのポート3000をコンテナのポート3000にマッピングします。これにより、ホストマシンからコンテナのアプリケーションにアクセスできます。
-v ${PWD}:/usr/src/app: 現在の作業ディレクトリ（${PWD}）をコンテナの/usr/src/appディレクトリにマウントします。これにより、ホストマシンのファイル変更がコンテナに直接反映されます。
-v /usr/src/app/node_modules: node_modulesディレクトリをボリュームとしてマウントします。これにより、ホストマシンとコンテナ間でnode_modulesディレクトリの内容が共有されます。
orukred-page: 起動するDockerイメージの名前です。
このコマンドを実行すると、orukred-pageイメージから新しいコンテナが起動し、ホストマシンのポート3000でアクセスできるようになります。また、現在の作業ディレクトリとnode_modulesディレクトリがコンテナと共有されます。

`docker container ls`でコンテナが起動していることを確認


`docker exec -it competent_lehmann bash`でコンテナに入れるけどマウントすればrunで十分なので不要


`docker run -it -p 3000:3000 -v ${PWD}:/usr/src/app -v /usr/src/app/node_modules orukred-page` したときに以下のエラー発生。

```
> orukred-page-next@0.1.0 dev
> next dev

 ⚠ You are using a non-standard "NODE_ENV" value in your environment. This creates inconsistencies in the project and is strongly advised against. Read more: https://nextjs.org/docs/messages/non-standard-node-env
   ▲ Next.js 14.0.1
   - Local:        http://localhost:3000

It looks like you're trying to use TypeScript but do not have the required package(s) installed.
Installing dependencies

If you are not trying to use TypeScript, please remove the tsconfig.json file from your package root (and any TypeScript files in your pages directory).


Installing devDependencies (npm):
- typescript
- @types/react
- @types/node

npm ERR! code EACCES
npm ERR! syscall mkdir
npm ERR! path /usr/src/app/node_modules/@aashutoshrathi/word-wrap
npm ERR! errno -13
npm ERR! Error: EACCES: permission denied, mkdir '/usr/src/app/node_modules/@aashutoshrathi/word-wrap'
npm ERR!  [Error: EACCES: permission denied, mkdir '/usr/src/app/node_modules/@aashutoshrathi/word-wrap'] {
npm ERR!   errno: -13,
npm ERR!   code: 'EACCES',
npm ERR!   syscall: 'mkdir',
npm ERR!   path: '/usr/src/app/node_modules/@aashutoshrathi/word-wrap'
npm ERR! }
npm ERR!
npm ERR! The operation was rejected by your operating system.
npm ERR! It is likely you do not have the permissions to access this file as the current user
npm ERR!
npm ERR! If you believe this might be a permissions issue, please double-check the
npm ERR! permissions of the file and its containing directories, or try running
npm ERR! the command again as root/Administrator.

npm ERR! A complete log of this run can be found in: /home/node/.npm/_logs/2023-11-08T14_07_58_690Z-debug-0.log
Failed to install required TypeScript dependencies, please install them manually to continue:
npm install --save-exact --save-dev typescript @types/react @types/node

{
  command: 'npm install --save-exact --save-dev typescript @types/react @types/node'
}
```

`# ENV NODE_ENV production`をコメントアウトすることで動いた
おそらく構文ミスにより発生したものなので
`# ENV NODE_ENV=production`とすることで動く可能性はあるかも？


## 参考文献

https://nextjs-ja-translation-docs.vercel.app/docs/getting-started
https://architecting.hateblo.jp/entry/2020/08/13/153842
https://www.wakuwakubank.com/posts/270-docker-build-image/#index_id14
https://zenn.dev/fujiyama/articles/a9a67cd3feba83