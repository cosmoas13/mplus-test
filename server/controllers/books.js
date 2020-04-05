const models = require("../models");
const Authors = models.author;
const Books = models.book;
const Types = models.type;

exports.index = async (req, res) => {
  try {
    const data = await Books.findAll({
      include: [
        {
          model: Authors,
          as: "author",
          attributes: ["id", "name"]
        },
        {
          model: Types,
          as: "type",
          attributes: ["id", "name"]
        }
      ],
      attributes: {
        exclude: ["createdAt", "updatedAt"]
      }
    });
    res.status(200).send({ status: true, message: "success", data });
  } catch (err) {
    res.status(404).send({ status: false });
  }
};

exports.store = async (req, res) => {
  try {
    const { title, id_author, id_type, date_published, pages } = req.body;
    await Books.create({
      title,
      id_author,
      id_type,
      date_published,
      pages
    });
    const data = await Books.findAll({
      include: [
        {
          model: Authors,
          as: "author",
          attributes: ["id", "name"]
        },
        {
          model: Types,
          as: "type",
          attributes: ["id", "name"]
        }
      ],
      attributes: {
        exclude: ["createdAt", "updatedAt"]
      }
    });
    res.status(200).send({ status: true, message: "success", data });
  } catch (err) {
    console.log(err);
  }
};

exports.update = async (req, res) => {
  const { id } = req.params;
  const { title, id_author, id_type, date_published, pages } = req.body;
  try {
    const data = await Books.findOne({
      where: { id }
    });
    if (data) {
      await data.update({
        title,
        id_author,
        id_type,
        date_published,
        pages
      });
      res.status(201).send({
        status: true,
        message: "book has been update",
        data: data
      });
    } else {
      res.status(400).json({
        status: "failed",
        code: "400",
        message: "Wrong ID"
      });
    }
  } catch (err) {
    console.log(err);
  }
};

exports.destroy = async (req, res) => {
  const id = req.params.id;
  try {
    await Books.destroy({ where: { id } });
    const data = await Books.findAll({});
    res.status(200).send({ status: true, message: "delete success", data, id });
  } catch (err) {
    console.log(err);
  }
};

exports.type = async (req, res) => {
  try {
    const data = await Types.findAll({
      attributes: ["id", "name"]
    });
    res.status(200).send({ status: true, message: "success", data });
  } catch (err) {
    res.status(404).send({ status: false });
  }
};

exports.author = async (req, res) => {
  try {
    const data = await Authors.findAll({
      attributes: ["id", "name"]
    });
    res.status(200).send({ status: true, message: "success", data });
  } catch (err) {
    res.status(404).send({ status: false });
  }
};
