## STEPS TO PUSH CODE TO GIT


1) Make a directory with any name
2) git init <- inside that directory
3) git status <- will show you in red color means things are not pushed to git till
4) git add . <- it will add code to yout git
5) git status <- now it's "green" green indicates there are ready to upload and these stablish in git also
6) git commit -m "comment here.." <- it will use to add comments on your git
7) git config --global user.email "write email here..." <- set globaly your email
8) git config --global user.name  "write name here...." <- set globaly your name
9) git config --global user.email <- it will prints your email
10) git config --global user.name  <- it will prints your name
11) now go to your repo: there you find something like...
	git remote add origin [repo:link].git
12) now type # git push -u origin master
	now it will ask you about username and password something like this....

		Username for 'https://github.com': write username..
		Password for 'https://username@github.com': Write your password here...

		Note: if it's giving you an error this means you have to make a token to create a token you need to follow these steps:

		Step1: Go to your profile icon > setting
		Step2: Sidebar you will find developer setting tab
		Step3: Now three now choose generate personal token
		Step4: Assign a name to your token
		Step5: Then give some permission access to it in my case i have choosed :repo with it's 6 checkboxs
		Step6: Then click on generate token
		Step7: Now your token has been generate please save it safe safe place for make use.. again.
				Note: token life is 30days. [Sure you can create it again after passed with 30days.]


13) Now do # git push -u origin master
	it will again asking you your username and password:
		Write your username: 'username'
		Write your password: 'Intead of password paste here your token...'


	ENjoY!! Your code has been uploaded .. check your repo :)  
