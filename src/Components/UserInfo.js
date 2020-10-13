
export default class UserInfo {
  constructor({ userName, userProfession }) {
    this._name = userName;
    this._profession = userProfession;

  }

  getUserInfo() {
    return {
      name: this._name.textContent,
      profession: this._profession.textContent,
    }
  }

  setUserInfo(data) {
    this._name.textContent = data.name;
    this._profession.textContent = data.profession;
  }
}
