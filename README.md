# React from Scratch
This project is a step-by-step guide to setting up a React application from scratch. It utilizes Parcel as a bundler for the development environment.

## Getting Started
Follow these steps to initialize and set up your React application:

### Step 1: Initialize the Project
Run the following command to initialize the project and create a package.json file:

npm init
This command will prompt you to enter information about your project, and it will create the package.json file with the necessary configuration.

### Step 2: Install Parcel
Install Parcel as a development dependency using the following command:

npm i -D parcel
The -D flag indicates that Parcel is a dev dependency. Parcel is a bundler that simplifies the process of setting up and building a React application.

## Understanding Dependencies
Normal Dependencies: These are required for the production environment.
Dev Dependencies: These are required during the development phase.
## Versioning
^ (caret) before version: Allows minor updates automatically but prevents major updates.
~ (tilde) before version: Allows only patch-level updates automatically.
## Project Files
package-lock.json: Keeps a lock of the dependencies with exact versions and includes integrity checks using SHA hash codes.
node_modules: Contains all the required dependencies for the project.
## Transitivedependency
A transitive dependency occurs when one dependency is dependent on another.

## Gitignore
The .gitignore file contains a list of files or folders that you do not want to push to Git. This helps in excluding unnecessary files from version control.

## Conclusion
This guide provides a basic setup for a React application using Parcel. 