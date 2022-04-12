var express = require('express');
var router = express.Router();

const productController = require('../components/products/controller');
const categoryController = require('../components/categories/controller');

const upload = require('../middle/upload');
const authen = require('../middle/authen');

/**
 * page: product
 * http://localhost:3000/san-pham
 * method: get
 * detail: get list products
 * author: Chấn Nguyễn
 * date: 17th March 2022 11:05
 */
router.get('/', [authen.checkLogin], async function (req, res, next) {
  // lấy danh sách sản phẩm
  const data = await productController.getProducts();
  res.render('products', { products: data });
});

/**
 * page: product
 * http://localhost:3000/san-pham
 * method: post
 * detail: insert new product
 * author: Chấn Nguyễn
 * date: 17th March 2022 11:05
 */
// middleware
router.post('/', [upload.single('image'), authen.checkLogin], async function (req, res, next) {
  // xử lý thêm mới sản phẩm
  let { body, file } = req;
  let image = '';
  if (file) {
    image = `http://localhost:3000/images/${file.filename}`;
  }
  body = { ...body, image };
  await productController.insert(body);
  res.redirect('/san-pham');
});


/**
 * page: product insert
 * http://localhost:3000/san-pham/insert
 * method: get
 * detail: insert new product
 * author: Chấn Nguyễn
 * date: 22th March 2022 10:30
 */
router.get('/insert', [authen.checkLogin], async function (req, res, next) {
  // hiển thị trang thêm mới
  const categories = await categoryController.getCategories();
  res.render('product_insert', { categories: categories });
});


/**
 * page: product
 * http://localhost:3000/san-pham/:id/delete
 * method: delete
 * detail: delete product
 * author: Chấn Nguyễn
 * date: 17th March 2022 11:05
 */
router.delete('/:id/delete', [authen.checkLogin], async function (req, res, next) {
  // xử lý xóa sản phẩm
  const { id } = req.params;
  await productController.delete(id);  //// mới thêm
  // trả về json
  res.json({ result: true }); // mới thêm
});

/**
 * page: product
 * http://localhost:3000/san-pham/:id/edit
 * method: get
 * detail: get one product
 * author: Chấn Nguyễn
 * date: 17th March 2022 11:05
 */
router.get('/:id/edit', [authen.checkLogin], async function (req, res, next) {
  // xử lý lấy một sản phẩm
  const { id } = req.params;
  // lấy chi tiết sản phẩm
  const product = await productController.getById(id);
  // lấy danh mục
  const categories = await categoryController.getCategories();
  res.render('product', { product: product, categories: categories });
});


/**
 * page: product
 * http://localhost:3000/san-pham/:id/edit
 * method: post
 * detail: update one product
 * author: Chấn Nguyễn
 * date: 17th March 2022 11:05
 */
router.post('/:id/edit', [upload.single('image'), authen.checkLogin], async function (req, res, next) {
  // xử lý cập nhật một sản phẩm
  let { params, file, body } = req;
  delete body.image;

  if (file) {
    let image = `http://localhost:3000/images/${file.filename}`;
    body = { ...body, image };
  }
  await productController.update(params.id, body);

  res.redirect('/san-pham');
});

module.exports = router;