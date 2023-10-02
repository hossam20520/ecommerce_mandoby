FROM php:7.4-apache



    
RUN apt-get update \
    && apt-get install -y \
        libicu-dev \
        libonig-dev \
        libzip-dev \
        libjpeg-dev \
        libpng-dev \
        zip \
        unzip \
        libfreetype6-dev \
        libjpeg62-turbo-dev \
    && docker-php-ext-install \
        pdo_mysql \
        intl \
        zip \
        gd \
    && docker-php-ext-configure gd --with-freetype --with-jpeg   \
    && apt-get install -y git unzip  && \
    php -r "copy('https://getcomposer.org/installer', 'composer-setup.php');" && \
    php composer-setup.php --install-dir=/usr/local/bin --filename=composer && \
    rm composer-setup.php \
    && a2enmod \
        rewrite

# COPY eduz-app.com.crt /etc/ssl/certs/eduz-app.com.crt
# COPY eduz-app.com.key /etc/ssl/private/eduz-app.com.key
# COPY 000-default.conf /etc/apache2/sites-available/000-default.conf
# COPY default-ssl.conf /etc/apache2/sites-available/default-ssl.conf

# RUN a2enmod rewrite
# RUN a2ensite default-ssl
# RUN a2enmod ssl
# RUN service apache2 start
RUN service apache2 restart
# RUN service apache2 reload


# COPY 000-default.conf /etc/apache2/sites-available/000-default.conf


# Copy your SSL certificate and key to the container
# COPY ssl.crt /etc/apache2/ssl.crt
# COPY ssl.key /etc/apache2/ssl.key

# # Configure Apache virtual host for SSL
# COPY apache2-ssl.conf /etc/apache2/sites-available/default-ssl.conf
# RUN a2ensite default-ssl.conf

# # Enable Apache SSL module and ports
# RUN a2enmod ssl
# RUN sed -i 's/Listen 80/Listen 443/' /etc/apache2/ports.conf

# # Enable HTTPS redirection (optional)
# COPY apache2-redirect.conf /etc/apache2/conf-available/redirect.conf
# RUN a2enconf redirect.conf

COPY . /var/www/html

 

RUN chown -R www-data:www-data /var/www/html \
    && chmod -R 755 /var/www/html \
    && chown -R www-data:www-data /var/www/html/storage \
    && chmod -R 775 /var/www/html/storage \
    && chown -R www-data:www-data public \
    && chmod -R 775 public \
    # && chown -R www-data:www-data storage/framework/sessions \
    # && chmod -R 775 storage/framework/sessions \
    # && chown -R www-data:www-data bootstrap/cache \
    # && php /var/www/html/artisan key:generate

WORKDIR /var/www/html