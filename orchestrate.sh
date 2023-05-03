#!/bin/bash

sc -u $SAUCE_USERNAME -k $SAUCE_ACCESS_KEY --region us-west --tunnel-name mdonovan2010_tunnel_name &> sc-orchestrate.log &

npm run start