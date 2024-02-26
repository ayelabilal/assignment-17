                    // chapter  no 4 "VARIABLE NAME LEGAL AND ILLEGAL"(class work)

// q:1
var  firstName ="Hello world"
var lastName = "Hello students"
var number = "25"

// q:2 (5 legal variable)
var $20 = "Hello!"
var rollNo = "5432"
var name = "ayela"
var $email = "@gmail.com"
var xy_23 = "xyz"

// (illega variable)
// var 123 ="numbers"
// var @name = "names"
// var %20 = "pecentage"
// var # = "hashtag"
// var * = "multiple"

// q:3
// a
// var name = "rules"
document.write ("<h3> a:Rules for naming JS variables</h3>");
// b
document.write("<br>b: variable names can only contain numbers, $, text and camel case format.")
// c
document.write("<br>c: variable must begin with a letter,$,or Camel case format.")
// d
document.write("<br>d: variables names are case sensitive.")
// e
document.write("<br>e: variable names should no be JS keywords.")

                  // chapter no 5  MATH EXPRESSIONS
// 1
document.write("<br><h4>MATH EXPRESSIONS</h4>")
var number = 3
var number2 = 5
document.write(number + number2)
document.write( "<br>1) sum of 3 and 5 is 8")

// 2
var number3 = 3
var number4 = 5
document.write( "<br>","<br>",  number3 - number4)
document.write( "<br> 2) subtracting 3 from 5 result in -2")

var number5 = 3
var number6 = 5
document.write( "<br>", "<br>", number5 * number6)
document.write( "<br> multiply 3 and 5 answer will be 15")

// 4
var movieTicket= "600"
var buy5 = "5"
document.write("<br><br>", movieTicket * buy5)
document.write( "<br> 4) Total cost to buy 5 tickets to a movie is 3000PKR")

// 5
document.write("<br>,<h3> 5) Table of 4 </h3>")
var table = "4"
document.write("<br>", "4 * 1 =" +table + 
"<br>", "4 * 2 =" +  2* table+
"<br>", "4 * 3 =" + 3* table +
"<br>", "4 * 4 =" + 4* table+
"<br>", "4 * 5 =" + 5* table+
"<br>", "4 * 6 =" + 6* table+
"<br>", "4 * 7 =" +7* table+
"<br>", "4 * 8 =" + 8* table+
"<br>", "4 * 9 =" + 9* table+
"<br>", "4 * 10 =" + 10* table)



// 7
document.write("<br><h4>Shopping Cart</h4>")
var priceItem1 =  650
var orderQty1 =   3
document.write("<br>", "item 1 ",  priceItem1 * orderQty1 )


var priceItem2 = 100
var orderQty2 =   7
var shippingCharges = 100
document.write("<br> item 2 ",  priceItem2 * orderQty2 + shippingCharges)
 document.write(" <br> Total 2750")

//  8 
document.write("<br> <h4>Marks Sheet</h4>")
document.write("Total marks:90 <br> Marks obtained:804 <br>percentage:82.04%")


// 11
document.write("<br>","<h4>The Age Calculator</h4>")
var currentYear= 2016
var birthYear = 1992
document.write("<br>", "Current year: 2016" ,"<br>", "Birth Year:1992","<br>","Your Age: 24")

// 12 
document.write("<br>","<h4>The Geometrizer</h4>")
var radius= 20
document.write("<br>","Radius of a circle: 20","<br> The circumference is:125.67999","<br> The area is:1256.8")

                // chapter no 6 MATH EXPRESSIONS
document.write("<br>","<h3>MATH EXPRESSIONS</h3>")

// 1
document.write("1) Result","<br>","The value of a is:  20")
var a = " 20"
document.write("<br>","<br>"," The value of ++a is:", ++a)
document.write("<br>","Now the value of a is: 21")
var a = " 21"
document.write("<br>","<br>"," The value of ++a is:  21")
document.write("<br>","Now the value of a is:", ++a)
var a=" -21"
document.write("<br>","<br>","The value of -a is: 21")
document.write("<br>","Now the value of a is:", -a)
var a ="21"
document.write("<br>","<br>","The value of a-- is: 21")
document.write("<br>","Now the value of a is:",--a)

