const categoryMode = require('./model');

exports.getCategories = async () => {
    return await categoryMode.find();
}





var data = [{
    "_id": 1,
    "name": "Lettuce - Spring Mix",
    "description": "Sed ante. Vivamus tortor. Duis mattis egestas metus."
}, {
    "_id": 2,
    "name": "Napkin - Beverage 1 Ply",
    "description": "Mauris enim leo, rhoncus sed, vestibulum sit amet, cursus id, turpis. Integer aliquet, massa id lobortis convallis, tortor risus dapibus augue, vel accumsan tellus nisi eu orci. Mauris lacinia sapien quis libero."
}, {
    "_id": 3,
    "name": "Wine - Rosso Del Veronese Igt",
    "description": "Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Vivamus vestibulum sagittis sapien. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus."
}, {
    "_id": 4,
    "name": "Sauce - Salsa",
    "description": "Nulla ut erat id mauris vulputate elementum. Nullam varius. Nulla facilisi."
}, {
    "_id": 5,
    "name": "Cheese - Brie",
    "description": "Duis bibendum. Morbi non quam nec dui luctus rutrum. Nulla tellus."
}, {
    "_id": 6,
    "name": "Apricots - Halves",
    "description": "Phasellus sit amet erat. Nulla tempus. Vivamus in felis eu sapien cursus vestibulum."
}, {
    "_id": 7,
    "name": "Pasta - Penne, Lisce, Dry",
    "description": "Fusce posuere felis sed lacus. Morbi sem mauris, laoreet ut, rhoncus aliquet, pulvinar sed, nisl. Nunc rhoncus dui vel sem."
}, {
    "_id": 8,
    "name": "Wine - Chenin Blanc K.w.v.",
    "description": "In congue. Etiam justo. Etiam pretium iaculis justo."
}, {
    "_id": 9,
    "name": "Otomegusa Dashi Konbu",
    "description": "In sagittis dui vel nisl. Duis ac nibh. Fusce lacus purus, aliquet at, feugiat non, pretium quis, lectus."
}, {
    "_id": 10,
    "name": "Garam Marsala",
    "description": "Proin interdum mauris non ligula pellentesque ultrices. Phasellus id sapien in sapien iaculis congue. Vivamus metus arcu, adipiscing molestie, hendrerit at, vulputate vitae, nisl."
}]

