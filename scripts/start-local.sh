#!/usr/bin/env bash
DIR="$( cd "$( dirname "${BASH_SOURCE[0]}" )" && pwd )"
./node_modules/.bin/electron --no-sandbox $DIR/.. $@
