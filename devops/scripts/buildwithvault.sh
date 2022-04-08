#!/bin/bash

. ./devops/scripts/vaultsecrets.sh

yarn run build --mode=$ENV
