rm -rf ./test/report
rm -rf ./test/output
mkdir -p ./test/report
mkdir -p ./test/output
export startTime=$(date)
export NODE_TLS_REJECT_UNAUTHORIZED=0
TAGS = "$1" | undefined
if [ -z "$TAGS" ]; then
    node node_modules/@cucumber/cucumber/bin/cucumber-js src/features/*.feature --require src/step_definitions/ -f json:test/report/cucumber_report.json
else
    node node_modules/@cucumber/cucumber/bin/cucumber-js src/features/*.feature --require src/step_definitions/ -f json:test/report/cucumber_report.json --tags "$1" 
fi
result=$?
export endTime=$(date)
node multiReport.js
exit $result