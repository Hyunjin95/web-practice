You need to install Serverless by typing `npm install -g serverless`

# To configure credentials
`serverless config credentials --provider YOUR_PROVIDER --key YOUR_PUBLIC_KEY --secret YOUR_SECRET_KEY`

# To deploy the function
`serverless deploy`

# To run the function
`serverless invoke --function FUNCTION_NAME` or

`serverless invoke local --function FUNCTION_NAME` to run the function locally.