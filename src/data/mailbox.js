export const mail_fixtures = [
    {
        id: 1,
        name: "Inbox",
        emails: [
            {
                id: 1,
                from: "joe@tryolabs.com",
                to: "fernando@tryolabs.com",
                subject: "Meeting",
                body: "hi"
            },
            {
                id: 2,
                from: "newsbot@tryolabs.com",
                to: "fernando@tryolabs.com",
                subject: "News Digest",
                body: "<h1>Intro to React</h1> <img src='https://raw.githubusercontent.com/wiki/facebook/react/react-logo-1000-transparent.png' width=300/)>"
            }
        ]
    },
    {
        id: 2,
        name: "Spam",
        emails: [
            {
                id: 3,
                from: "nigerian.prince@gmail.com",
                to: "fernando@tryolabs.com",
                subject: "Obivous 419 scam",
                body: "You've won the prize!!!1!1!!!"
            }
        ]
    }
];