//2
 var a =" 2", b= " 1"
 document.write("<br>","<br>","ques 2)","<br>","a is:2","<br>","b is:1","<br>","<br>","Result")
 document.write("<br>","--a;","&nbsp"," a is: ", --a)
 document.write("<br>","--a -  --b;","&nbsp","  is: ", --a - --b)
 document.write("<br>","--a -  --b + ++b;","&nbsp"," is: ", --a - --b + ++b)
 document.write("<br>","--a -   --b + ++b + b--; ","&nbsp"," is: ", --a - --b + ++b + b-- )

// 5
document.write("<br>,<h3> 5) Table of 5 </h3>")
var table = "5"
document.write("<br>", "5 * 1 =" + "&nbsp",table + 
"<br>", "5 * 2 =" + "&nbsp",  2* table+
"<br>", "5 * 3 =" +"&nbsp", 3* table +
"<br>", "5 * 4 =" +"&nbsp", 4* table+
"<br>", "5 * 5 =" +"&nbsp", 5* table+
"<br>", "5 * 6 =" + "&nbsp",6* table+
"<br>", "5 * 7 =" +"&nbsp",7* table+
"<br>", "5 * 8 =" +"&nbsp", 8* table+
"<br>", "5 * 9 =" + "&nbsp",9* table+
"<br>", "5 * 10 =" +"&nbsp", 10* table)

                  // chapter no 6 (Maths Expression II) (Home work)

// 1
var x= "x+1"
var $20 ="20"

// 2
document.write("<br>","<br>", " Ques 2)", "<br>", "x = 100, fastest way to reduce is to 99")
var x = " 100"
document.write("<br>","--x is shortest way to ", "&nbsp",--x)

// 3
document.write("<br>","<br>"," Ques 3)","<br>","var x = 50;","<br>", "var y = x++;","<br>",
"<br>","What is the value of y?")
var x = "50"
document.write("<br>","ans is: 50")

// 4
document.write("<br>","<br>"," Ques 4)","<br>","var  y= 50;","<br>", "var z = --y;","<br>",
"<br>","What is the value of z?")
var y = "50"
document.write("<br>","ans is: 49")

                    // chapter no 7 "Math Expression III"
document.write("<br>","<h3>chapter no 7 Math Expression III</h3>")

// 1
document.write("<br>","<br>","Q:1 var calculatedNum = 2 + (2 * 6);")
var calculatedNum =  2+(2*6)
document.write("<br>","Ans: ",calculatedNum)

// 2
document.write("<br>","<br>","Q:2 var calculatedNum = (2 + 2) * (4 + 2);")
var calculatedNum = (2 + 2) * (4 + 2);
document.write("<br>","Ans: ",calculatedNum)

// 3
document.write("<br>","<br>","Q:3 var calculatedNum = (2 + 2) * 6;")
var calculatedNum = (2 + 2) * 6;
document.write("<br>","Ans: ",calculatedNum)

// 4
document.write("<br>","<br>","Q:4 var calculatedNum = ((2 + 2) * 4) + 2; ")
var calculatedNum = ((2 + 2) * 4) + 2;
document.write("<br>","Ans: ",calculatedNum)

// 5
document.write("<br>","<br>","Q:5  2 + 2 * 4 + 10, clarified with parentheses, producing 56.")
document.write("<br>","Ans: (2 + 2) * (4 + 10)")

// 6
document.write("<br>","<br>","Q:6  2 + 2 * 4 + 10, clarified with parentheses, producing 20. ")
document.write("<br>","Ans: (2 + (2 * 4)) + 10")

// 7
document.write("<br>","<br>","Q:7 4 / 2 * 4,  clarified with parentheses, producing 5.")
// document.write("<br>","Ans: 4 / 2 * 4, ")

// Chapter 8 "Concatenating Text Strings"
document.write("<br>", "<<br>","<h3>Chapter 8 Concatenating Text Strings</h3>")

// 1
var num = "2" + "2"
document.write("<br>","Q1: What is the value of num? Include quotation marks.")
document.write("<br>","Ans:",num)

// 2
var message = ("Hello," + "Dolly")
alert(message);

// 3
var message = ("33" + 3);
alert(message)

// 4
var message = "Pakistan Zindabad"
alert(message)

// 5
var number = ("7" * 4);
alert(number)


             // Chapter 9 "Prompts"
document.write("<br>","<h3>Chapter 9 Prompts</h3>")

// 1
var userName = prompt("Enter first name")

// 2
var country =  prompt("Country?","chaina")

// 3
var yourName = prompt("Enter your name")

// 4
var message = prompt ("hello students","hello students")







