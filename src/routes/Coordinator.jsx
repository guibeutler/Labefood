export const goToDefault = (navigate) => {
  navigate('/');
};

export const goToLogin = (navigate) => {
  navigate('/login');
};

export const goToFeed = (navigate) => {
  navigate('/feed');
};

export const goToAddress = (navigate) => {
  navigate('/addressRegistration');
};

export const goToSignUp = (navigate) => {
  navigate('/signup');
};

export const goToShoppingCart = (navigate) => {
  navigate('/shoppingcart');
};

export const goToProfile = (navigate) => {
  navigate('/profile');
};

export const goToSearch = (navigate) => {
  navigate('/search');
};

export const goToRestaurantDetail = (navigate, id) => {
  navigate(`/restaurant/${id}`);
};

export const goToUpdate = (navigate) => {
  navigate('/updateProfile');
}; 

export const goToBack = (navigate) => {
  navigate(-1);
};
