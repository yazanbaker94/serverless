const uuid = require("uuid").v4;
const peopleModel = require("./peopleSchema");

exports.handler = async (event) => {
  try {
    const { name, age, gender } = JSON.parse(event.body);
    const id = uuid();
    const person = new peopleModel({ id, name, age, gender });

    const data = await person.save();
    return {
      statusCode: 200,
      body: JSON.stringify(data),
      message:'Created successfully'
    };
  } catch (error) {
    return {
      status: 500,
      message: error.message,
    };
  }
};
