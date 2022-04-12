const productModel = require('./model');
/**
 * service: tầng giao tiếp với database
 */

/**
 * lấy danh sách tất cả sản phẩm từ database
 */
exports.getProducts = async () => {
  const products = await productModel.find().populate('category_id')
  return products;
}


/**
 * lấy chi tiết 1 sản phẩm
 */
exports.getById = async (id) => {
  // const product = data.filter(item => item._id == id)[0];
  // return product;
  const product = await productModel.findById(id).populate('category_id')
  return product;
}


/**
 * thêm mới sản phẩm
 */
exports.insert = async (product) => {
  const p = new productModel(product);
  await p.save();
  data.push(product);
}

/**
 * xóa sản phẩm
 */
exports.delete = async(id) => {
  // data = data.filter(item => item._id != id) // mới
  await productModel.findByIdAndDelete(id);
}
/**
 * sửa sản phẩm
 * spread operator
 */
exports.update = async (id, product) =>{
  // data = data.map(item => {
  //   if(item._id == id){
  //     item = {...item, ... product}
  //   }
  //   return item
  // })
  await productModel.findByIdAndUpdate(id);
}

var data = [{
  "_id": 1,
  "name": "Plastic Wrap",
  "price": 97,
  "quantity": 69,
  "image": "https://cdn.tgdd.vn/2022/03/campaign/Group46738-387x507.png",
  "description": "Mauris enim leo, rhoncus sed, vestibulum sit amet, cursus id, turpis. Integer aliquet, massa id lobortis convallis, tortor risus dapibus augue, vel accumsan tellus nisi eu orci. Mauris lacinia sapien quis libero.",
  "category_id": {
    "_id": 1,
    "name": "Lettuce - Spring Mix",
    "description": "Sed ante. Vivamus tortor. Duis mattis egestas metus."
  },
  "released": "2022-03-08"
}, {
  "_id": 2,
  "name": "Oil - Truffle, Black",
  "price": 61,
  "quantity": 41,
  "image": "https://cdn.tgdd.vn/2022/03/campaign/Group46738-387x507.png",
  "description": "Curabitur at ipsum ac tellus semper interdum. Mauris ullamcorper purus sit amet nulla. Quisque arcu libero, rutrum ac, lobortis vel, dapibus at, diam.",
  "category_id": {
    "_id": 2,
    "name": "Napkin - Beverage 1 Ply",
    "description": "Mauris enim leo, rhoncus sed, vestibulum sit amet, cursus id, turpis. Integer aliquet, massa id lobortis convallis, tortor risus dapibus augue, vel accumsan tellus nisi eu orci. Mauris lacinia sapien quis libero."
  },
  "released": "2021-12-15"
}, {
  "_id": 3,
  "name": "Plasticspoonblack",
  "price": 10,
  "quantity": 84,
  "image": "https://cdn.tgdd.vn/2022/03/campaign/Group46738-387x507.png",
  "description": "Fusce posuere felis sed lacus. Morbi sem mauris, laoreet ut, rhoncus aliquet, pulvinar sed, nisl. Nunc rhoncus dui vel sem.",
  "category_id": {
    "_id": 3,
    "name": "Wine - Rosso Del Veronese Igt",
    "description": "Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Vivamus vestibulum sagittis sapien. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus."
  },
  "released": "2021-07-31"
}, {
  "_id": 4,
  "name": "Coffee Decaf Colombian",
  "price": 80,
  "quantity": 4,
  "image": "https://cdn.tgdd.vn/2022/03/campaign/Group46738-387x507.png",
  "description": "In hac habitasse platea dictumst. Etiam faucibus cursus urna. Ut tellus.",
  "category_id": {
    "_id": 4,
    "name": "Sauce - Salsa",
    "description": "Nulla ut erat id mauris vulputate elementum. Nullam varius. Nulla facilisi."
  },
  "released": "2021-05-09"
}, {
  "_id": 5,
  "name": "Soup - Knorr, Country Bean",
  "price": 41,
  "quantity": 60,
  "image": "https://cdn.tgdd.vn/2022/03/campaign/Group46738-387x507.png",
  "description": "Cras non velit nec nisi vulputate nonummy. Maecenas tincidunt lacus at velit. Vivamus vel nulla eget eros elementum pellentesque.",
  "category_id": {
    "_id": 5,
    "name": "Cheese - Brie",
    "description": "Duis bibendum. Morbi non quam nec dui luctus rutrum. Nulla tellus."
  },
  "released": "2021-05-14"
}, {
  "_id": 6,
  "name": "Lady Fingers",
  "price": 41,
  "quantity": 16,
  "image": "https://cdn.tgdd.vn/2022/03/campaign/Group46738-387x507.png",
  "description": "Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Vivamus vestibulum sagittis sapien. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.",
  "category_id": {
    "_id": 6,
    "name": "Apricots - Halves",
    "description": "Phasellus sit amet erat. Nulla tempus. Vivamus in felis eu sapien cursus vestibulum."
  },
  "released": "2022-02-16"
}, {
  "_id": 7,
  "name": "Crab Meat Claw Pasteurise",
  "price": 59,
  "quantity": 87,
  "image": "https://cdn.tgdd.vn/2022/03/campaign/Group46738-387x507.png",
  "description": "Proin leo odio, porttitor id, consequat in, consequat ut, nulla. Sed accumsan felis. Ut at dolor quis odio consequat varius.",
  "category_id": {
    "_id": 7,
    "name": "Pasta - Penne, Lisce, Dry",
    "description": "Fusce posuere felis sed lacus. Morbi sem mauris, laoreet ut, rhoncus aliquet, pulvinar sed, nisl. Nunc rhoncus dui vel sem."
  },
  "released": "2022-03-04"
}, {
  "_id": 8,
  "name": "Carbonated Water - Peach",
  "price": 64,
  "quantity": 73,
  "image": "https://cdn.tgdd.vn/2022/03/campaign/Group46738-387x507.png",
  "description": "Cras non velit nec nisi vulputate nonummy. Maecenas tincidunt lacus at velit. Vivamus vel nulla eget eros elementum pellentesque.",
  "category_id": {
    "_id": 8,
    "name": "Wine - Chenin Blanc K.w.v.",
    "description": "In congue. Etiam justo. Etiam pretium iaculis justo."
  },
  "released": "2021-12-08"
}, {
  "_id": 9,
  "name": "Green Scrubbie Pad H.duty",
  "price": 89,
  "quantity": 40,
  "image": "https://cdn.tgdd.vn/2022/03/campaign/Group46738-387x507.png",
  "description": "In sagittis dui vel nisl. Duis ac nibh. Fusce lacus purus, aliquet at, feugiat non, pretium quis, lectus.",
  "category_id": {
    "_id": 9,
    "name": "Otomegusa Dashi Konbu",
    "description": "In sagittis dui vel nisl. Duis ac nibh. Fusce lacus purus, aliquet at, feugiat non, pretium quis, lectus."
  },
  "released": "2022-03-01"
}, {
  "_id": 10,
  "name": "Chocolate - Semi Sweet, Calets",
  "price": 97,
  "quantity": 93,
  "image": "https://cdn.tgdd.vn/2022/03/campaign/Group46738-387x507.png",
  "description": "Aliquam quis turpis eget elit sodales scelerisque. Mauris sit amet eros. Suspendisse accumsan tortor quis turpis.",
  "category_id": {
    "_id": 10,
    "name": "Garam Marsala",
    "description": "Proin interdum mauris non ligula pellentesque ultrices. Phasellus id sapien in sapien iaculis congue. Vivamus metus arcu, adipiscing molestie, hendrerit at, vulputate vitae, nisl."
  },
  "released": "2021-08-19"
}]