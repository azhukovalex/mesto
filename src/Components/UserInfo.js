
export default class UserInfo {
  constructor(userData, avatarData) {
    this._name = userData.profileTitle;
    this._usePprofession = userData.profileSubtitle;
    this._avatar = avatarData;
  }

  getUserInfo() {
    return {
      name: this._name.textContent,
      about: this._usePprofession.textContent,
      avatar: this._avatar.textContent,
    }
  }

  setUserInfo(data) {
    this._name.textContent = data.name;
    this._usePprofession.textContent = data.about;
    this._avatar.src = data.avatar;
    this._name.id = data._id;
   this._avatar.alt = data.name;
  }

  setUserAvatar(data) {
    this._avatar.src = data.avatar;
};
}
