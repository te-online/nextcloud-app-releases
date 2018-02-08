echo -n "Enter the version (like 1.0.0) and press [ENTER]: "
read VERSION

echo -n "Enter appname and press [ENTER]: "
read APPNAME

DIRNAME=$(pwd)

# Create tar file
tar -czf $DIRNAME/$APPNAME/v$VERSION/$APPNAME.tar.gz -C $DIRNAME/$APPNAME/v$VERSION $APPNAME

# Create signature and copy to clipboard
openssl dgst -sha512 -sign ~/.nextcloud/certificates/$APPNAME.key $DIRNAME/$APPNAME/v$VERSION/$APPNAME.tar.gz | openssl base64 | pbcopy