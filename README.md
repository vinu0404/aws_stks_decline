# Stock Value Notification Microservice

## Overview
This microservice is designed to send email notifications when a selected stock has decreased to 10% of its maximum value in a year.

## Architecture
The microservice is built using AWS services including Lambda and SES. It periodically checks the stock value and triggers an email notification if the condition is met.

## Setup Instructions
1. **Data Collection**: Use a financial API to gather historical stock data and store it in a database.
2. **Microservice Components**:
   - **Lambda Function**: Contains the logic to check stock values and trigger notifications.
   - **SES**: Used for sending email notifications.
   - **CloudWatch Events**: Triggers the Lambda function periodically.
3. **Notification Logic**:
   - Calculate the maximum value of the stock in the past year.
   - Check the current stock value.
   - If the current value is 10% or less of the maximum value, send an email notification.
4. **Integration**:
   - Set up permissions and roles for Lambda function.
   - Configure CloudWatch Events to schedule Lambda function execution.
5. **Testing and Monitoring**:
   - Test the microservice with different scenarios.
   - Monitor Lambda function execution and set up logging.
6. **Security and Compliance**:
   - Ensure data security and compliance with regulations.
   - Implement encryption for sensitive data.
7. **Scalability**:
   - Ensure the microservice is scalable to handle varying loads.


## Contributors
   Vinay Kumar
