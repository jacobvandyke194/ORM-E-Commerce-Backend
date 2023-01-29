const router = require('express').Router();
const { Tag, Product, ProductTag } = require('../../models');

// The `/api/tags` endpoint

router.get('/', async(req, res) => {
  // find all tags
  // be sure to include its associated Product data
  try {
    const tagData = await Tag.findAll({include: [{model: Product}]});
    res.json(tagData);
  } catch (error) {
    res.status(500).json(error);
  }
});


router.get('/:id', async(req, res) => {
  // find a single tag by its `id`
  // be sure to include its associated Product data
  try {
    const {id} = req.params;
    const tagData = await Tag.findByPk(id, {include: [{model: Product}]});
    res.json(tagData);
  } catch (error) {
    res.status(500).json(error);
  }
});


router.post('/', async(req, res) => {
  // create a new tag
  try {
    const {tag_name} = req.body;
    const tagData = await Tag.create({tag_name});
    res.json(tagData);
  } catch (error) {
    res.status(500).json(error);
  }
});


router.put('/:id', async(req, res) => {
  // update a tag's name by its `id` value
  try {
    const {tag_name} = req.body;
    const {id} = req.params;
    const tagData = await Tag.update({tag_name}, {where: {id}});
    res.json(tagData);
  } catch (error) {
    res.status(500).json(error);
  }
});


router.delete('/:id', async(req, res) => {
  // delete on tag by its `id` value
  try {
    const {id} = req.params;
    const tagData = await Tag.destroy({where: {id}});
    res.json(tagData);
  } catch (error) {
    res.status(500).json(error);
  }
});

module.exports = router;
