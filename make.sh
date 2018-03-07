echo "Enter the version (like 1.0.0) and press [ENTER]: "
read VERSION

echo "Enter appname and press [ENTER]: "
read APPNAME

DIRNAME=$(pwd)

# Create tar file
tar -czf $DIRNAME/$APPNAME/v$VERSION/$APPNAME.tar.gz -C $DIRNAME/$APPNAME/v$VERSION $APPNAME

# Create signature and copy to clipboard
openssl dgst -sha512 -sign ~/.nextcloud/certificates/$APPNAME.key $DIRNAME/$APPNAME/v$VERSION/$APPNAME.tar.gz | openssl base64 | pbcopy
echo "🔏  The signature for submitting the app is now in your clipboard."
echo "Press [ENTER] to continue."
read DUMMY

echo "https://github.com/te-online/nextcloud-app-releases/raw/master/$APPNAME/v$VERSION/$APPNAME.tar.gz" | pbcopy
echo "🌍  The release URL for this release should be in your clipboard now."

echo "🎉  Done. Go ahead. Push and submit the release!"