#!/bin/bash

OS_RELEASE=`uname -r`
OS_CONFIG="/boot/config-${OS_RELEASE}"
UNPRIVILEGED_USERNS_CLONE_SWITCH="/proc/sys/kernel/unprivileged_userns_clone"

# Assume that the user name space feature is disabled
USER_NS=n
UNPRIVILEGED_USERNS_CLONE=1

# Check if the user name space feature is enabled in the kernel config
if [ -f $OS_CONFIG ]; then
        USER_NS=`cat $OS_CONFIG | sed -n 's/^CONFIG_USER_NS=//p'`
fi

# Check the state of the user name space feature switch
if [ -f $UNPRIVILEGED_USERNS_CLONE_SWITCH ]; then
        UNPRIVILEGED_USERNS_CLONE=`cat $UNPRIVILEGED_USERNS_CLONE_SWITCH`
fi

if [ $USER_NS == 'y' ] && [ $UNPRIVILEGED_USERNS_CLONE != 0 ]; then
        "${BASH_SOURCE%/*}"/$APP_NAME.bin "$@"
else
        echo "ATTENTION: Sandboxing of this app has been disabled since the user namespace feature of your OS is disabled."
        echo "Please enable user namespaces or use the deb package."
        "${BASH_SOURCE%/*}"/$APP_NAME.bin "$@" --no-sandbox
fi
