# 活用python

> 原创	Administator

不是我说，python这个语言挺strong的，它可以直接帮你做许多事，而且简单上手。
我只学了三个星期，就开发出了几样有意思的东西。

****

### 1.邮件发送程序

通过自动登录邮箱，以及smtplib库发送邮件

```python
import smtplib
from email.mime.text import MIMEText
msg_from=input("请输入您的邮箱 Please enter your email")
pwd=input("请输入第三方授权码 Please enter a third-party verification code")
to=input("请输入目标邮箱地址 Please enter the target email address")
subject=input("请输入邮件标题 Please enter a message header")
content=input("请输入邮件正文 Please enter the message body")
msg=MIMEText(content)
msg["Subject"]=subject
msg["From"]=msg_from
msg["To"]=to
ss=smtplib.SMTP_SSL("smtp.sina.com",465)
ss.login(msg_from,pwd)
ss.sendmail(msg_from,to,msg.as_string())
```

### 2.爬虫

爬虫……不用我介绍了，python就是爬虫最6
我的爬虫通过不同的user agent伪装成浏览器，再自定义了open，只要是正确的url，并且是http协议，大多数都可以爬取
如果不能正常爬取请换一种解码方式

```python
import urllib.request
import re
import random
agent1="User-Agent:Mozilla/4.0(compatible;MSIE7.0;WindowsNT5.1;360SE)"
agent2="User-Agent:Mozilla/5.0(compatible;MSIE9.0;WindowsNT6.1;Trident/5.0;"
agent3="User-Agent:NOKIA5700/UCWEB7.0.2.37/28/999"
agentlist=[agent1,agent2,agent3]
http_hander=urllib.request.HTTPHandler()
opener=urllib.request.build_opener(http_hander)
agent=random.choice(agentlist)
print("目前选择的Agent是",agent)
header={"User-Agent":agent}
url=r"网页链接" #url在这里
req=urllib.request.Request(url,headers=header)
reponse=opener.open(req).read().decode
print(reponse)
f=open(r"C:\Users\Administator\Desktop\data.txt","w") #为了防止显示的东西过多，导致卡死，我特意把文件保存到桌面上
f.write(reponse)
f.close()
```