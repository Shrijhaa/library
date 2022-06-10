class User {
  constructor(_id, name, token, email, type, date, due, bookCount) {
    this._id = _id;
    this.name = name;
    this.token = token;
    this.email = email;
    this.type = type;
    this.createdDate = date;
    this.due = due;
    this.bookCount = bookCount;
  }
}

export default User;
