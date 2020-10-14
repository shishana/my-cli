#!/bin/bash
branch=$(git symbolic-ref --short -q HEAD)
upperCase=''

if [ "$branch"x == 'test'x ]
then
  git merge --no-ff origin/dev
  npm run build
  docker build -f ./docker/fresh-express-mng -t swr.cn-north-1.myhuaweicloud.com/bayesba/fresh-express-mng .
  docker push swr.cn-north-1.myhuaweicloud.com/bayesba/fresh-express-mng
  upperCase='TEST'
elif [ "$branch"x == 'release'x ]
then
  git merge --no-ff origin/test
  npm run build
  docker build -f ./docker/fresh-express-mng -t swr.cn-north-1.myhuaweicloud.com/bayesba/fresh-express-mng:release .
  docker push swr.cn-north-1.myhuaweicloud.com/bayesba/fresh-express-mng:release
  upperCase='RELEASE'
elif [ "$branch"x == 'dev'x ]
then
  npm run build
  docker build -f ./docker/fresh-express-mng -t docker-image-dev .
  docker run --name web-server -p 8066:80 -t -d docker-image-dev
  echo
  echo "The development version container is already running on port 8066"
  echo "Test URL is http://localhost:8066"
else
  echo "$branch is **NOT** correct branch to build docker image."
fi

echo
echo "-----Finished----"

if [ "$branch"x == 'test'x ] || [ "$branch"x == 'release'x ]
then
  echo "The docker image was successfully built for the **$upperCase** version."
fi
