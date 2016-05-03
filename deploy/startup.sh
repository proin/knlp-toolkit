echo '---';
pwd
echo '---';

if [ $1 = "hannanum" ]; then
    echo 'hannanum start'
    cd ./deploy/nlp-tool/hannanum
    java -jar hannanum.jar $2
else
    echo 'kkma start'
    cd ./deploy/nlp-tool
    java -jar kkma.jar $2
fi