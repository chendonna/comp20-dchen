Donna Chen
Comp20-Lab6

ReadMe.txt

1. The Json parses correctly so I am assuming that I have implemented everything correctly.
2. I did not work with anyone on this lab.
3. I spent approximately an hour on this lab.

Question: Is it possible to request the data from a different origin (e.g., http://messagehub.herokuapp.com/) or 
from your local machine (from file:///) from using XMLHttpRequest? Why or why not?
	It is impossible for the web page to request data from a different origin. This is mainly in part due to the
	Same Origin Policy. This policy does not allow for a webpage to access other data from different origins (have
	different protocols, hosts, or ports). This is mainly for security reasons so to protect the webpage from
	potentially malicious documents. Without the policy, other people could have acess to incredibly private 
	details such as bank information, logins, etc.  