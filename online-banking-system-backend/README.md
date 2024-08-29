


Befor starting the project set up, make sure you have properly installed the below softwares:
1) Java JDK 17 or above version
2) STS (STS 4 recommended)
3) Node JS
4) Vs Code
5) MySQL Server and MySQL WorkBench (use can also use Command prompt for Data Querying, But I recommend to use Workbench)

-----------------------------------------------------------------------

As shown on video, For running frontend we have to use [npm start] command.

1) After hitting [npm start] command, when we get [Error: cannot find module react], 

so in that case, please hit below command.

npm install --save react react-dom @types/react @types/react-dom

and after hitting the above command, you can hit the command [npm start] and now this time it will work fine.

2) Sometime we can also get below error:

react-scripts' is not recognized as an internal or external command

so in this case hit below command firstly, then again hit [npm start] command.

npm install react-scripts --save

-----------------------------------------------------------------------

MYSQL FAQs:

Do I need to create database and table manually?

NO, you don't have to create the Database and Tables manually in the MySQL Server. When you run the backend application for the first time it automatically
creates the Database and Tables in the MySQL server.

You just have to enter the correct mysql password in application.properties file and make sure MySQL Server is properly installed in your system.


-----------------------------------------------------------------------

AFTER SET UP PROCESS

Now if your set up is done and both backend and frontend is running fine.



*********** THANK YOU ***********
