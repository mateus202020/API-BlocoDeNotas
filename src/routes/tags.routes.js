const {Router} = require ("express");

const TagsController = require("../controllers/TagsController");
const ensureAuthenticated = require("../middleware/ensureAuthenticatd");

const tagsRoutes = Router();

const tagsController = new TagsController();

tagsRoutes.get("/", ensureAuthenticated, tagsController.index);


module.exports = tagsRoutes;