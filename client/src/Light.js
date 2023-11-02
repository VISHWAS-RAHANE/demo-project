import React, { useEffect, useState } from "react";
import Button from "react-bootstrap/Button";
import "./Light.css";
import axios from 'axios';
const Light = () => {
  const [light, SetLight] = useState(false);
  const [accessToken, setAccessToken] = useState(null);
  const onBulb = () => {
    SetLight(!light);
  };

  useEffect(() => {
    // Define your Slack API endpoint and parameters
    const endpoint = 'https://slack.com/api/oauth.v2.exchange';
    const clientId = '6122101013216.6111826626689';
    const clientSecret = 'a50109d8a171a0f969aa6fa4a418e765';
    const code = 'yC8NIogZcHLXnpLLkWSRb90e';

    
    const exchangeOAuthCode = async () => {
      try {
        const response = await axios.post(endpoint, null, {
          params: {
            client_id: clientId,
            client_secret: clientSecret,
            token: code,
          },
        });
        const { data } = response;
        // Retrieve the access token from the response
        const { access_token } = data;
        setAccessToken(access_token);
      } catch (error) {
        console.error('Error exchanging code for access token:', error);
      }
    };

    // Call the function to exchange the OAuth code when the component mounts
    exchangeOAuthCode();
  }, []);

  return (
    <div>
      <div className="container">
        <div className={light === true ? "row" : "row1"}></div>
      </div>
      {light === true ? (
        <Button variant="danger" onClick={onBulb}>
          OFF
        </Button>
      ) : (
        <Button variant="success" onClick={onBulb}>
          ON
        </Button>
        
      )}
      
    </div>
    
  );
};

export default Light;
