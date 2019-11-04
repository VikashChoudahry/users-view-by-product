const UserViews = require('../../app/models/userViews');

class ProductView {
  async getViewers(productID, startDate, endDate) {
    try {
      const query = this.buildQuery(productID, startDate, endDate);
      const users = await query.lean().exec();
      const userDetails = [];
      users.forEach((user) => { userDetails.push(user.UserID); }, { userDetails });
      return userDetails;
    } catch (err) { return []; }
  }

  buildQuery(productID, startDate, endDate) {
    let query = UserViews.where('productID').equals(productID);
    if (startDate || endDate) {
      query = query.where('viewDate');
      if (startDate) { query = query.gte(startDate); }
      if (endDate) { query = query.lte(endDate); }
    }
    return query;
  }

  getProductVisitCountByUser(users, isUnique) {
    return `${isUnique ? 'Unique' : 'Total'} Visits: ${
      isUnique ? [...new Set(users)].length : users.length
    }`;
  }
}

module.exports = ProductView;
