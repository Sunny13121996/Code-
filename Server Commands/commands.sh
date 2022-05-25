--- DOWNLOAD SERVER TO LOCAL ---
> sudo scp -i /home/wegile/Documents/PEM/toolbox.pem ubuntu@35.169.151.235:/var/www/html/toolboxmarch31.zip .

--- UPLOAD SERVER TO LOCAL ---
> sudo scp -i /home/wegile/Documents/PEM/toolbox.pem ubuntu@35.169.151.235:/var/www/html/tools.zip .

--- UPLOAD LOCAL TO SERVER ---
> sudo scp -i /home/wegile/Documents/PEM/toolbox.pem tool.zip ubuntu@35.169.151.235:/home/ubuntu
