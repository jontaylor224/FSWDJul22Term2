# Example 1: Raw HTTP GET Request
```
GET /hello.htm HTTP/1.1
User-Agent: Mozilla/4.0 (compatible; MSIE5.01; Windows NT)
Host: www.tutorialspoint.com
Accept-Language: en-us
Accept-Encoding: gzip, deflate
Connection: Keep-Alive
```

## Line 1 - The Request Line

1. Request Method - There are a number of request methods that can be used when making HTTP requests. The most commonly used (and the ones that we will use) are:
   1. `GET` -> the request is asking to GET something back without giving something to add to the server
   2. `POST` -> the request is looking to add information to the server
   3. `PUT` -> the request is looking to replace a piece of information on the server
   4. `PATCH` -> the request is looking to update a piece of information on the server
   5. `DELETE` -> the request is looking to REMOVE information from the server
2. The URL -> the final destination of the request itself.
  The URL is what comes after the host url (that's a couple lines later), and each URL has an `endpoint` on the server
3. Protocol version (we're not too concerned with this)

## Line 2: User-Agent
The User-Agent line gives us info about the type of app the request is coming from, but we don't really need to worry too much about that from the back end. 

## Line 3: Host
The host is the domain that the application is running on.

# Example 2: Raw HTTP POST Request

```
POST /cgi-bin/process.cgi HTTP/1.1
User-Agent: Mozilla/4.0 (compatible; MSIE5.01; Windows NT)
Host: www.tutorialspoint.com
Content-Type: application/x-www-form-urlencoded
Content-Length: length
Accept-Language: en-us
Accept-Encoding: gzip, deflate
Connection: Keep-Alive

licenseID=string&content=string&/paramsXML=string
```

## Content-Type
The Content-Type line of the request tells the server what type of information is involved in this request. For our apps, everything will be `application/json`

## BODY
The body of a request is how you can send specific information to the server without embedding it in the url. When we send a `POST` request, we'll typically be sending the data we wish to add to the server as the request body. The same goes for `PUT` and `PATCH` requests, with the updated information being included in the body. 


# KEY INFO FROM THE REQUEST
1. Method -> Is the request looking to just receive information? Or create new information? Or edit information? Or delete information?
2. URL -> Paired with the method, this determines the final endpoint. What should happen when a request is sent to this URL as a certain request method type? 
3. Body -> Body is not included in every request (url and method are), but when we have a request that involves sending data to the server, the body is almost always used.

## Other methods of retrieving data from a request (aside from the body):
1. Request parameters (nothing in the raw request actually indicates this, it's just a portion of the url that our server is told is a parameter)
2. Query string parameters (any url that includes `?something=something` has a query string attached to it)