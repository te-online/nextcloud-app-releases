echo -n "Enter the version (like 1.0.0) and press [ENTER]: "
read VERSION

# Create tar file
tar -czf /Users/thomas/Sites/nextcloud-app-releases/files_linkeditor/v$VERSION/files_linkeditor.tar.gz -C /Users/thomas/Sites/nextcloud-app-releases/files_linkeditor/v$VERSION files_linkeditor