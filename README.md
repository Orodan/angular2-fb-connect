### Angular2 app showing how to connect to fb

This app is an example to show how to connect to fb using angular2.

## Configuration

First you need to have a developer account and to registrer a new application [there](https://developers.facebook.com)

Then, add a new plateform and select 'website'.

Add your local server address the website url section and to the app domains (in my case a simple http://localhost).

Finally, in the facebook.service.ts file, make sure to replace the appId value with the application id you can see on the dashboard of the app you just registred.

One final word : I included the typings folder because you need to make sure to have the typings file for the fb sdk included.