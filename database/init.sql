-- bug_tracker (Web app database name)
-- bug_tracker_app (Database user for web app database)

-- Create user to manage our web app database.
SELECT 'CREATE USER bug_tracker_app' WHERE NOT EXISTS (SELECT FROM pg_user WHERE usename = 'bug_tracker_app')\gexec

-- Web app database with specific owner 
SELECT 'CREATE DATABASE bug_tracker OWNER bug_tracker_app' WHERE NOT EXISTS (SELECT FROM pg_database WHERE datname = 'bug_tracker')\gexec

-- Connect to bug_tracker database.
\connect bug_tracker;
-- Create web app schema. This will be the main app schema.
CREATE SCHEMA IF NOT EXISTS bt AUTHORIZATION bug_tracker_app;

-- We won't use the public schema so let's make sure users can't use it.
-- The lowercase word “public” refers to the schema and could be replaced
-- by any other valid schema name that might exist in the database. The 
-- uppercase “PUBLIC” is the special keyword that implies “all users” and 
-- could instead be replaced with a specific role name
REVOKE ALL PRIVILEGES ON SCHEMA public FROM PUBLIC;