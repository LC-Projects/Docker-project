# Use the official image as a parent image
FROM httpd:2.4

# Set the working directory in the container
WORKDIR /usr/local/apache2/htdocs/

# Copy the current directory contents into the container at /usr/local/apache2/htdocs/
COPY ./src/frontend/ .

# run apache2
CMD ["apachectl", "-D", "FOREGROUND"]