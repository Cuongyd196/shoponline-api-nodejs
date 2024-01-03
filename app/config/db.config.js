
// Giải thích đoạn code bên dưới
// 1. Import module mongoose
// 2. Import module dotenv để đọc biến môi trường từ file .env (nếu có)
    // Thầy sử dụng require('dotenv').config() nên cần khai báo, các bạn ko cần nên bỏ qua
// 3. Khai báo biến MONGO_URI
// 4. Khai báo hàm db_connect để kết nối với MongoDB
// 5. Export module db_connect để sử dụng ở file khác

const mongoose = require('mongoose');
require('dotenv').config()
const MONGO_URI =  process.env.MONGO_URI || 'mongodb://127.0.0.1/Example';
console.log('MONGO_URI:', MONGO_URI)
mongoose.Promise = global.Promise;
const db_connect = () => mongoose.connect(MONGO_URI, {}).catch(err => {
    setTimeout(db_connect, 5000)
});
module.exports = { db_connect }