FROM ubuntu/apache2:latest
COPY ./build/ /var/www/html
COPY ./apache2.conf /etc/apache2/apache2.conf
RUN echo "ErrorDocument 404 http://ec2-18-234-148-80.compute-1.amazonaws.com/\nOptions -MultiViews\nRewriteEngine On\nRewriteBase /\nRewriteRule ^index.html$ - [L]\nRewriteCond %{REQUEST_FILENAME} !-f\nRewriteCond %{REQUEST_FILENAME} !-d\nRewriteRule . /index.html [L]" > /var/www/html/.htaccess
RUN a2enmod rewrite
RUN service apache2 restart
EXPOSE 80