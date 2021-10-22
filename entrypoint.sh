#!/bin/sh
sed -i "s/ubuntu/$BOT_ID/g" /etc/nginx/nginx.conf
sed -i "s/https:\/\/hostname.bitsbee.io/$VUE_APP_API_URL/g" /etc/nginx/html/js/app.js
# for file in /etc/nginx/html/js/*.js;
# do
#   if [ ! -f $file.tmpl.js ]; then
#     cp $file $file.tmpl.js
#   fi
#   envsubst '$VUE_APP_API_URL' < $file.tmpl.js > $file
# done
echo "Starting Nginx"
nginx
