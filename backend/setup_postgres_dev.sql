-- create database --
CREATE DATABASE "iupi_db";
-- create role --
create role "iupi_dev" with password 'iupi_pwd';
-- Grant login permissions --
alter role "iupi_dev" with login;


-- grants roles -----
\c "iupi_db";
GRANT USAGE ON SCHEMA public TO "iupi_dev";
GRANT CREATE ON SCHEMA public TO "iupi_dev";
GRANT CONNECT ON DATABASE "iupi_db" TO "iupi_dev";
GRANT ALL PRIVILEGES ON DATABASE "iupi_db" TO "iupi_dev";