const { Router } = require('express')

const NotesController = require('../controllers/NotesController')

const ensureAuthenticated = require("../middleware/ensureAuthenticatd");

const notesRoutes = Router()

const notesController = new NotesController()

notesRoutes.use(ensureAuthenticated);

notesRoutes.get("/", notesController.index);
notesRoutes.post("/:user_id", notesController.create);
notesRoutes.get("/:id", notesController.show);
notesRoutes.delete("/:id", notesController.delete);



module.exports = notesRoutes
