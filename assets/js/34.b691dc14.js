(window.webpackJsonp=window.webpackJsonp||[]).push([[34],{509:function(t,a,s){"use strict";s.r(a);var e=s(28),n=Object(e.a)({},(function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h1",{attrs:{id:"docker"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#docker"}},[t._v("#")]),t._v(" Docker")]),t._v(" "),s("p"),s("div",{staticClass:"table-of-contents"},[s("ul",[s("li",[s("a",{attrs:{href:"#introduction"}},[t._v("Introduction")])]),s("li",[s("a",{attrs:{href:"#installation-setup"}},[t._v("Installation & Setup")]),s("ul",[s("li",[s("a",{attrs:{href:"#first-steps"}},[t._v("First steps")])]),s("li",[s("a",{attrs:{href:"#configure-the-docker-container"}},[t._v("Configure the docker container")])]),s("li",[s("a",{attrs:{href:"#launching-the-docker-container"}},[t._v("Launching the docker container")])]),s("li",[s("a",{attrs:{href:"#monitor-your-container-s"}},[t._v("Monitor your container(s):")])])])]),s("li",[s("a",{attrs:{href:"#configuring-bagisto"}},[t._v("Configuring Bagisto")]),s("ul",[s("li",[s("a",{attrs:{href:"#install-without-composer"}},[t._v("Install without composer")])]),s("li",[s("a",{attrs:{href:"#install-with-composer"}},[t._v("Install with composer")])]),s("li",[s("a",{attrs:{href:"#configure-apache"}},[t._v("Configure Apache")])]),s("li",[s("a",{attrs:{href:"#ready"}},[t._v("Ready")])])])])])]),s("p"),t._v(" "),s("h2",{attrs:{id:"introduction"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#introduction"}},[t._v("#")]),t._v(" Introduction")]),t._v(" "),s("p",[s("a",{attrs:{href:"https://www.docker.com/",target:"_blank",rel:"noopener noreferrer"}},[t._v("Docker"),s("OutboundLink")],1),t._v(" is an open platform for developing, shipping, and running applications. Docker enables you to separate your applications from your infrastructure so you can deliver software quickly. With Docker, you can manage your infrastructure in the same ways you manage your applications. Docker can also be used for defining and running multi-container Docker applications using Docker-Compose tool.")]),t._v(" "),s("p",[t._v("With the help of docker-compose, you can define containers to be build, their configuration, links, volumes, ports etc in a single file and it gets launched by a single command.\nYou can also add multiple servers and services just by adding them to docker-compose configuration file. This configuration file is in "),s("a",{attrs:{href:"https://en.wikipedia.org/wiki/YAML",target:"_blank",rel:"noopener noreferrer"}},[t._v("YAML"),s("OutboundLink")],1),t._v(" format.")]),t._v(" "),s("h4",{attrs:{id:"application-data-and-database-volume-persistance"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#application-data-and-database-volume-persistance"}},[t._v("#")]),t._v(" Application Data and Database Volume Persistance")]),t._v(" "),s("p",[t._v("It is recommended to keep your application files and database data volume on the docker host and mount them on the running container, this to ensure that the application and database data persistance even in the case of containers' failure or termination, In this way even if you destroy containers, your data won't get lost unless you remove them forcefully.\nThis compose configuration file mounts the application directory "),s("code",[t._v("app")]),t._v(" and database volume "),s("code",[t._v("dbvolume")]),t._v(" from host to running docker containers at the time of containers launch.")]),t._v(" "),s("h2",{attrs:{id:"installation-setup"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#installation-setup"}},[t._v("#")]),t._v(" Installation & Setup")]),t._v(" "),s("h3",{attrs:{id:"first-steps"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#first-steps"}},[t._v("#")]),t._v(" First steps")]),t._v(" "),s("p",[t._v("Before you can launch Bagisto in a docker environment you need to install the latest version of Docker and Docker Compose.")]),t._v(" "),s("ul",[s("li",[s("a",{attrs:{href:"https://docs.docker.com/install/",target:"_blank",rel:"noopener noreferrer"}},[t._v("Docker"),s("OutboundLink")],1)]),t._v(" "),s("li",[s("a",{attrs:{href:"https://docs.docker.com/compose/install/",target:"_blank",rel:"noopener noreferrer"}},[t._v("Docker-compose"),s("OutboundLink")],1)]),t._v(" "),s("li",[s("a",{attrs:{href:"https://getcomposer.org",target:"_blank",rel:"noopener noreferrer"}},[t._v("Composer"),s("OutboundLink")],1),t._v(" (optional)")])]),t._v(" "),s("h3",{attrs:{id:"configure-the-docker-container"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#configure-the-docker-container"}},[t._v("#")]),t._v(" Configure the docker container")]),t._v(" "),s("p",[t._v("Once Docker and docker-compose have been installed, we need to create a "),s("strong",[t._v("docker-compose.yml")]),t._v(" file."),s("br"),t._v("\nThe "),s("strong",[t._v("docker-compose.yml")]),t._v(" configuration file requires following inputs from the user:")]),t._v(" "),s("h4",{attrs:{id:"webserver-configuration"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#webserver-configuration"}},[t._v("#")]),t._v(" Webserver configuration")]),t._v(" "),s("p",[t._v("In the "),s("code",[t._v("web_server")]),t._v(" service block, assign your system working user uid to the "),s("code",[t._v("USER_UID")]),t._v(" enviroment variable."),s("br"),t._v("\nRun the following command "),s("code",[t._v("id -u")]),t._v(" on linux or Macos to get your user id")]),t._v(" "),s("div",{staticClass:"language-shell extra-class"},[s("pre",{pre:!0,attrs:{class:"language-shell"}},[s("code",[s("span",{pre:!0,attrs:{class:"token function"}},[t._v("id")]),t._v(" -u\n")])])]),s("h4",{attrs:{id:"database-configuration"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#database-configuration"}},[t._v("#")]),t._v(" Database configuration")]),t._v(" "),s("p",[t._v("In the "),s("code",[t._v("database_server")]),t._v(" service block, assign mysql database name, mysql database user name, mysql database user password and mysql root password to "),s("code",[t._v("MYSQL_DATABASE")]),t._v(", "),s("code",[t._v("MYSQL_USER")]),t._v(", "),s("code",[t._v("MYSQL_PASSWORD")]),t._v(" and "),s("code",[t._v("MYSQL_ROOT_PASSWORD")]),t._v(" environment.")]),t._v(" "),s("h4",{attrs:{id:"clone-configuration-from-github"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#clone-configuration-from-github"}},[t._v("#")]),t._v(" Clone configuration from Github")]),t._v(" "),s("p",[t._v("You can make use of our repository from Github by cloning this in your new directory")]),t._v(" "),s("div",{staticClass:"language-shell extra-class"},[s("pre",{pre:!0,attrs:{class:"language-shell"}},[s("code",[s("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" clone https://github.com/bagisto/bagisto-docker.git "),s("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v(".")]),t._v("\n")])])]),s("h4",{attrs:{id:"configure-manually"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#configure-manually"}},[t._v("#")]),t._v(" Configure manually")]),t._v(" "),s("ul",[s("li",[t._v("Create a new folder for example "),s("strong",[t._v("bagisto-docker")]),t._v(" and create "),s("strong",[t._v("docker-compose.yml")]),t._v(" manually inside it.")]),t._v(" "),s("li",[t._v("Add the following content to "),s("strong",[t._v("docker-compose.yml")])])]),t._v(" "),s("div",{staticClass:"language-yml extra-class"},[s("pre",{pre:!0,attrs:{class:"language-yml"}},[s("code",[s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("version")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'3'")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("services")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n\n  "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("web_server")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("image")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" webkul/apache"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v("php"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("latest\n    "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("container_name")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" apache2\n    "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("restart")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" always\n    "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("volumes")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n      "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v(" ./app"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("/var/www/html\n    "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("working_dir")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" /var/www/html/\n    "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("environment")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n      "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("USER_UID")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'mention your system user ID here. ex: 1001, 1000, 33, etc'")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("networks")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n      "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v(" bagisto"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v("network\n    "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("ports")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n      "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'80:80'")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("expose")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n      "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'80'")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("depends_on")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n      "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v(" database_server\n    "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("links")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n      "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v(" database_server\n\n  "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("database_server")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("image")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" mysql"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("5.7")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("container_name")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" mysql\n    "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("restart")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" always\n    "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("environment")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n      "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("MYSQL_DATABASE")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'mention the name of the database to be created here. eg: mydatabase'")]),t._v("\n      "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("MYSQL_USER")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'mention database user here. eg: mydatabase_user'")]),t._v("\n      "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("MYSQL_PASSWORD")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'mention database user password here. ex: mystrongPassword'")]),t._v("\n      "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("MYSQL_ROOT_PASSWORD")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'mention mysql root password here. ex: mysqlstrongpass'")]),t._v("\n      "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("MYSQL_ROOT_HOST")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'%'")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("networks")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n      "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v(" bagisto"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v("network\n    "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("ports")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n      "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'3306:3306'")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("expose")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n      "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'3306'")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("volumes")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n      "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v(" ./dbvolume"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("/var/lib/mysql\n\n"),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("volumes")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("dbvolume")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("app")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("networks")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("bagisto-network")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n")])])]),s("h4",{attrs:{id:"download-the-docker-image"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#download-the-docker-image"}},[t._v("#")]),t._v(" Download the docker image")]),t._v(" "),s("p",[t._v("The following command will download the docker images for apache-php version 7.3 and mysql version 5.7.")]),t._v(" "),s("div",{staticClass:"language-shell extra-class"},[s("pre",{pre:!0,attrs:{class:"language-shell"}},[s("code",[t._v("docker-compose pull\n")])])]),s("h3",{attrs:{id:"launching-the-docker-container"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#launching-the-docker-container"}},[t._v("#")]),t._v(" Launching the docker container")]),t._v(" "),s("p",[t._v("The following command will create a network, launch a webserver and database containers with names "),s("code",[t._v("apache2")]),t._v(" and "),s("code",[t._v("mysql")]),t._v(".\nIt will also create a new "),s("code",[t._v("app")]),t._v(" and "),s("code",[t._v("dbvolume")]),t._v(" directory inside your current directory and mount it to respective docker containers as mentioned in docker-compose.yml.\nIt binds your "),s("code",[t._v("host port 80")]),t._v(" with the apache2 container port 80 and "),s("code",[t._v("host port 3306")]),t._v(" with mysql container port 3306. If you want to run containers on ports other than 80 and 3306, modify their values in "),s("strong",[t._v("docker-compose.yml")]),t._v(" file.")]),t._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v("docker-compose up -d\n")])])]),s("h3",{attrs:{id:"monitor-your-container-s"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#monitor-your-container-s"}},[t._v("#")]),t._v(" Monitor your container(s):")]),t._v(" "),s("p",[t._v("Check your running docker containers with the following commands")]),t._v(" "),s("p",[s("code",[t._v("docker ps")]),t._v(" OR "),s("code",[t._v("docker-compose ps")])]),t._v(" "),s("div",{staticClass:"language-shell extra-class"},[s("pre",{pre:!0,attrs:{class:"language-shell"}},[s("code",[t._v("CONTAINER ID   IMAGE                      COMMAND                  CREATED             STATUS             PORTS                               NAMES\n62a10346b84a   webkul/apache-php:latest   "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"/usr/bin/supervisord"')]),t._v("   About an hour ago   Up About an hour   "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("0.0")]),t._v(".0.0:80-"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("80")]),t._v("/tcp                  apache2\n90a0a2e0e46b   mysql:5.7                  "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"docker-entrypoint.s…"')]),t._v("   About an hour ago   Up About an hour   "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("0.0")]),t._v(".0.0:3306-"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("3306")]),t._v("/tcp, "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("33060")]),t._v("/tcp   mysql\n")])])]),s("h2",{attrs:{id:"configuring-bagisto"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#configuring-bagisto"}},[t._v("#")]),t._v(" Configuring Bagisto")]),t._v(" "),s("p",[t._v("Once our environment is ready we can start installing Bagisto. You can either install Bagisto from "),s("a",{attrs:{href:"#install-without-composer"}},[t._v("Github")]),t._v(" or with "),s("a",{attrs:{href:"#install-with-composer"}},[t._v("composer")])]),t._v(" "),s("h3",{attrs:{id:"install-without-composer"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#install-without-composer"}},[t._v("#")]),t._v(" Install without composer")]),t._v(" "),s("p",[t._v("Download the "),s("a",{attrs:{href:"https://bagisto.com/en/download",target:"_blank",rel:"noopener noreferrer"}},[t._v("latest release"),s("OutboundLink")],1),t._v(" inside "),s("code",[t._v("app/bagisto")]),t._v(" directory."),s("br"),t._v("\nOpen the "),s("code",[t._v(".env")]),t._v(" file inside "),s("strong",[t._v("app/bagisto")]),t._v(" and set the following environment variables listed below:")]),t._v(" "),s("div",{staticClass:"language-editorconfig extra-class"},[s("pre",{pre:!0,attrs:{class:"language-editorconfig"}},[s("code",[s("span",{pre:!0,attrs:{class:"token property"}},[t._v("APP_URL")]),s("span",{pre:!0,attrs:{class:"token value string"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),t._v("https://127.0.0.1")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token property"}},[t._v("DB_CONNECTION")]),s("span",{pre:!0,attrs:{class:"token value string"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),t._v("mysql")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token property"}},[t._v("DB_HOST")]),s("span",{pre:!0,attrs:{class:"token value string"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),t._v("mysql")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token property"}},[t._v("DB_PORT")]),s("span",{pre:!0,attrs:{class:"token value string"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),t._v("3306")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token property"}},[t._v("DB_DATABASE")]),s("span",{pre:!0,attrs:{class:"token value string"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")])]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token property"}},[t._v("DB_USERNAME")]),s("span",{pre:!0,attrs:{class:"token value string"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")])]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token property"}},[t._v("DB_PASSWORD")]),s("span",{pre:!0,attrs:{class:"token value string"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")])]),t._v("\n")])])]),s("p",[t._v("Run the following commands to install Bagisto.")]),t._v(" "),s("div",{staticClass:"language-shell extra-class"},[s("pre",{pre:!0,attrs:{class:"language-shell"}},[s("code",[t._v("docker "),s("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v("exec")]),t._v(" -i apache2 "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("bash")]),t._v(" -c "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("\"su - www-data -s /bin/bash -c 'php bagisto/artisan migrate'\"")]),t._v(" \ndocker "),s("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v("exec")]),t._v(" -i apache2 "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("bash")]),t._v(" -c "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("\"su - www-data -s /bin/bash -c 'php bagisto/artisan db:seed'\"")]),t._v("\ndocker "),s("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v("exec")]),t._v(" -i apache2 "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("bash")]),t._v(" -c "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("\"su - www-data -s /bin/bash -c 'php bagisto/artisan vendor:publish'\"")]),t._v("\ndocker "),s("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v("exec")]),t._v(" -i apache2 "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("bash")]),t._v(" -c "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("\"su - www-data -s /bin/bash -c 'php bagisto/artisan storage:link'\"")]),t._v("\ndocker "),s("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v("exec")]),t._v(" -i apache2 "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("bash")]),t._v(" -c "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("\"su - www-data -s /bin/bash -c 'composer dump-autoload -d bagisto'\"")]),t._v("\n")])])]),s("p",[t._v("Mention the database details same as docker-compose.yml and admin details.")]),t._v(" "),s("h3",{attrs:{id:"install-with-composer"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#install-with-composer"}},[t._v("#")]),t._v(" Install with composer")]),t._v(" "),s("p",[t._v("The following commands will be exexcuted within the docker container")]),t._v(" "),s("div",{staticClass:"language-shell extra-class"},[s("pre",{pre:!0,attrs:{class:"language-shell"}},[s("code",[t._v("docker "),s("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v("exec")]),t._v(" -i apache2 "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("bash")]),t._v(" -c "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("\"su - www-data -s /bin/bash -c 'composer create-project bagisto/bagisto'\"")]),t._v("\n")])])]),s("p",[t._v("Open the .env file inside "),s("code",[t._v("app/bagisto")]),t._v(" directory and set the following environment variables listed below:")]),t._v(" "),s("div",{staticClass:"language-editorconfig extra-class"},[s("pre",{pre:!0,attrs:{class:"language-editorconfig"}},[s("code",[s("span",{pre:!0,attrs:{class:"token property"}},[t._v("APP_URL")]),s("span",{pre:!0,attrs:{class:"token value string"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),t._v("https://127.0.0.1")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token property"}},[t._v("DB_CONNECTION")]),s("span",{pre:!0,attrs:{class:"token value string"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),t._v("mysql")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token property"}},[t._v("DB_HOST")]),s("span",{pre:!0,attrs:{class:"token value string"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),t._v("mysql")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token property"}},[t._v("DB_PORT")]),s("span",{pre:!0,attrs:{class:"token value string"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),t._v("3306")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token property"}},[t._v("DB_DATABASE")]),s("span",{pre:!0,attrs:{class:"token value string"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")])]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token property"}},[t._v("DB_USERNAME")]),s("span",{pre:!0,attrs:{class:"token value string"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")])]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token property"}},[t._v("DB_PASSWORD")]),s("span",{pre:!0,attrs:{class:"token value string"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")])]),t._v("\n")])])]),s("p",[t._v("Run the following commands to install Bagisto.")]),t._v(" "),s("div",{staticClass:"language-shell extra-class"},[s("pre",{pre:!0,attrs:{class:"language-shell"}},[s("code",[t._v("docker "),s("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v("exec")]),t._v(" -i apache2 "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("bash")]),t._v(" -c "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("\"su - www-data -s /bin/bash -c 'php bagisto/artisan migrate'\"")]),t._v(" \ndocker "),s("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v("exec")]),t._v(" -i apache2 "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("bash")]),t._v(" -c "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("\"su - www-data -s /bin/bash -c 'php bagisto/artisan db:seed'\"")]),t._v("\ndocker "),s("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v("exec")]),t._v(" -i apache2 "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("bash")]),t._v(" -c "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("\"su - www-data -s /bin/bash -c 'php bagisto/artisan vendor:publish'\"")]),t._v("\ndocker "),s("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v("exec")]),t._v(" -i apache2 "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("bash")]),t._v(" -c "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("\"su - www-data -s /bin/bash -c 'php bagisto/artisan storage:link'\"")]),t._v("\ndocker "),s("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v("exec")]),t._v(" -i apache2 "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("bash")]),t._v(" -c "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("\"su - www-data -s /bin/bash -c 'composer dump-autoload -d bagisto'\"")]),t._v("\n")])])]),s("p",[t._v("Bagisto has been installed and is ready. Browse your server IP address or domain name on the web browser.")]),t._v(" "),s("h3",{attrs:{id:"configure-apache"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#configure-apache"}},[t._v("#")]),t._v(" Configure Apache")]),t._v(" "),s("p",[t._v("The Apache documentroot is by default assigned to "),s("strong",[t._v("/var/www/html/public_html")]),t._v(". while the "),s("strong",[t._v("app")]),t._v(" directory on host is mapped with the "),s("strong",[t._v("html")]),t._v(" directory inside the container.\nWe need to create a symlink of "),s("code",[t._v("bagisto/public")]),t._v(" in "),s("code",[t._v("app")]),t._v(" directory to "),s("code",[t._v("/var/www/html/public_html")]),t._v(".")]),t._v(" "),s("p",[t._v("Run the following command on Linux or MacOS")]),t._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[s("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v("cd")]),t._v(" app"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("ln")]),t._v(" -snf bagisto/public public_html\n")])])]),s("p",[t._v("Run the following command on Windows")]),t._v(" "),s("div",{staticClass:"language-command-line extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v("cd app\nmklink bagisto/public public_html\n")])])]),s("h3",{attrs:{id:"ready"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#ready"}},[t._v("#")]),t._v(" Ready")]),t._v(" "),s("h4",{attrs:{id:"login-as-a-administrator"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#login-as-a-administrator"}},[t._v("#")]),t._v(" Login as a administrator:")]),t._v(" "),s("p",[t._v("You can directly visit the admin interface "),s("a",{attrs:{href:"http://your_server_endpoint/admin/",target:"_blank",rel:"noopener noreferrer"}},[t._v("http://your_server_endpoint/admin"),s("OutboundLink")],1),t._v(" and authenticate with the following credentials.")]),t._v(" "),s("table",[s("thead",[s("tr",[s("th",[t._v("Email")]),t._v(" "),s("th",[t._v("Password")])])]),t._v(" "),s("tbody",[s("tr",[s("td",[t._v("admin@example.com")]),t._v(" "),s("td",[t._v("admin123")])])])]),t._v(" "),s("h4",{attrs:{id:"login-as-a-customer"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#login-as-a-customer"}},[t._v("#")]),t._v(" Login as a customer")]),t._v(" "),s("p",[t._v("You can directly visit your store on "),s("a",{attrs:{href:"http://your_server_endpoint/",target:"_blank",rel:"noopener noreferrer"}},[t._v("http://your_server_endpoint/"),s("OutboundLink")],1),t._v(".")])])}),[],!1,null,null,null);a.default=n.exports}}]);