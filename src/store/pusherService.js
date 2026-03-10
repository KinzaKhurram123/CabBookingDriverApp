import {Pusher} from '@pusher/pusher-websocket-react-native';

let pusherInstance = null;

export const getPusherInstance = async () => {
  if (!pusherInstance) {
    console.log('Initializing Pusher instance...');
    pusherInstance = Pusher.getInstance();
    await pusherInstance.init({
      apiKey: '2cbabf5fca8e6316ecfe',
      cluster: 'ap2',
    });
  }
  return pusherInstance;
};

export const disconnectPusher = async channelName => {
  console.log('🚀 ~ disconnectPusher ~ channelName:', channelName);
  try {
    if (pusherInstance) {
      if (channelName) {
        console.log(`Unsubscribing from channel: ${channelName}`);
        await pusherInstance.unsubscribe({channelName});
      }
      await pusherInstance.disconnect();
      pusherInstance = null;
    } else {
      console.log('Pusher instance is already null.');
    }
  } catch (error) {
    console.error('Error while unsubscribing or disconnecting:', error);
  }
};
