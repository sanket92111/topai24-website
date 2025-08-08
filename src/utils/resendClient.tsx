
interface EmailBody{
    subject: string
    fullName:string
    email:string
    phone : string
    message: string
}
function GetHTMLBody({fullName,email,phone,message}:EmailBody ){
    let html = `
<!DOCTYPE html>
<html lang="en" style="font-family: Arial, sans-serif; background-color: #f9f9f9; padding: 20px;">
<head>
  <meta charset="UTF-8">
  <title>New Contact Message</title>
</head>
<body style="background-color: #ffffff; max-width: 600px; margin: auto; padding: 20px; border-radius: 8px; box-shadow: 0 2px 8px rgba(0,0,0,0.1);">

  <h2 style="color: #333333;">📩 New Contact Message</h2>

  <table style="width: 100%; margin-top: 20px; border-collapse: collapse;">
    <tr>
      <td style="padding: 8px; font-weight: bold;">Full Name:</td>
      <td style="padding: 8px;">${fullName}</td>
    </tr>
    <tr>
      <td style="padding: 8px; font-weight: bold;">Email Address:</td>
      <td style="padding: 8px;">${email}</td>
    </tr>
    <tr>
      <td style="padding: 8px; font-weight: bold;">Phone Number:</td>
      <td style="padding: 8px;">${phone}</td>
    </tr>
  </table>

  <h3 style="color: #333333; margin-top: 30px;">📝 Message:</h3>
  <p style="background-color: #f0f0f0; padding: 15px; border-radius: 5px; white-space: pre-wrap;">
    ${message}
  </p>

  <p style="font-size: 12px; color: #888888; margin-top: 40px; text-align: center;">
    This message was sent from your website contact form.
  </p>

</body>
</html>
`;
return html

}

export async function sendEmail(requirements:EmailBody) : Promise<number> {
    const response = await fetch('https://5fnq5t8wu2.execute-api.ap-south-1.amazonaws.com/v1/send-email', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({  subject:requirements.subject, html:GetHTMLBody(requirements) }),
    });
  
    const data = response.status;
    return data;
  }
  