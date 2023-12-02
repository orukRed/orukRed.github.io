# orukred-page

## todo

- htmlファイル複数作ったりしてとっっっっっっっても良くない書き方してるからそのうちvueとかで書き直そうね……
- ページがスクロールするとレイアウト崩れる(サイドバーが固定されない）から直そうね
- レスポンシブデザインにしようね

## usage

Dockerfileがあるので以下でコンテナを作って起動してください。

`docker image build -t orukred-page .`
`docker run -it -p 3000:3000 -v ${PWD}:/usr/src/app -v /usr/src/app/node_modules orukred-page`

コンテナを削除するときは以下で。
`docker rm $(docker ps -aq)`

# TODO
`docker run -it -p 3000:3000 -v ${PWD}:/usr/src/app -v /usr/src/app/node_modules orukred-page /usr/src/app`をすると
/usr/local/bin/docker-entrypoint.sh: exec: line 11: /usr/src/app: Permission denied が発生。後日調査。