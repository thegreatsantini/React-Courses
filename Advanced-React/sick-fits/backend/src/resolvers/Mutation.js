const Mutations = {
  async createItem(parent, args, ctx, info) {
    // Check if they are logged in
    const item = await ctx.db.mutation.createItem(
      {
        ...args
      },
      info
    );
    return item;
  }
};

module.exports = Mutations;
