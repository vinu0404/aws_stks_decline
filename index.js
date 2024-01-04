const yahooFinance = require('yahoo-finance');
const AWS = require('aws-sdk');
const nodemailer = require('nodemailer');

AWS.config.update({ region: 'your-region' }); 
const ses = new AWS.SES();


const transporter = nodemailer.createTransport({
  SES: { ses, aws: { region: 'your-region' } }
});

exports.handler = async (event, context) => {
  try {
    const stockSymbol = 'TATA';


    const stockData = await yahooFinance.quote({
      symbol: stockSymbol,
      modules: ['price']
    });

  
    const currentPrice = stockData.price.regularMarketPrice.raw;
    const companyName = stockData.price.shortName;

    
    if (checkCondition(currentPrice)) {
      const subject = `Stock Alert: ${companyName} - Price Drop Alert`;
      const body = `The stock price of ${companyName} has dropped to $${currentPrice}.`;

      await sendEmail(subject, body);
    }

    return { statusCode: 200, body: 'Success' };
  } catch (error) {
    console.error('Error:', error);
    return { statusCode: 500, body: 'Error' };
  }
};

function checkCondition(currentPrice) {
  const dipThreshold = 0.9; 
  return currentPrice < dipThreshold;
}

async function sendEmail(subject, body) {
  const params = {
    Destination: {
      ToAddresses: ['22CD3034@rgipt.ac.in'] 
    },
    Message: {
      Body: {
        Text: {
          Data: body
        }
      },
      Subject: {
        Data: subject
      }
    },
    Source: '22CD3034@rgipt.ac.in' 
  };

  await ses.sendEmail(params).promise();
}


//***********************npm install yahoo-finance aws-sdk nodemailer      run this cmd */