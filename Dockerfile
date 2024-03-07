FROM httpd:2.4

ENV CONTAINER_TIMEZONE="Europe/Paris"
RUN ln -snf /usr/share/zoneinfo/$CONTAINER_TIMEZONE /etc/localtime && echo $CONTAINER_TIMEZONE > /etc/timezone

RUN sed -i 's/Options Indexes FollowSymLinks/Options FollowSymLinks/g' /usr/local/apache2/conf/httpd.conf