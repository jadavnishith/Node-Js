# Crud Using express

1. Imports: We import express and body-parser. Express is our web framework, and body-parser helps us parse incoming request bodies, especially from forms.

# Middleware:
=> bodyParser.urlencoded() allows us to parse URL-encoded data (like form submissions).
=> app.set('view engine', 'ejs') tells Express to use EJS as our templating engine.




# <%%>


=> In EJS (Embedded JavaScript), <%%> is used for escaping JavaScript code within the template. It allows you to include code without it being evaluated or executed.

=> Here's a breakdown:

1. <% %>: This syntax is used to run JavaScript code.
2. <%= %>: This syntax outputs the value of a JavaScript expression to the template.
3. <%%>: This allows you to write raw <% and %> without them being interpreted as EJS code.

=> For example:

=>   <%% 
        // This will not be executed
        console.log("This won't show in the output");
    %>

=> Using <%%> is helpful when you need to display the EJS tags themselves in the rendered output.



# body-parser

=> body-parser is a middleware for Node.js that is used to parse incoming request bodies in a middleware before your handlers, available under the req.body property. It's commonly used with Express.js applications.

# Key Features:

=> Parsing JSON: It can parse incoming requests with JSON payloads.

=> URL-encoded Data: It can also handle URL-encoded data, which is typically used when submitting forms.

=> Custom Parsing: You can configure it for custom data types and handle various content types.