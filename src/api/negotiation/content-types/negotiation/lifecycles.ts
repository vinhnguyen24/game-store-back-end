import { errors } from "@strapi/utils";
const { ApplicationError } = errors;

export default {
  async beforeCreate(event) {
    const { data } = event.params;
    console.log(data.buyer, data.account, event.action);
    const buyerId = data.buyer?.connect?.[0]?.id;
    const accountId = data.account?.connect?.[0]?.id;

    if (!buyerId || !accountId) {
      throw new Error("Thiếu thông tin buyer hoặc account.");
    }

    const existing = await strapi.db
      .query("api::negotiation.negotiation")
      .findOne({
        where: {
          buyer: buyerId,
          account: accountId,
          statusTransaction: "pending",
        },
      });

    if (existing) {
      throw new errors.ApplicationError(
        "Bạn đã gửi đề nghị thương lượng và đang chờ phản hồi."
      );
    }
  },
};
