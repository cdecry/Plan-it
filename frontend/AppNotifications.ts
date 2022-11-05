export const sendNotification = (token: string, title: string, body: string, data={}) => {
        fetch('https://exp.host/--/api/v2/push/send', {
        method: 'POST',
        body: JSON.stringify({
            to: token,
            data: data,
            title: title,
            body: body,
        })
    }).catch(error => console.log('error: ', error));
};
