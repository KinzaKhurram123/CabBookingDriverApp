// export const baseUrl = 'https://e6fd-103-138-50-45.ngrok-free.app';
export const baseUrl = 'https://car-rental.cstmpanel.com';
export const imageUrl = `${baseUrl}/api/images/`;
export const profilePicUrl = `${baseUrl}/uploads`;
export const GoogleApiKey = 'AIzaSyDn4KET0DRdrsheEaBflpAee9U1zYRQ_kY';
export const apiDataLimit = 10;
export const validateEmail = email => {
  const re =
    /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(String(email).toLowerCase());
};
