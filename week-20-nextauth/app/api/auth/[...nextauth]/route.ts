import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
// import GoogleProvider from "next-auth/providers/google";
// import GitHubProvider from "next-auth/providers/github";

const handler = NextAuth({
    providers: [
        CredentialsProvider({
            // The name to display on the sign in form (e.g. "Sign in with...")

            name: "Login with email",

            // `credentials` is used to generate a form on the sign in page.
            // You can specify which fields should be submitted, by adding keys to the `credentials` object.
            // e.g. domain, username, password, 2FA token, etc.
            // You can pass any HTML attribute to the <input> tag through the object.
            
            credentials: {
              username: { label: "Username", type: "text", placeholder: "john doe" },
              password: { label: "Password", type: "password" }
            },

            async authorize(credentials, req) {

              // Add logic here to look up the user from the credentials supplied
              const username = credentials?.username;
              const password = credentials?.password;

              // db request to check if user exists
              const user = {
                name: "harkirat",
                id: "1",
                username: "harkirat@gmail.com"
              }
        
              if (user) {
                // Any object returned will be saved in `user` property of the JWT
                return user
              } else {
                // If you return null then an error will be displayed advising the user to check their details.
                return null
        
                // You can also Reject this callback with an Error thus the user will be sent to the error page with the error message as a query parameter
              }
            }
          })

        // GoogleProvider({
        //     clientId: process.env.GOOGLE_CLIENT_ID,
        //     clientSecret: process.env.GOOGLE_CLIENT_SECRET
        // })

        // GitHubProvider({
        //     clientId: process.env.GITHUB_ID,
        //     clientSecret: process.env.GITHUB_SECRET
        //   })
    ],
    secret: process.env.NEXTAUTH_SECRET
})

export const GET = handler;
export const POST = handler;