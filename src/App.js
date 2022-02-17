import React from 'react';
import logo from './transakLogo.png';
import './App.css';

import transakSDK from "@transak/transak-sdk";

const settings = {
    apiKey: 'cf5868eb-a8bb-45c8-a2db-4309e5f8b412',  // Your API Key
    environment: 'STAGING', // STAGING/PRODUCTION
    defaultCryptoCurrency: 'ETH',
    themeColor: '000000', // App theme color
    hostURL: window.location.origin,
    widgetHeight: "700px",
    widgetWidth: "500px",
}

export function openTransak() {
    const transak = new transakSDK(settings);

    transak.init();

    // To get all the events
    transak.on(transak.ALL_EVENTS, (data) => {
        console.log(data)
    });

    // This will trigger when the user closed the widget
    transak.on(transak.EVENTS.TRANSAK_WIDGET_CLOSE, (eventData) => {
        console.log(eventData);
        transak.close();
    });

    // This will trigger when the user marks payment is made.
    transak.on(transak.EVENTS.TRANSAK_ORDER_SUCCESSFUL, (orderData) => {
        console.log(orderData);
        window.alert("Payment Success")
        transak.close();
    });
}


function App() {
    return (
        <div className="App">
            <header className="App-header">
                <img src={logo} className="App-logo" alt="logo" />
                <h3>
                    Let mainstream users buy crypto in your app

                    Onboard more users to crypto and increase revenue through a simple developer integration.
                </h3>
                <button onClick={() => openTransak()}>
                    Buy Crypto
                </button>
            </header>
        </div>
    );
}

export default App;