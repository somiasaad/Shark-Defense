import axios from 'axios';

const SlackService = (token, channel) => {
  const axiosInstance = axios.create({
    headers: {
      'Content-Type': 'application/json; charset=UTF-8',
      'Authorization': `Bearer ${token}`,
    },
  });

  const sendMessage = async ({ message, text1, checkRadio1, checkRadio2}) => {
    const url = 'https://slack.com/api/chat.postMessage';
    const data = {
      channel: channel,
      text: message,
      blocks: [
        {
          type: 'section',
          text: {
            type: 'mrkdwn',
            text: message,
          },
        },
      ],
    };

    if (text1) {
      data.blocks.push({
        type: 'section',
        text: {
          type: 'mrkdwn',
          text: text1,
        },
      });
    }

    if (checkRadio1) {
      data.blocks.push({
        type: 'section',
        text: {
          type: 'mrkdwn',
          text: checkRadio1,
        },
      });
    }

    if (checkRadio2) {
      data.blocks.push({
        type: 'section',
        text: {
          type: 'mrkdwn',
          text: checkRadio2,
        },
      });
    }

    try {
      const response = await axiosInstance.post(url, data);
      if (response.status !== 200 || !response.data.ok) {
        throw new Error(`Failed to send message to Slack: ${response.data}`);
      }
    } catch (error) {
      console.error('Error sending message to Slack:', error);
      throw error; // Re-throw the error to handle it in the component
    }
  };

  return { sendMessage };
};

export default SlackService;
