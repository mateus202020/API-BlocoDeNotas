const {Router} = require("express");

const TagsController = require("../controllers/TagsController");

const ensureAuthenticatd = require("../middleware/ensureAuthenticatd");

const tagsRoutes = Router();

const tagsController = new TagsController();

tagsRoutes.get("/", ensureAuthenticatd, tagsController.index);

module.exports = tagsRoutes;