const peopleModel = require("./peopleSchema");

exports.handler = async (event) => {
  try {
    const id = event.pathParameters ? event.pathParameters.id : null;
    const { name, haircolor, lastname } = JSON.parse(event.body);
    let data = await peopleModel.update({ id: id }, { name, haircolor, lastname });
    return {
      statusCode: 200,
      body: JSON.stringify(data),
    };
  } catch (error) {
    return {
      status: 500,
      message: error.message,
    };
  }
};
