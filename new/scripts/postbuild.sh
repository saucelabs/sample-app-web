#!/bin/bash

# Move to root folder
cd ../

# create the new directory
mkdir ../build/new

# copy the content of the build folder to the main build folder
cp -a ./build/. ../dist/new/
