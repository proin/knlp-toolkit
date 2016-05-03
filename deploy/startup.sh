if [ $1 = "hannanum" ]; then
    echo 'hannanum start'
    cd /usr/local/lib/node_modules/knlp-toolket/deploy/nlp-tool/hannanum
    java -jar hannanum.jar $2
else
    echo 'kkma start'
    cd /usr/local/lib/node_modules/knlp-toolket/deploy/nlp-tool
    java -jar kkma.jar $2
fi