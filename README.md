# Agoda

Install

clone github with https://github.com/John-Aow/Agoda.git then, run
 > npm i
 
 and run
 > node server
it will show message in terminal "http://localhost:3000"


#Post API 

you can use postman or another way to send request in this url
  > http://localhost:3000

and definde numbers in body with array string or array. if successful you will recive response 

example : [1,2,3,4]
  > {"GCD" : 1 } 

with status201,but if your body is wrong wil show 
  > {"error" : "missing body"}

if your data isn't array string or array will show
  > {"error" : "wrong data"}

both error had status 400.
