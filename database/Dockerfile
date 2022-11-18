# NOTE: It is not recommended to run a production database 
# in a docker container, but for the purpose of this personal
# project it's fine.
# Check this article to learn more: https://myopsblog.wordpress.com/2017/02/06/why-databases-is-not-for-containers/

FROM postgres:14.6
COPY ./init.sql /docker-entrypoint-initdb.d/
